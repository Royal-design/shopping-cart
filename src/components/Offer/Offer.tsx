import offer_image from "../../assets/offersimage.png";
import "./offer.scss";
import { formatIntersection } from "../Popular/Popular";
import { useEffect } from "react";

export const Offer = () => {
  const content = (
    <div className="offer hidden">
      <div className="offer-container">
        <div className="offer-left">
          <h1 className="offer-heading">
            Exclusive <br /> Offers For You
          </h1>
          <p className="offer-text">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="offer-btn">Check Now</button>
        </div>
        <div className="offer-right">
          <figure className="offer-figure">
            <img src={offer_image} className="offer-image" alt="offer-image" />
          </figure>
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    formatIntersection("offer");
  }, []);
  return content;
};
