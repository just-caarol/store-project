import propTypes from "prop-types";
import { Link } from "react-router-dom";
import AddOrSubtractControls from "../../components/AddOrSubtractControls";
import { ProductType } from "../../types/types";

CartContentTable.propTypes = {
  groupedItems: propTypes.objectOf(propTypes.arrayOf(ProductType)),
  getCartItemDetails: propTypes.func,
  removeGroupFromCart: propTypes.func,
  addToCart: propTypes.func,
  removeFromCart: propTypes.func,
};

function CartContentTable({
  groupedItems,
  getCartItemDetails,
  removeFromCart,
  addToCart,
  removeGroupFromCart,
}) {
  return (
    <>
      <div className="table-row">
        <strong>Description</strong>
        <strong>Price</strong>
        <strong>Quantity</strong>
        <strong>Sum</strong>
      </div>

      {Object.keys(groupedItems).map((id) => {
        const { sumPrice, cartItem, quantity } = getCartItemDetails(
          groupedItems,
          id
        );

        return (
          <div className="table-row" key={id}>
            <div key={cartItem.id}>
              <Link to={`/products/${cartItem.id}`}>
                <img
                  className="thumbnail-picture"
                  src={cartItem.picture}
                  alt="thumbnail picture of the product"
                />
              </Link>
              {cartItem.name}
            </div>
            <div className="table-data">{cartItem.price} zł</div>
            <div className="table-data-quantity flex-column d-inline-flex align-items-start">
              <AddOrSubtractControls
                cartItem={cartItem}
                quantity={quantity}
                events={{
                  removeFromCart,
                  addToCart,
                }}
              />
              <div className="remove-button">
                <Link
                  onClick={() => removeGroupFromCart(cartItem)}
                  className="cart-text"
                  preventScrollReset
                >
                  <img src="/bin.png" className="sidebar-icon" alt="bin icon" />
                  Remove
                </Link>
              </div>
            </div>
            <div className="table-data">{sumPrice} zł</div>
          </div>
        );
      })}
    </>
  );
}

export default CartContentTable;
