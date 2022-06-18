import React from "react";
import style from './cartItem.module.css';

const CartItem = (props) => {
    const {name, price, amount,id } = props.CartItem;
  return (
    <li key={id} className={style["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{price}</span>
          <span className={style.amount}> x {amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
