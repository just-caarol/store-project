import ContinueShopping from "../../components/ContinueShopping";
import { useLocalStorageContext } from "../../hooks/localStorageContext";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export function Cart() {
  const {
    cartItems,
    removeFromCart,
    removeGroupFromCart,
    clearCart,
    setCartItems: addToCart,
  } = useLocalStorageContext();

  return (
    <>
      <div className="cart-page d-flex align-items-center flex-column">
        <div className="cart-sticky-header">
          <h1 className="cart-title">Your Basket</h1>
          <ContinueShopping cartItems={cartItems} />
        </div>

        <CartItems
          events={{ addToCart, removeFromCart, removeGroupFromCart }}
          cartItems={cartItems}
        />

        <CartSummary cartItems={cartItems} clearCart={clearCart} />
      </div>
    </>
  );
}
