import propTypes from "prop-types";
import HamburgerMenuLink from "./HamburgerMenuLink";

HamburgerMenu.propTypes = {
  isOpen: propTypes.bool,
};

function HamburgerMenu({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ul className="hamburger-menu-items">
      <HamburgerMenuLink
        path="/"
        text="Grocery Stand"
        img={() => (
          <img
            src="/box.png"
            className="grocery-stand-logo"
            alt="grocery stand icon"
          />
        )}
      />

      <HamburgerMenuLink
        path="/products"
        text="Products"
        icon="fa-solid fa-dolly"
      />

      <HamburgerMenuLink
        path="/farmers"
        text="Farmers"
        icon="fa-solid fa-tractor"
      />
    </ul>
  );
}

export default HamburgerMenu;
