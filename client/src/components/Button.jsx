import React from "react";

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-blue-600",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
