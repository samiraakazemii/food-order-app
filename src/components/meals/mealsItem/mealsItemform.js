import React, { useRef, useState } from "react";
import Input from "../../ui/input/input";
import style from "./mealsItemform.module.css";

const MealsItemForm = ({ onAddItemTocart }) => {
  const NumberAmountRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);

  const ItemSubmitHandler = (e) => {
    e.preventDefault();
    const EnteredAmount = NumberAmountRef.current.value;
    const EnteredAmountNumber = +EnteredAmount;
    if (
      EnteredAmountNumber === 0 ||
      EnteredAmountNumber < 1 ||
      EnteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }
    onAddItemTocart(EnteredAmountNumber);
  };
  return (
    <>
      <form className={style.form} onSubmit={ItemSubmitHandler}>
        <Input
          ref={NumberAmountRef}
          label="Amount"
          input={{
            id: "amount",
            min: "1",
            max: "5",
            step: "1",
            type: "number",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!formIsValid && <p>Please Enter Valid Naumber(1-5).</p>}
      </form>
    </>
  );
};

export default MealsItemForm;
