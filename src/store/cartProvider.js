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
      state.TotalAmount + action.item.price * action.item.amount;

    const FindExsitItemIndex = state.items.findIndex(
      (i) => i.id === action.item.id
    );
    const ExsitItemCard = state.items[FindExsitItemIndex];
    if (ExsitItemCard) {
      let UpdateItem = {
        ...ExsitItemCard,
        amount: ExsitItemCard.amount + action.item.amount,
      };
      UpdateCardItems = [...state.items];
      UpdateCardItems[FindExsitItemIndex] = UpdateItem;
    } else {
      UpdateCardItems = state.items.concat(action.item);
    }

    return {
      items: UpdateCardItems,
      TotalAmount: UpdateTotalAmount,
    };
  }
  if (action.type == "REMOVE") {
    let UpdateCardItems;
    const FindExsitingIndex = state.items.findIndex((i) => i.id === action.id);
    const ExsitingItem = state.items[FindExsitingIndex];
    const UpdateTotalAmount = state.TotalAmount - ExsitingItem.price;
    if (ExsitingItem.amount === 1) {
      UpdateCardItems = state.items.filter((i) => i.id !== action.id);
    } else {
      let UpdateItem = {
        ...ExsitingItem,
        amount: ExsitingItem.amount - 1,
      };
      UpdateCardItems = [...state.items];
      UpdateCardItems[FindExsitingIndex] = UpdateItem;
    }

    return {
      items: UpdateCardItems,
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
    dispatchCartState({ type: "REMOVE", id: id });
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
