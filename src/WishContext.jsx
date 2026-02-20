import React, { createContext, useContext, useState } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);

  const addToWish = (product) => {
    const exists = wishItems.find(item => item.title === product.title);

    if (!exists) {
      setWishItems([...wishItems, product]);
    }
  };

  const removeFromWish = (title) => {
    setWishItems(wishItems.filter(item => item.title !== title));
  };

  const isInWish = (title) => {
    return wishItems.some(item => item.title === title);
  };

  return (
    <WishContext.Provider
      value={{
        wishItems,
        addToWish,
        removeFromWish,
        isInWish
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);