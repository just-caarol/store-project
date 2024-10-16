import { CartItemsType, ProductEventsType } from "../../types/types";
import CartItemsContent from "./CartItemsContent";
import CartNoItems from "./CartNoItems";

CartItems.propTypes = {
  cartItems: CartItemsType,
  events: ProductEventsType,
};

function CartItems({ events, cartItems }) {
  if (cartItems.length > 0) {
    return <CartItemsContent events={events} cartItems={cartItems} />;
  }
  return <CartNoItems />;
}

export default CartItems;
