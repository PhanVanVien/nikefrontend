import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 leading-none rounded-full  text-lg px-7 py-4 border font-montserrat ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "text-white bg-coral-red border-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
