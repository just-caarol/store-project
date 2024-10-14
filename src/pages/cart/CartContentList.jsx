import propTypes from "prop-types";
import { Link } from "react-router-dom";
import AddOrSubtractControls from "../../components/AddOrSubtractControls";
import { ProductType } from "../../types/types";

CartContentList.propTypes = {
  groupedItems: propTypes.objectOf(propTypes.arrayOf(ProductType)),
  getCartItemDetails: propTypes.func,
  removeGroupFromCart: propTypes.func,
  addToCart: propTypes.func,
  removeFromCart: propTypes.func,
};

function CartContentList({
  groupedItems,
  getCartItemDetails,
  removeFromCart,
  addToCart,
  removeGroupFromCart,
}) {
  return (
    <>
      {Object.keys(groupedItems).map((id) => {
        const { sumPrice, cartItem, quantity } = getCartItemDetails(
          groupedItems,
          id
        );

        return (
          <div className="cart-item-details" key={id}>
            <h4 className="cart-item-name text-center">{cartItem.name}</h4>
            <section className="d-flex flex-column align-items-center">
              <Link to={`/products/${cartItem.id}`}>
                <img
                  className="thumbnail-picture"
                  src={cartItem.picture}
                  alt="thumbnail picture of the product"
                />
              </Link>
              <ul className="cart-item-details">
                <li>
                  <label>price</label>
                  <p>{cartItem.price} zł</p>
                </li>
                <li className="d-flex flex-column fit-content align-items-center">
                  <label className="m-0">quantity</label>
                  <AddOrSubtractControls
                    cartItem={cartItem}
                    quantity={quantity}
                    events={{
                      removeFromCart,
                      addToCart,
                    }}
                  />
                </li>
                <li>
                  <label>remove</label>
                  <Link
                    onClick={() => removeGroupFromCart(cartItem)}
                    className="cart-text d-flex align-items-center"
                    preventScrollReset
                  >
                    <img
                      src="/bin.png"
                      className="sidebar-icon"
                      alt="bin icon"
                    />
                  </Link>
                </li>
                <li>
                  <label>sum</label>
                  <p>{sumPrice} zł</p>
                </li>
              </ul>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default CartContentList;
