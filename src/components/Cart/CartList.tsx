import "./cart.scss";
import { CartItemType } from "../../Context/CartContext";
import { ReducerActionType } from "../../Context/CartContext";
import { ReducerAction } from "../../Context/CartContext";
import { formatPrice } from "../Item/Item";
type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
};

export const CartList = ({ item, dispatch, REDUCER_ACTION }: PropsType) => {
  const onRemoveClick = () => {
    dispatch({ type: REDUCER_ACTION.REMOVE, payload: item });
  };

  const itemTotalPrice = formatPrice(item.qty * item.newPrice);

  const content = (
    <div className="cart-content">
      <figure className="cart-figure">
        <img src={item.image} alt={item.image} className="cart-item-image" />
      </figure>
      <p className="cart-item-title">{item.name}</p>
      <p className="cart-item-price">{formatPrice(item.newPrice)}</p>
      <p className="cart-item-quantity">{item.qty}</p>
      <p className="cart-item-total">{itemTotalPrice}</p>
      <p className="cart-item-remove" onClick={onRemoveClick}>
        &times;
      </p>
    </div>
  );
  return content;
};
