import { Link } from "react-router-dom";

function ContinueShoppingForCartTable() {
  return (
    <div className="cart-continue-shopping-container">
      <div className="cart-continue-shopping-inner">
        <Link
          to="/products"
          className="w-100 link cart-continue-shopping-web cart-continue-shopping-link d-flex align-items-center"
          preventScrollReset
        >
          <img src="/back.png" className="back-icon" alt="back icon" />
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default ContinueShoppingForCartTable;
