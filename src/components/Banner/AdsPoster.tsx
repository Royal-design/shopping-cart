import handWave from "../../assets/handIcon.png";
import bannerLady from "../../assets/bannerLady.webp";
import "./banner.scss";

export const AdsPoster = () => {
  const content = (
    <div className="banner">
      <div className="banner-left">
        <h3 className="banner-title">New Arrivals Only</h3>
        <h2 className="banner-new">
          new{" "}
          <span>
            <img className="banner-handwave" src={handWave} alt="handwave" />
          </span>{" "}
        </h2>
        <h2 className="banner-collection">
          collections <br />
          for everyone
        </h2>
        <button className="banner-btn">Latest collection &rarr; </button>
      </div>
      <div className="banner-right">
        <img className="banner-img" src={bannerLady} alt="bannerLady" />
      </div>
    </div>
  );
  return content;
};
