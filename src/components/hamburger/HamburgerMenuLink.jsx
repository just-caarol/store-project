import propTypes from "prop-types";
import { Link } from "react-router-dom";

HamburgerMenuLink.propTypes = {
  path: propTypes.string,
  text: propTypes.string,
  icon: propTypes.string,
  img: propTypes.string,
};

function HamburgerMenuLink({ path, text, icon, img }) {
  const linkIcon = icon ? <i className={icon}></i> : img();

  return (
    <li>
      <Link to={path} className="d-flex align-items-center">
        {linkIcon}
        <span className="px-1">{text}</span>
      </Link>
    </li>
  );
}

export default HamburgerMenuLink;
