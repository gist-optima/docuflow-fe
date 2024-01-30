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
        "rounded-md border-2 flex items-center gap-1 border-solid border-gray-300 bg-slate-100 p-2 " +
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
