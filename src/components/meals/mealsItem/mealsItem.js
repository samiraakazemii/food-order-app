import React, { useContext } from "react";
import MealsItemForm from "./mealsItemform";
import style from "./mealsItem.module.css";
import CartContext from "../../../store/cart-context";

const MealsItem = (props) => {
  const { name, description, price, id } = props.meals;
  const CartCntx = useContext(CartContext);

  const HandlerAdItemToCart = (Amount) => {
    CartCntx.addItem({
      id: id,
      name: name,
      amount: Amount,
      price: price,
    });
  };
  return (
    <>
      <li className={style.meal}>
        <div>
          <h3>{name}</h3>
          <div className={style.description}>{description}</div>
          <div className={style.prices}>{`$${price.toFixed(2)}`}</div>
        </div>
        <div>
          <MealsItemForm onAddItemTocart={HandlerAdItemToCart} />
        </div>
      </li>
    </>
  );
};

export default MealsItem;
