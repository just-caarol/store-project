import cls from "classnames";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorageContext } from "../../hooks/localStorageContext";

import {
  getCartItemDetails,
  getGroupedCartItems,
  getTotalPriceOfAllItemsFromTheBasket,
} from "../../utils/cartItems";
import AddOrSubtractControls from "../AddOrSubtractControls";
import SidebarSummary from "./SidebarSummary";

Sidebar.propTypes = {
  onToggleSidebar: propTypes.func,
};

function Sidebar({ onToggleSidebar }) {
  const {
    cartItems,
    removeFromCart,
    removeGroupFromCart,
    clearCart,
    setCartItems: addToCart,
  } = useLocalStorageContext();
  const navigate = useNavigate();

  const groupedItems = getGroupedCartItems(cartItems);
  const totalPrice = getTotalPriceOfAllItemsFromTheBasket(groupedItems);

  const onViewBasketClick = () => {
    navigate("/cart");
    onToggleSidebar(false);
  };

  return (
    <>
      <nav className={cls("sidebar-menu sidebar-effect")}>
        <div className="close-sidebar d-flex flex-wrap">
          <button
            className="d-flex flex-grow-1 align-items-center close-icon"
            onClick={() => onToggleSidebar((prev) => !prev)}
          >
            <img src="/back.png" className="back-icon" alt="back icon" />
            Continue shopping
          </button>

          <button
            className="sidebar-link view-basket justify-content-end flex-grow-1 d-flex align-items-center ml-10"
            onClick={onViewBasketClick}
          >
            <img
              src="/shopping-bag.png"
              className="sidebar-icon "
              alt="cart icon"
            />
            View Basket
          </button>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-header">
            <h2>
              Your Order &#40;{cartItems.length}
              &#41;
            </h2>
          </div>

          {cartItems.length > 0 ? (
            <>
              <div className="sidebar-menu-items-list">
                <ul>
                  {Object.keys(groupedItems).map((id) => {
                    const { sumPrice, cartItem, quantity } = getCartItemDetails(
                      groupedItems,
                      id
                    );
                    return (
                      <li key={cartItem.id} className="sidebar-item d-flex">
                        <div className="sidebar-item-picture-and-price w d-flex flex-1">
                          <img
                            className="thumbnail-picture"
                            src={cartItem.picture}
                            alt="thumbnail picture of the product"
                          />
                          <div className="d-flex flex-column">
                            <span>{cartItem.name}</span>
                            <span>{cartItem.price} zł</span>
                          </div>
                        </div>
                        <div className="d-flex flex-1 align-items-center">
                          <AddOrSubtractControls
                            cartItem={cartItem}
                            quantity={quantity}
                            events={{
                              removeFromCart,
                              addToCart,
                            }}
                          />
                          <div className="sidebar-item-price ml-10">
                            {sumPrice} zł
                          </div>
                          <span>
                            <Link
                              onClick={() => removeGroupFromCart(cartItem)}
                              className="d-flex align-items-center btn-remove"
                              preventScrollReset
                              to={window.location.pathname}
                            >
                              <img src="/bin.png" alt="bin icon" />
                            </Link>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="basket-message-empty">
                <p className="f-400 ">Basket is empty</p>
              </div>
            </>
          )}
        </div>
        <SidebarSummary
          cartItems={cartItems}
          clearCart={clearCart}
          totalPrice={totalPrice}
        />
      </nav>
    </>
  );
}

export default Sidebar;
