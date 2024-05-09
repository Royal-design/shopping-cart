import { Link } from "react-router-dom";
import "./item.scss";
import LazyLoad from "react-lazy-load";
export type ItemPropType = {
  sku: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  image: string;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
  }).format(price);
};

export const Item = ({
  sku,
  name,
  newPrice,
  oldPrice,
  image
}: ItemPropType) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const content = (
    <div className="item">
      <Link to={`/product/${sku}`} onClick={handleClick}>
        {/* <figure className="item-figure">
          
        </figure > */}
        <LazyLoad threshold={0.95} className="item-figure">
          <img src={image} alt={image} className="item-image" />
        </LazyLoad>
        {/* <LazyLoadImage
          src={image}
          alt={image}
          className="item-figure"
          effect="blur"
        /> */}
      </Link>

      <p className="item-name">{name}</p>
      <div className="item-prices">
        <p className="item-prices-new">{formatPrice(newPrice)}</p>
        <p className="item-prices-old">{formatPrice(oldPrice)}</p>
      </div>
    </div>
  );

  return content;
};
