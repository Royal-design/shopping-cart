import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { UseCartContextType } from "../Context/CartContext";

export const useCartContextHook = (): UseCartContextType => {
  return useContext(CartContext);
};
