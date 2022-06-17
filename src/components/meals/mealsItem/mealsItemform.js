import React from "react";
import Input from "../../ui/input/input";
import style from "./mealsItemform.module.css";

const MealsItemForm = () => {
  return (
    <>
      <form className={style.form}>
        <Input
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
      </form>
    </>
  );
};

export default MealsItemForm;
