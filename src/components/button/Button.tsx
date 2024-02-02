import { ButtonHTMLAttributes } from "react";

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
      className={
        "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px] " +
        className
      }
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
