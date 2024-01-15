import React, { createContext } from "react";
import useLocalStrg from "../hook/useLocalStrg";
export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStrg("basket", []);
  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, item]);
      return;
    }
  }
  function deleteBasket(item) {
    setBasket(basket.filter((x)=>x._id!==item._id))
    
  }

  return (
    <BasketContext.Provider value={{ basket, addBasket,deleteBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
