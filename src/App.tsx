import { ErrorPage } from "./ErrorPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer/Footer";
import manImage from "./assets/pc4.png";
import womanImage from "./assets/pc6.png";
import kidimage from "./assets/pc2.png";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route index element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory category="men" image={manImage} />}
        />
        <Route
          path="/women"
          element={<ShopCategory category="women" image={womanImage} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kids" image={kidimage} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
