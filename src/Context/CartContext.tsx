import { ReactElement, createContext, useMemo, useReducer } from "react";
import { formatPrice } from "../components/Item/Item";

export type CartItemType = {
  sku: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  category: string;
  image: string;
  qty: number;
};

export type CartStateType = { cart: CartItemType[] };

const cartInitState: CartStateType = { cart: [] };

const REDUCE_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  SUBMIT: "SUBMIT"
};

export type ReducerActionType = typeof REDUCE_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCE_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD section");
      }
      const { sku, name, image, oldPrice, newPrice, category } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const itemExist: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      const qty: number = itemExist ? itemExist.qty + 1 : 1;

      return {
        ...state,
        cart: [
          ...filteredCart,
          { sku, name, image, oldPrice, newPrice, category, qty }
        ]
      };
    }
    case REDUCE_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE section");
      }
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart] };
    }

    case REDUCE_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Unidentified action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTION = useMemo(() => {
    return REDUCE_ACTION_TYPE;
  }, []);

  const totalItem = state.cart.reduce((prevValue, cartItem) => {
    return prevValue + cartItem.qty;
  }, 0);

  const totalPrice = formatPrice(
    state.cart.reduce((prevValue, cartItem) => {
      return prevValue + cartItem.qty * cartItem.newPrice;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTION, totalItem, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  cart: [],
  REDUCER_ACTION: REDUCE_ACTION_TYPE,
  totalItem: 0,
  totalPrice: ""
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = {
  children: ReactElement | ReactElement[];
};

export const CartContextProvider = ({ children }: ChildrenType) => {
  return (
    <CartContext.Provider value={useCartContext(cartInitState)}>
      {children}
    </CartContext.Provider>
  );
};
