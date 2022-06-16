import React from "react";
import CardIcon from "../card/cardIcon";
import style from "./headerButton.module.css";

const HeaderButton = () => {
  return (
    <>
      <button className={style.button}>
        <span className={style.icon}>
          <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderButton;
