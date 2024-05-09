import { UseShopHook } from "../Hooks/UseShopHook";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { Description } from "../components/Description/Description";
import { RelatedProduct } from "../components/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { products } = UseShopHook();
  const { productId } = useParams();
  const product = products.find((product) => product.sku === productId);
  if (product !== undefined) {
    return (
      <>
        <Breadcrumb name={product.name} category={product.category} />
        <ProductDisplay
          product={product}
          name={product.name}
          img={product.image}
          newPrice={product.newPrice}
          oldPrice={product.oldPrice}
        />
        <Description />
        <RelatedProduct />
      </>
    );
  }
};
