import { useState } from "react";
import { CartList } from "../components/Cart/CartList";
import { useCartContextHook } from "../Hooks/useCartContextHook";

export const Cart = () => {
  const [submit, setSubmit] = useState(false);
  const { REDUCER_ACTION, dispatch, totalPrice, cart, totalItem } =
    useCartContextHook();

  const sumbitClick = () => {
    dispatch({ type: REDUCER_ACTION.SUBMIT });
    setSubmit(true);
  };
  const content = (
    <div className="cart">
      <div className="cart-heading">
        <p className="cart-product">Products</p>
        <p className="cart-title">Title</p>
        <p className="cart-price">Price</p>
        <p className="cart-quantity">Quantity</p>
        <p className="cart-total">Total</p>
        <p className="cart-remove">Remove</p>
      </div>
      <div className="cart-item">
        {cart.map((item) => {
          return (
            <CartList
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTION={REDUCER_ACTION}
            />
          );
        })}
        <div className="cart-box">
          <div className="cart-box-left">
            <p className="cart-totals">Cart Totals</p>
            <div className="total-flex">
              <p className="total-text">Subtotal</p>
              <p className="total">{totalPrice}</p>
            </div>
            <div className="total-flex">
              <p className="shipping-text">Shipping Fee</p>
              <p className="shipping">Free</p>
            </div>
            <div className="total-flex">
              <p className="total-text-bold">Total</p>
              <p className="total-text-bold">{totalPrice}</p>
            </div>
            <button
              className="cart-submit"
              disabled={!totalItem}
              onClick={sumbitClick}
            >
              PROCCED TO CHECKOUT
            </button>
          </div>
          <div className="cart-box-right">
            <p className="promo-text">
              If you have a promo code, enter it here
            </p>
            <div className="promo-group">
              <input
                className="promo-input"
                type="text"
                placeholder="promo code"
              />
              <button className="promo-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const pageContent = submit ? (
    <p className="order-text">Your order has been placed! Thank You.</p>
  ) : (
    content
  );
  return pageContent;
};
