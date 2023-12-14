import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { showMessage } from "react-native-flash-message";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const uniqueId = `${product.id}-${uuidv4()}`;
    const productWithUniqueId = { ...product, uniqueId };
    setCart([...cart, productWithUniqueId]);

    showMessage({
      message: "Prece pievienota grozam!",
      type: "success",
    });
  };

  const removeFromCart = (uniqueId) => {
    const updatedCart = cart.filter((item) => item.uniqueId !== uniqueId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
