import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { publicKey, serviceId, templateId } from "../../env.config.ts";

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

interface Translations {
  nameRequired: string;
  emailRequired: string;
  messageRequired: string;
  sendSuccess: string;
  sendError: string;
  maxLengthName: string;
  patternEmail: string;
  maxLengthMessage: string;
  minLengthMessage: string;
}

export const useContactForm = (translations: Translations) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!form.current) return;
    setIsSubmitting(true);
    setNotification(null);

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });
      setNotification({ type: "success", message: translations.sendSuccess });
      reset();
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      setNotification({ type: "danger", message: translations.sendError });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validations = {
    user_name: {
      required: translations.nameRequired,
      maxLength: {
        value: 20,
        message: translations.maxLengthName,
      },
    },
    user_email: {
      required: translations.emailRequired,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: translations.patternEmail,
      },
    },
    message: {
      required: translations.messageRequired,
      minLength: {
        value: 10,
        message: translations.minLengthMessage,
      },
      maxLength: {
        value: 500,
        message: translations.maxLengthMessage,
      },
    },
  };

  return {
    form,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    notification,
    onSubmit,
    validations,
  };
};
