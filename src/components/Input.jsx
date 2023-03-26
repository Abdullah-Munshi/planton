import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className={`w-full px-3 py-1 h-[40px] border-2 border-lightGray rounded-[2px] transition ease-in-out focus:border-primary outline-none ${
        props.icon === "true" ? "pr-8" : null
      }`}
    />
  );
};

export default Input;
