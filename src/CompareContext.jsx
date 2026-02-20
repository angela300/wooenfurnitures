import React, { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState([]);

  const addToCompare = (product) => {
    const exists = compareItems.find(item => item.title === product.title);

    if (!exists) {
      setCompareItems([...compareItems, product]);
    }
  };

  const removeFromCompare = (title) => {
    setCompareItems(compareItems.filter(item => item.title !== title));
  };

  const isInCompare = (title) => {
    return compareItems.some(item => item.title === title);
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        isInCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);