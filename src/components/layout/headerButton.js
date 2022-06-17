import React, { useContext } from "react";
import CartIcon from "../cart/cartIcon";
import cartContext from "../../store/cart-context";
import style from "./headerButton.module.css";

const HeaderButton = ({ onClick }) => {
  const cartCtx = useContext(cartContext);
  const NumberOfCartItem = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  return (
    <>
      <button className={style.button} onClick={onClick}>
        <span className={style.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>{NumberOfCartItem}</span>
      </button>
    </>
  );
};

export default HeaderButton;
