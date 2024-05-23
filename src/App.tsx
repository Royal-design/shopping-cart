import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import manImage from "./assets/pc4.png";
import womanImage from "./assets/pc6.png";
import kidimage from "./assets/pc2.png";
import { lazy } from "react";
import { Suspense } from "react";

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
            <Suspense fallback={<p>Loading...</p>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/men"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <ShopCategory category="men" image={manImage} />
            </Suspense>
          }
        />
        <Route
          path="/women"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <ShopCategory category="women" image={womanImage} />
            </Suspense>
          }
        />
        <Route
          path="/kids"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <ShopCategory category="kids" image={kidimage} />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Product />
            </Suspense>
          }
        >
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/login" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
