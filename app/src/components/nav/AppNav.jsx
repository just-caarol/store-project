import propTypes from "prop-types";
import { Link } from "react-router-dom";

import { useLocalStorageContext } from "../../hooks/localStorageContext";
import { NavEventsType } from "../../types/types";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import HamburgerMenuIcon from "../hamburger/HamburgerMenuIcon";
import AppNavLink from "./AppNavLink";

AppNav.propTypes = {
  isHamburgerOpened: propTypes.bool,
  events: NavEventsType,
};

function AppNav({
  isHamburgerOpened,
  events: { onToggleSidebar, onHamburgerClick },
}) {
  const { cartItems } = useLocalStorageContext();

  return (
    <div className="app-nav">
      <nav className="top-nav">
        <HamburgerMenuIcon
          isOpen={isHamburgerOpened}
          onClick={onHamburgerClick}
        />
        <div className="d-flex grocery-stand">
          <Link to="/" className="d-flex text-decoration-none">
            <img
              src="/box.png"
              className="grocery-stand-logo"
              alt="grocery stand icon"
            />
            <span className="nav-text">Grocery Stand</span>
          </Link>
        </div>
        <ul className="nav-list">
          <AppNavLink name="products" path="/products" />
          <AppNavLink name="farmers" path="/farmers" />

          <li className="nav-link-right">
            <button
              className="nav-link-basket"
              onClick={() => onToggleSidebar((prev) => !prev)}
            >
              <img
                src="/shopping-bag.png"
                className="cart-logo"
                alt="cart icon"
              />
              <span className="badge">{cartItems.length}</span>
            </button>
          </li>
        </ul>
      </nav>
      <HamburgerMenu isOpen={isHamburgerOpened} />
    </div>
  );
}

export default AppNav;
