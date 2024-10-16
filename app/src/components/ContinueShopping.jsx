import ContinueShoppingForCartList from "../pages/cart/ContinueShoppingList";
import ContinueShoppingForCartTable from "../pages/cart/ContinueShoppingTable";
import { CartItemsType } from "../types/types";

ContinueShopping.propTypes = {
  cartItems: CartItemsType,
};

function ContinueShopping(props) {
  const { cartItems } = props;

  if (!cartItems.length) {
    return null;
  }

  return (
    <>
      <ContinueShoppingForCartTable {...props} />
      <ContinueShoppingForCartList {...props} />
    </>
  );
}

export default ContinueShopping;
