import React, { useEffect, useState } from "react";
import Card from "../ui/card/card";
import MealsItem from "./mealsItem/mealsItem";
import UseHttp from "../../hooks/use-http";
import loadingGif from "../../assets/Loading.gif";
import style from "./availableMeals.module.css";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const { isLoading, error, RequestHttp: FetchMeals } = UseHttp();
  const [Meals, setMeals] = useState([]);

  useEffect(() => {
    const TransformData = (data) => {
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

  // if (isLoading) {
  //   return (
  //     <>
  //       <p className={style.Loading}>Loading...</p>
  //       <img
  //         className={style["loading-mask"]}
  //         src={loadingGif}
  //         alt="wait until the page loads"
  //       />
  //     </>
  //   );
  // }
  // if (error) {
  //   return (
  //     <>
  //       <p className={style.ErrorHttp}>{error}</p>
  //     </>
  //   );
  // }

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
