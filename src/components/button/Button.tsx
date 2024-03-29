import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  icon?: React.ReactNode;
}

const Button = ({
  className,
  icon,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px] hover:bg-slate-200",
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
