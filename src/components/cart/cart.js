import React, { useContext, useState } from "react";
import Modal from "../ui/modal/modal";
import CartContext from "../../store/cart-context";
import CartItem from "./cartItem";
import CheckOut from "./checkOut";
import style from "./cart.module.css";
import UseHttp from "../../hooks/use-http";

const Cart = ({ onClose }) => {
  const { isLoading, error, RequestHttp: PostOrder } = UseHttp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [chekOut, setchekOut] = useState(false);

  const CartCtx = useContext(CartContext);
  const TotalAmount = `$${CartCtx.TotalAmount.toFixed(2)}`;
  const ItemLength = CartCtx.items.length > 0;

  const onRemoveHandler = (id) => {
    CartCtx.RemoveItem(id);
  };
  const onAddHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const ConfirmHandler = () => {
    setchekOut(true);
  };

  const ConfirmUserData = (data) => {
    setIsSubmitting(true);
    PostOrder({
      url: "https://food-order-46fef-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      data: {
        user: data,
        orderedItems: CartCtx.items,
      },
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    CartCtx.clearCart();
  };

  const CartItems = (
    <ul className={style["cart-items"]}>
      {CartCtx.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <CartItem
          key={item.id}
          CartItem={item}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Modal onClose={onClose}>
        {!isSubmitting && !didSubmit && (
          <>
            {CartItems}
            <div className={style.Total}>
              <span>Total Amount</span>
              <span>{TotalAmount}</span>
            </div>
            {chekOut && (
              <CheckOut onClose={onClose} onConfirm={ConfirmUserData} />
            )}
            {!chekOut && (
              <div className={style.action}>
                <button className={style.button} onClick={onClose}>
                  Close
                </button>
                {ItemLength && (
                  <button onClick={ConfirmHandler} className={style.button}>
                    Order
                  </button>
                )}
              </div>
            )}
          </>
        )}
        {isSubmitting && <p>Sending order data...</p>}
        {!isSubmitting && didSubmit && (
          <div>
            <p>Successfully sent the order!</p>
            <div className={style.action}>
              <button className={style.button} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Cart;
