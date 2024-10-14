import { Link } from "react-router-dom";

function ContinueShoppingForCartList() {
  return (
    <Link
      to="/products"
      className="w-100 link cart-continue-shopping-mobile cart-continue-shopping-link align-items-center"
      preventScrollReset
    >
      <img src="/back.png" className="back-icon" alt="back icon" />
      Continue shopping
    </Link>
  );
}

export default ContinueShoppingForCartList;
