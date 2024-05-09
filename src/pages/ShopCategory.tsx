import { Item } from "../components/Item/Item";
import { ShopBanner } from "../components/ShopBanner/ShopBanner";
import "./shopcategory.scss";
import { UseShopHook } from "../Hooks/UseShopHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type ShopCategoryPropsType = {
  image: string;
  category: string;
};
export const ShopCategory = ({ image, category }: ShopCategoryPropsType) => {
  const { products } = UseShopHook();

  const content = (
    <div className="shopcategory">
      <div className="shopcategory-sort">
        <p className="shopcategory-text">
          <span className="shopcategory-text-bold">showing 1-12</span> out of 36
          products
        </p>
        <button className="shopcategory-btn">
          Sort by <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
      <div className="shopcategory-products">
        {products.map((product) => {
          if (product.category === category) {
            return (
              <Item
                key={product.sku}
                sku={product.sku}
                image={product.image}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        <div className="shopcategory-loadmore-btn">Explore More</div>
      </div>
    </div>
  );
  return (
    <>
      <ShopBanner image={image} />
      {content}
    </>
  );
};
