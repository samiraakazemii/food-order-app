import React from "react";
import CartIcon from "../cart/cartIcon";
import style from "./headerButton.module.css";

const HeaderButton = ({ onClick }) => {
  return (
    <>
      <button className={style.button} onClick={onClick}>
        <span className={style.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderButton;
