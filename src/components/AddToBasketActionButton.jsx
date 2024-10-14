import cls from "classnames";
import propTypes from "prop-types";
import { CartItemsType, ProductType } from "../types/types";
import { getQuantityOfItem } from "../utils/cartItems";
import AddOrSubtractControls from "./AddOrSubtractControls";

AddToBasketActionButton.propTypes = {
  className: propTypes.string,
  cartItems: CartItemsType,
  events: propTypes.shape({
    removeFromCart: propTypes.func,
    addToCart: propTypes.func,
  }),
  data: ProductType,
};

function AddToBasketActionButton({ className, cartItems, events, data }) {
  const quantity = getQuantityOfItem(cartItems, data.id);
  const addProductToCart = () => events.addToCart(data);

  return (
    <div
      className={cls("card-footer flex-column", {
        "more-than-one-product": quantity >= 1,
      })}
    >
      <button className="btn-to-cart m-auto" onClick={addProductToCart}>
        <div className="btn-to-cart-content">
          <i className="basket-icon fa-solid fa-cart-shopping" />
          <span>Add to Basket</span>
        </div>
      </button>
      <AddOrSubtractControls
        className={className}
        cartItem={data}
        quantity={quantity}
        events={events}
      />
    </div>
  );
}

export default AddToBasketActionButton;
