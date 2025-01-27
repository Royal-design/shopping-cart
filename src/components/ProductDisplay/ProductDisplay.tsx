import "./productdisplay.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatPrice } from "../Item/Item";
import { useCartContextHook } from "../../Hooks/useCartContextHook";
import { ShopPropsType } from "../../Context/ShopContext";

type ProductPropsType = {
  name: string;
  img: string;
  newPrice: number;
  oldPrice: number;
  product: ShopPropsType;
};
export const ProductDisplay = ({
  name,
  img,
  newPrice,
  oldPrice,
  product
}: ProductPropsType) => {
  const { REDUCER_ACTION, dispatch, cart } = useCartContextHook();

  const addToCart = () => {
    dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });
    console.log(cart);
  };

  const content = (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-image__flex">
          <div className="product-display-image__flex-small">
            <figure className="product-display-figure">
              <img src={img} alt="image1" className="product-display-image1" />
            </figure>
            <figure className="product-display-figure">
              <img src={img} alt="image2" className="product-display-image2" />
            </figure>
            <figure className="product-display-figure">
              <img src={img} alt="image3" className="product-display-image3" />
            </figure>
            <figure className="product-display-figure">
              <img src={img} alt="image4" className="product-display-image4" />
            </figure>
          </div>
          <div className="product-display-image__flex-large">
            <figure className="product-display-figure__big">
              <img
                src={img}
                alt="image4"
                className="product-display-image__big"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="product-display-right">
        <h3 className="product-display-name">{name}</h3>
        <div className="rating">
          <FontAwesomeIcon
            color="orangered"
            className="rating-star"
            icon={faStar}
          />
          <FontAwesomeIcon
            color="orangered"
            className="rating-star"
            icon={faStar}
          />
          <FontAwesomeIcon
            color="orangered"
            className="rating-star"
            icon={faStar}
          />
          <FontAwesomeIcon
            color="orangered"
            className="rating-star"
            icon={faStar}
          />
          <FontAwesomeIcon
            color="rgb(246, 181, 61)"
            className="rating-star"
            icon={faStar}
          />
          <div className="rating-text">(122)</div>
        </div>
        <div className="prices">
          <p className="prices-old">{formatPrice(oldPrice)}</p>
          <p className="prices-new">{formatPrice(newPrice)}</p>
        </div>
        <p className="description">
          Introducing our newest arrival: the Trendsetter Dress, a fusion of
          contemporary design and timeless elegance. Crafted with precision and
          flair, this dress embodies the latest fashion trends while maintaining
          a touch of sophistication
        </p>
        <div className="size">
          <p className="size-text">Select Size</p>

          <div className="size-group">
            <button className="size-btn">S</button>
            <button className="size-btn">M</button>
            <button className="size-btn">L</button>
            <button className="size-btn">XL</button>
            <button className="size-btn">XXL</button>
          </div>
          <button onClick={addToCart} className="cart-btn">
            Add To Cart
          </button>
        </div>
        <div className="category">
          <p className="category-text">
            <span className="category-text-bold">Category:</span> Women,
            T-shirt, crop Top
          </p>
          <p className="category-tag">
            <span className="category-text-bold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
  return content;
};
