import React from "react";
import MealsItemForm from "./mealsItemform";
import style from "./mealsItem.module.css";

const MealsItem = (props) => {
  const { name, description, price } = props.meals;
  return (
    <>
      <li className={style.meal}>
        <div>
          <h3>{name}</h3>
          <div className={style.description}>{description}</div>
          <div className={style.prices}>{`$${price.toFixed(2)}`}</div>
        </div>
        <div>
          <MealsItemForm />
        </div>
      </li>
    </>
  );
};

export default MealsItem;
