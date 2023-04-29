import { createContext, useState } from "react";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const localData = JSON.parse(localStorage.getItem("cart"));
  const sessionCart = JSON.parse(localStorage.getItem("sessionCart"));
  const prior = sessionCart || localData || "";
  const [cart, setCart] = useState(prior);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
