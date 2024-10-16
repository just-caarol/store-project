import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartItemsType } from "../../types/types";
import {
  getGroupedCartItems,
  getTotalPriceOfAllItemsFromTheBasket,
} from "../../utils/cartItems";

CartSummary.propTypes = {
  cartItems: CartItemsType,
  clearCart: propTypes.func,
};

function CartSummary({ cartItems, clearCart }) {
  if (!cartItems.length) {
    return null;
  }

  const groupedItems = getGroupedCartItems(cartItems);
  const totalPrice = getTotalPriceOfAllItemsFromTheBasket(groupedItems);

  return (
    <div className="summary">
      <div className="cart-summary flex-column">
        <div className="cart-summary cart-empty-basket">
          <Link
            onClick={() => clearCart()}
            className="cart-text"
            preventScrollReset
          >
            <img src="/bin.png" className="sidebar-icon" alt="bin icon" />
            Empty Basket
          </Link>
        </div>
        <div className="cart-summary cart-number-of-products">
          Basket:
          <span className="bold-text">{cartItems.length} products</span>
        </div>
        <div className="cart-summary cart-total-payment">
          Total payment:
          <span className="bold-text"> {totalPrice} zł</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
