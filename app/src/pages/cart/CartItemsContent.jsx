import { CartItemsType, ProductEventsType } from "../../types/types";
import { getCartItemDetails, getGroupedCartItems } from "../../utils/cartItems";
import CartContent from "./CartContent";

CartItemsContent.propTypes = {
  cartItems: CartItemsType,
  events: ProductEventsType,
};

function CartItemsContent({ events, cartItems }) {
  const { removeFromCart, removeGroupFromCart, addToCart } = events;
  const groupedItems = getGroupedCartItems(cartItems);

  return (
    <div className="cart-items">
      <>
        <div className="table">
          <CartContent
            removeFromCart={removeFromCart}
            removeGroupFromCart={removeGroupFromCart}
            addToCart={addToCart}
            getCartItemDetails={getCartItemDetails}
            groupedItems={groupedItems}
          />
        </div>
      </>
    </div>
  );
}

export default CartItemsContent;
