import cls from "classnames";
import { capitalize } from "lodash";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

AppNavLink.propTypes = {
  name: propTypes.string,
  path: propTypes.string,
};

function AppNavLink({ name, path }) {
  return (
    <li className={`nav-link-right align-self-center ${name}-link`}>
      <Link
        className={cls("nav-link", {
          active: window.location.pathname.slice(1) === name,
        })}
        to={path}
      >
        {capitalize(name)}
      </Link>
    </li>
  );
}

export default AppNavLink;
