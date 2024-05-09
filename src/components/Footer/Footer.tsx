import "./footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const content = (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-group">
          <Link className="footer-link" to="company">
            Company
          </Link>
          <Link className="footer-link" to="products">
            Products
          </Link>
          <Link className="footer-link" to="offices">
            Offices
          </Link>
          <Link className="footer-link" to="about">
            About
          </Link>
          <Link className="footer-link" to="contact">
            Contact
          </Link>
        </div>
        <div className="footer-social-icon">
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
          <FontAwesomeIcon className="footer-icon" icon={faPinterest} />
          <FontAwesomeIcon className="footer-icon" icon={faWhatsapp} />
        </div>
        <hr className="footer-hr" />
        <p className="footer-copy">
          Copyright &copy; 2024 - All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
  return content;
};
