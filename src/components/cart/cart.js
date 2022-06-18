import React, { useContext } from "react";
import Modal from "../ui/modal/modal";
import CartContext from '../../store/cart-context';
import CartItem from "./cartItem";
import style from "./cart.module.css";

const Cart = ({ onClose }) => {
  const CartCtx = useContext(CartContext);
  const TotalAmount = `$${CartCtx.TotalAmount.toFixed(2)}`;
  const ItemLength = CartCtx.items.length > 0;

  const onRemoveHandler = (id) => {
    CartCtx.RemoveItem(id);
  }
  const onAddHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };

  const CartItems = (
    <ul className={style["cart-items"]}>
      {CartCtx.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <CartItem CartItem={item} onRemove={onRemoveHandler.bind(null,item.id)} onAdd={onAddHandler.bind(null,item)} />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {CartItems}
      <div className={style.Total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={style.action}>
        <button className={style["button--alt"]} onClick={onClose}>
          Close
        </button>
        {ItemLength && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
