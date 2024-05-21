import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShopProvider } from "./Context/ShopContext.tsx";
import { CartContextProvider } from "./Context/CartContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a5zhsep75tbh0w5r.us.auth0.com"
      clientId="jlDCkFJQqoPetQQV5KaL10o47coz08Dc"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <HashRouter>
        <ShopProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ShopProvider>
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>
);
