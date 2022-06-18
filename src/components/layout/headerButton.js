import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../cart/cartIcon";
import cartContext from "../../store/cart-context";
import style from "./headerButton.module.css";

const HeaderButton = ({ onClick }) => {
  const [bumpIsShown, setbumpIsShown] = useState(false);
  const cartCtx = useContext(cartContext);
  const NumberOfCartItem = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbumpIsShown(true);
    let Timer = setTimeout(() => {
      setbumpIsShown(false);
    }, 300);
    return () => {
      clearTimeout(Timer);
    };
  }, [cartCtx.items]);

  const BtnClasses = `${style.button} ${bumpIsShown ? style.bump : ""}`;
  return (
    <>
      <button className={BtnClasses} onClick={onClick}>
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
