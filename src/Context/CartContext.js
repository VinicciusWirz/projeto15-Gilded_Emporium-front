import { createContext, useState } from "react";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const localData = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(localData));

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
