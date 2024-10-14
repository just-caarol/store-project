import React from "react";
import { Link } from "react-router-dom";

function ToastMessageRemoveGroupFromCart({ picture, name }) {
  return (
    <div className="sidebar-menu-items-list">
      <p>Removed from the basket:</p>
      <div>
        <img
          className="thumbnail-picture"
          src={picture}
          alt="thumbnail picture of the product"
        />
        <p>
          <strong>{name}</strong>
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="/shopping-bag.png"
          className="sidebar-icon "
          alt="cart icon"
        />
        <Link to="/cart">View Basket</Link>
      </div>
    </div>
  );
}

export default ToastMessageRemoveGroupFromCart;
