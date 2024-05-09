import "./relatedproduct.scss";
import { Item } from "../Item/Item";

import { data_product } from "../../assets/data";

export const RelatedProduct = () => {
  const content = (
    <div className="related">
      <h1 className="related-heading">
        Related Product
        <hr />
      </h1>
      <div className="related-item">
        {data_product.map((item) => {
          return (
            <Item
              key={item.sku}
              sku={item.sku}
              image={item.image}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          );
        })}
      </div>
    </div>
  );
  return content;
};
