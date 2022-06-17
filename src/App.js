import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
