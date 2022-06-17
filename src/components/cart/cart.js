import React from "react";
import Modal from "../ui/modal/modal";
import style from "./cart.module.css";
const Cart = ({ onClose }) => {
  const CartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "2", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {CartItems}
      <div className={style.Total}>
        <span>Total Amount</span>
        <span>3.56</span>
      </div>
      <div className={style.action}>
        <button className={style["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
