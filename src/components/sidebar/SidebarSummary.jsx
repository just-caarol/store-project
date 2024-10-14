import propTypes from "prop-types";
import { CartItemsType } from "../../types/types";

SidebarSummary.propTypes = {
  cartItems: CartItemsType,
  clearCart: propTypes.func,
  totalPrice: propTypes.string,
};

function SidebarSummary({ cartItems, clearCart, totalPrice }) {
  if (!cartItems.length) return null;
  return (
    <footer className="d-flex flex-column basket-summary">
      <div>Total payment: {totalPrice} zł</div>
      <div className="clickable empty-basket" onClick={() => clearCart()}>
        <img src="/bin.png" className="sidebar-icon" alt="bin icon" /> Empty
        Basket
      </div>
    </footer>
  );
}

export default SidebarSummary;
