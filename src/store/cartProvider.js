import React, { useReducer } from "react";
import CartContext from "./cart-context";

const DefaultCartState = {
  items: [],
  TotalAmount: 0,
};
const CartRducer = (state, action) => {
  if (action.type === "ADD") {
    let UpdateCardItems;
    const UpdateTotalAmount =
      state.TotalAmount + action.item.amount * action.item.price;
    const FindIndexExsitItem = state.items.findIndex(
      (i) => i.id === action.item.id
    );
    const ExsitItemCart = state.items[FindIndexExsitItem];
    if (ExsitItemCart) {
      let updateItem = {
        ...ExsitItemCart,
        amount: ExsitItemCart.amount + action.item.amount,
      };
      UpdateCardItems = [...state.items];
      UpdateCardItems[FindIndexExsitItem] = updateItem;
    } else {
      UpdateCardItems = state.items.concat(action.item);
    }

    return {
      items: UpdateCardItems,
      TotalAmount: UpdateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    let UpdateCardItems;
    const FindIndexExsitItem = state.items.findIndex((i) => i.id === action.id);
    const ExsitItemCart = state.items[FindIndexExsitItem];
    const UpdateTotalAmount = state.TotalAmount - ExsitItemCart.price;

    if (ExsitItemCart.amount === 1) {
      UpdateCardItems = state.items.filter((i) => i.id !== action.id);
    } else {
      let UpdateItem = {
        ...ExsitItemCart,
        amount: ExsitItemCart.amount - 1,
      };
      UpdateCardItems = [...state.items];
      UpdateCardItems[FindIndexExsitItem] = UpdateItem;
    }

    return {
      items: UpdateCardItems,
      TotalAmount: UpdateTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return DefaultCartState;
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
    dispatchCartState({ type: "REMOVE", id: id });
  };
  const clearCartHandler = () => {
    dispatchCartState({ type: "CLEAR" });
  };

  const cartContext = {
    items: CartState.items,
    TotalAmount: CartState.TotalAmount,
    addItem: AddItemToCartHandler,
    RemoveItem: RemoveItemToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
