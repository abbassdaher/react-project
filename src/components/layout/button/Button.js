import React from "react";

const Button = (props) => {
  return (
    <button
      type={`${props.type == "submit" ? "submit" : "button"}`}
      onClick={props.onClick}
      className={props.className ? props.className : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
