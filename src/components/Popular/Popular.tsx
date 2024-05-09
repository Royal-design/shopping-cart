import { useEffect } from "react";
import { data_product } from "../../assets/data";
import { Item } from "../Item/Item";
import "./popular.scss";

export const formatIntersection = (selector: string) => {
  const removeHidden = (entries: any, observer: any) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("hidden");

    observer.unobserve(entry.target);
  };
  const contentObserver = new IntersectionObserver(removeHidden, {
    root: null,
    threshold: 0.15
  });

  const target: any = document.querySelector(`.${selector}`);
  contentObserver.observe(target);
};

export const Popular = () => {
  const content = (
    <div className="popular hidden">
      <h1 className="popular-heading">
        Popular in Women <hr />
      </h1>
      <div className="popular-item">
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

  useEffect(() => {
    formatIntersection("popular");
  }, []);

  return content;
};
