import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { UseShopPropsType } from "../Context/ShopContext";

export const UseShopHook = (): UseShopPropsType => {
  return useContext(ShopContext);
};
