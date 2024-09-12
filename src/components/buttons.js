import React from "react";

const Button = ({ children, onClick, variant = "primary", size = "md" }) => {
  const baseStyles =
    "rounded font-medium focus:outline-nine focus:ring-2 transition ease-in-out duration-200";

  const variants = {
    primary: "bg-blue-400 text-white hover:bg-blue-300 focus:ring-blue-200 border-0",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",

  };

  const sizes = {
    sm: "px-4 py-0 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
