import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg shadow-md transition ${className} text-slate-950`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
