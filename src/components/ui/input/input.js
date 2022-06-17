import React from "react";
import style from "./input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.form}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
