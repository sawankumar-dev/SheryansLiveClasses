import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };
  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      // 1) quantity > 1 ho to decrement
      // 2) quantity === 1 ho to item ko remove kar do
      return prev
        .map((val) => {
          if (val.id !== id) return val;
          if (val.quantity > 1) return { ...val, quantity: val.quantity - 1 };
          return { ...val, quantity: 0 };
        })
        .filter((val) => val.quantity > 0);
    });
  };
  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
