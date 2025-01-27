import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import manImage from "./assets/pc4.webp";
import womanImage from "./assets/pc6.webp";
import kidimage from "./assets/pc2.webp";
import { lazy } from "react";
import { Suspense } from "react";
import { SpinerLoader } from "./components/SpinerLoader";

const Shop = lazy(() =>
  import("./pages/Shop").then(({ Shop }) => ({ default: Shop }))
);

const ShopCategory = lazy(() =>
  import("./pages/ShopCategory").then(({ ShopCategory }) => ({
    default: ShopCategory
  }))
);
const Product = lazy(() =>
  import("./pages/Product").then(({ Product }) => ({
    default: Product
  }))
);

const Cart = lazy(() =>
  import("./pages/Cart").then(({ Cart }) => ({
    default: Cart
  }))
);

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<SpinerLoader />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/men"
          element={
            <Suspense fallback={<SpinerLoader />}>
              <ShopCategory category="men" image={manImage} />
            </Suspense>
          }
        />
        <Route
          path="/women"
          element={
            <Suspense fallback={<SpinerLoader />}>
              <ShopCategory category="women" image={womanImage} />
            </Suspense>
          }
        />
        <Route
          path="/kids"
          element={
            <Suspense fallback={<SpinerLoader />}>
              <ShopCategory category="kids" image={kidimage} />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<SpinerLoader />}>
              <Product />
            </Suspense>
          }
        >
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<SpinerLoader />}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/login" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
