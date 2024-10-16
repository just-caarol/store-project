import { Link } from "react-router-dom";

function CartNoItems() {
  return (
    <>
      <div className="basket-message-empty">
        <p className="f-400 ">Basket is empty (0)</p>
        <Link
          to="/products"
          className="link d-flex align-items-center mt-40"
          preventScrollReset
        >
          <img
            src="/back.png"
            className="back-icon d-flex justify-content-center align-items-center"
            alt="back icon"
          />
          Continue shopping
        </Link>
      </div>
    </>
  );
}

export default CartNoItems;
