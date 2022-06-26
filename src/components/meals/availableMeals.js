import React, { useEffect, useState } from "react";
import Card from "../ui/card/card";
import MealsItem from "./mealsItem/mealsItem";
import UseHttp from "../../hooks/use-http";
import loadingGif from "../../assets/Loading.gif";
import style from "./availableMeals.module.css";

const AvailableMeals = () => {
  const { isLoading, error, RequestHttp: FetchMeals } = UseHttp();
  const [Meals, setMeals] = useState([]);

  useEffect(() => {
    const TransformData = ({ data }) => {
      let dataArray = [];
      for (const key in data) {
        dataArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(dataArray);
    };

    FetchMeals(
      {
        url: "https://food-order-46fef-default-rtdb.firebaseio.com/meals.json",
      },
      TransformData
    );
  }, [FetchMeals]);

  const MealsList = Meals.map((meal) => (
    <MealsItem key={meal.id} meals={meal} />
  ));

  return (
    <>
      {!isLoading && Meals.length > 0 && !error && (
        <section className={style.meals}>
          <Card className="mealCard">
            <ul>{MealsList}</ul>
          </Card>
        </section>
      )}
      {!isLoading && error && (
        <>
          <p className={style.ErrorHttp}>{error}</p>
        </>
      )}
      {isLoading && (
        <>
          <p className={style.Loading}>Loading...</p>
          <img
            className={style["loading-mask"]}
            src={loadingGif}
            alt="wait until the page loads"
          />
        </>
      )}
    </>
  );
};

export default AvailableMeals;
