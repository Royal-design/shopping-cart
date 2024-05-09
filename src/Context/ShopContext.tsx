import { ReactElement, createContext, useState } from "react";
import { products } from "../assets/product";

export type ShopPropsType = {
  sku: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  category: string;
  image: string;
};

const shopState: ShopPropsType[] = products;

export type UseShopPropsType = {
  products: ShopPropsType[];
};

const initShopState: UseShopPropsType = { products: [] };

export const ShopContext = createContext<UseShopPropsType>(initShopState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ShopProvider = ({ children }: ChildrenType) => {
  const [products] = useState<ShopPropsType[]>(shopState);
  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};
