import "./shopbanner.scss";

export type PropType = {
  image: string;
};

export const ShopBanner = ({ image }: PropType) => {
  const content = (
    <div className="shopbanner">
      <div className="shopbanner-left">
        <h1 className="shopbanner-heading">FLAT 50% OFF</h1>
        <p className="shopbanner-text">
          <span className="shopbanner-text-red">12</span> Hours
          <span className="shopbanner-text-red"> 20</span> Mins
        </p>
        <button className="shopbanner-btn">Explore now</button>
      </div>
      <div className="shopbanner-right">
        <img src={image} alt="image" className="shopbanner-img" />
      </div>
    </div>
  );
  return content;
};
