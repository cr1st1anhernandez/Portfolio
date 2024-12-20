import cn from "classnames";
import type { ReactNode } from "react";
import { AlertIcon, CheckMarkIcon } from "./Icons";

interface NotificationProps {
  type: "success" | "danger";
  message: string;
}

export const Notification = ({ type, message }: NotificationProps) => {
  const renderIcon = (): ReactNode => {
    if (type === "success") return <CheckMarkIcon className="size-6" />;
    if (type === "danger") return <AlertIcon className="size-6" />;
    return null;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 justify-center p-4 rounded-lg shadow-md text-lg transition-all duration-500 ease-in-out border-2 notification-animation",
        {
          "bg-[#0c181b] text-[#0eb664] border-[#095028]": type === "success",
          "bg-[#1c0410] text-[#f54180] border-[#5a0f2d]": type === "danger",
        }
      )}
    >
      <div
        className={cn("p-2 rounded-full", {
          "bg-[#0a5129]": type === "success",
          "bg-[#610726]": type === "danger",
        })}
      >
        {renderIcon()}
      </div>
      <span>{message}</span>
    </div>
  );
};
