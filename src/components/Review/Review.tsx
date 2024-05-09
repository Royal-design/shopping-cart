import "./review.scss";

type PropType = {
  description: string;
};

export const Review = ({ description }: PropType) => {
  const content = <div className="review">{description}</div>;
  return content;
};
