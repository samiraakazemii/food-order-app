import React from "react";

const CartContext = React.createContext({
  items: [],
  TotalAmount: 0,
  addItem: (item) => {},
  RemoveItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
