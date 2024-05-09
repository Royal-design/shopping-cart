import "./breadcrumb.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
type propsType = {
  category: string;
  name: string;
};

export const Breadcrumb = ({ category, name }: propsType) => {
  const content = (
    <div className="breadcrumb">
      <Link className="breadcrumb-link" to="/">
        Home <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      <Link className="breadcrumb-link" to="/">
        Shop <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      <Link className="breadcrumb-link" to={`/${category}`}>
        {category} <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      {name}
    </div>
  );
  return content;
};
