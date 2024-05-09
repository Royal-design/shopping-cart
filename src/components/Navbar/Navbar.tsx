import "./navbar.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useCartContextHook } from "../../Hooks/useCartContextHook";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { totalItem } = useCartContextHook();
  const { loginWithRedirect, logout, isAuthenticated }: any = useAuth0();
  const content = (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink className="menu-link" to="/">
              Shop
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="men">
              Men
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="women">
              Women
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="kids">
              Kids
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="action">
        {isAuthenticated ? (
          <Link
            className="nav-btn"
            to="login"
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin }
              })
            }
          >
            Logout
          </Link>
        ) : (
          <Link
            className="nav-btn"
            to="login"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Link>
        )}

        <Link to="cart">
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        </Link>
        <span className="total-item">{totalItem}</span>
      </div>
    </nav>
  );
  return content;
};
