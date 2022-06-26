import React from "react";
import { useForm } from "react-hook-form";
import style from "./checkOut.module.css";

const CheckOut = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => props.onConfirm(data);

  return (
    <form className={style["chekout-form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.Control}>
        <label htmlFor="name">First Name</label>
        <input
          className={errors.name && style.invalidInput}
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className={style.invalid}>Please Enter a valid Name!</span>
        )}
      </div>
      <div className={style.Control}>
        <label htmlFor="street">Street</label>
        <input
          className={errors.street && style.invalidInput}
          type="text"
          id="street"
          {...register("street", { required: true })}
        />
        {errors.street && (
          <span className={style.invalid}>Please Enter a valid Street!</span>
        )}
      </div>
      <div className={style.Control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          {...register("postal", { required: true, maxLength: 5 })}
        />
        {errors.postal && (
          <span className={style.invalid}>
            Please Enter a valid Postal Code (5 character long)!
          </span>
        )}
      </div>
      <div className={style.Control}>
        <label htmlFor="city">City</label>
        <input
          className={errors.city && style.invalidInput}
          type="text"
          id="city"
          {...register("city", { required: true })}
        />
        {errors.city && (
          <span className={style.invalid}>Please Enter a valid city!</span>
        )}
      </div>
      <div className={style.actions}>
        <button className={style.submit}>Confirm</button>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
