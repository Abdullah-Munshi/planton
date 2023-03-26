import React from "react";

const Button = ({ type, variant, size, width, id, onClick, children }) => {
  let classes = "";
  switch (variant) {
    case "success":
      classes += " bg-primary text-white";
      break;
    case "danger":
      classes += " bg-dangerRed text-white";
      break;
    default:
      classes += " bg-primary text-white";
  }
  switch (size) {
    case "md":
      classes += " px-[14px] h-[34px]";
      break;
    case "lg":
      classes += " px-[16px] h-[40px] text-base";
      break;
    default:
      classes += " px-[14px] h-[34px]";
  }

  return (
    <button
      type={type ? type : "button"}
      id={id ? id : null}
      className={`flex items-center justify-center rounded-[2px] ${
        width ? width : null
      } ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
