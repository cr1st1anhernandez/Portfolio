import cn from "classnames";
import { useContactForm } from "../customHooks/useContactForm.tsx";
import { Notification } from "./Notifications.tsx";

interface Translations {
  contactTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButton: string;
  emailRequired: string;
  nameRequired: string;
  messageRequired: string;
  submitting: string;
  sendError: string;
  sendSuccess: string;
  maxLengthName: string;
  patternEmail: string;
  maxLengthMessage: string;
  minLengthMessage: string;
}

interface ContactFormProps {
  translations: Translations;
}

export const ContactForm = ({ translations }: ContactFormProps) => {
  const {
    form,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    notification,
    onSubmit,
    validations,
  } = useContactForm(translations);

  const getInputClassName = (fieldName: keyof typeof errors) =>
    cn(
      "bg-[#27272A] w-full px-4 py-2 rounded-lg transition-all duration-300 ease-in-out text-neutral-300 outline-none",
      {
        "outline-rose-500 outline outline-2": errors[fieldName],
        "focus:outline-cyan-500": !errors[fieldName],
      }
    );

  return (
    <div className="text-lg w-full bg-[#1D1C20] rounded-lg p-6 lg:p-12 font-normal text-neutral-400">
      <h2 className="text-2xl lg:text-4xl font-bold text-neutral-100">
        {translations.contactTitle}
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="user_name"
            className="text-xl text-neutral-300 font-semibold"
          >
            {translations.nameLabel}
          </label>
          <input
            id="user_name"
            className={getInputClassName("user_name")}
            {...register("user_name", validations.user_name)}
            aria-invalid={errors.user_name ? "true" : "false"}
          />
          {errors.user_name && (
            <p role="alert" className="text-rose-500 text-sm">
              {errors.user_name?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="user_email"
            className="text-xl text-neutral-300 font-semibold"
          >
            {translations.emailLabel}
          </label>
          <input
            id="user_email"
            className={getInputClassName("user_email")}
            {...register("user_email", validations.user_email)}
            aria-invalid={errors.user_email ? "true" : "false"}
          />
          {errors.user_email && (
            <p role="alert" className="text-rose-500 text-sm">
              {errors.user_email?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xl text-neutral-300 font-semibold"
          >
            {translations.messageLabel}
          </label>
          <textarea
            id="message"
            className={getInputClassName("message")}
            {...register("message", validations.message)}
            rows={4}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p role="alert" className="text-rose-500 text-sm">
              {errors.message?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "group/btn flex gap-2 items-center justify-center relative bg-[#27272A] hover:bg-[#323232] text-neutral-300 font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out",
            {
              "opacity-50 cursor-not-allowed": isSubmitting,
            }
          )}
        >
          {isSubmitting ? translations.submitting : translations.submitButton}
          {isSubmitting && <div className="loader size-3" />}
          <BottomGradient />
        </button>

        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          />
        )}
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
