import React from "react";
import style from "./header.module.css";
import MealsImg from "../../assets/meals.jpg";
import HeaderButton from "./headerButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={style.header}>
        <h2>React Meals</h2>
        <HeaderButton onClick={onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={MealsImg} />
      </div>
    </>
  );
};
export default Header;
