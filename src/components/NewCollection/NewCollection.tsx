import { Item } from "../Item/Item";
import { new_collection } from "../../assets/collection";
import "./newcollection.scss";
import { formatIntersection } from "../Popular/Popular";
import { useEffect } from "react";

export const NewCollection = () => {
  const content = (
    <div className="collection hidden">
      <h1 className="collection-heading">
        New Collections <hr />
      </h1>
      <div className="collection-item">
        {new_collection.map((item) => {
          return (
            <Item
              sku={item.sku}
              key={item.sku}
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

  useEffect(() => {
    formatIntersection("collection");
  }, []);
  return content;
};
