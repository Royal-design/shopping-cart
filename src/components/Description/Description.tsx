import { useState } from "react";
import "./description.scss";
import { review } from "../../assets/review";
import { Review } from "../Review/Review";

export const Description = () => {
  const [toggle, setToggle] = useState("description");
  const content = (
    <div className="description-box">
      <div className="description-buttons">
        <button
          onClick={() => setToggle("description")}
          className={`description-btn ${
            toggle === "description" && "description-active"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setToggle("review")}
          className={`description-btn ${
            toggle === "review" && "description-active"
          }`}
        >
          Reviews(122)
        </button>
      </div>

      {toggle === "description" && (
        <p className="description-content">
          Introducing our online boutique, where style meets convenience.
          Discover a curated selection of fashion-forward clothing and
          accessories that cater to your unique taste and lifestyle. From
          everyday essentials to statement pieces, our e-commerce platform
          offers a seamless shopping experience right at your fingertips. Browse
          through our carefully curated collections, explore the latest trends,
          and shop with confidence knowing that quality and customer
          satisfaction are our top priorities. Elevate your wardrobe
          effortlessly and embrace the convenience of online shopping with us.
        </p>
      )}
      {toggle === "review" && (
        <div className="description-content">
          {review.map((item) => {
            return <Review key={item.id} description={item.description} />;
          })}
        </div>
      )}
    </div>
  );
  return content;
};
