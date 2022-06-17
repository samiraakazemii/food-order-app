import CartContext from "./cart-context";

const CartProvider = (props) => {
  const AddItemToCartHandler = (item) => {};

  const RemoveItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    TotalAmount: 0,
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
