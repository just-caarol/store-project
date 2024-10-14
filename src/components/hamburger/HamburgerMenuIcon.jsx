import propTypes from "prop-types";

HamburgerMenuIcon.propTypes = {
  onClick: propTypes.func,
};

function HamburgerMenuIcon({ onClick }) {
  return (
    <div className="hamburger-menu-trigger">
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        onChange={onClick}
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
    </div>
  );
}

export default HamburgerMenuIcon;
