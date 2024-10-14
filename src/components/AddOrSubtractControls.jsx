import cls from "classnames";
import propTypes from "prop-types";
import { ProductEventsType, ProductType } from "../types/types";

AddOrSubtractControls.propTypes = {
  className: propTypes.string,
  cartItem: ProductType,
  quantity: propTypes.number,
  events: ProductEventsType,
};

function AddOrSubtractControls({ className, cartItem, quantity, events }) {
  const { removeFromCart, addToCart } = events;

  return (
    <div className={cls("button-group", className ?? "")}>
      <button
        onClick={() => removeFromCart(cartItem, quantity === 1)}
        className="button"
      >
        -
      </button>
      <span className="text">{quantity}</span>
      <button onClick={() => addToCart(cartItem, false)} className="button">
        +
      </button>
    </div>
  );
}

export default AddOrSubtractControls;
