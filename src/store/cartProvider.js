import React, { useReducer } from "react";
import CartContext from "./cart-context";

const DefaultCartState = {
  items: [],
  TotalAmount: 0,
};
const CartRducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdateCardItem = state.items.concat(action.item);
    const UpdateTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;
    return {
      items: UpdateCardItem,
      TotalAmount: UpdateTotalAmount,
    };
  }
  return DefaultCartState;
};

const CartProvider = (props) => {
  const [CartState, dispatchCartState] = useReducer(
    CartRducer,
    DefaultCartState
  );

  const AddItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const RemoveItemToCartHandler = (id) => {
    dispatchCartState({ type: "ADD", id: id });
  };

  const cartContext = {
    items: CartState.items,
    TotalAmount: CartState.TotalAmount,
    addItem: AddItemToCartHandler,
    RemoveItem: RemoveItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
