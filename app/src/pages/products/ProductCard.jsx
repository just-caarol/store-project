import propTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import ActionButton from "../../components/AddToBasketActionButton";
import {
  CartItemsType,
  ProductEventsType,
  ProductType,
} from "../../types/types";
import { shouldRefreshCardItem } from "../../utils/memoize";

ProductCard.propTypes = {
  product: ProductType,
  addToCart: propTypes.func,
  events: ProductEventsType,
  cartItems: CartItemsType,
};

function ProductCard({ product, events, cartItems }) {
  return (
    <div className={`card product-${product.id}`}>
      <Link to={product.id.toString()} className="btn" preventScrollReset>
        <div className="card-header-picture">
          <img src={product.picture} alt="a picture of the product" />
        </div>

        <div className="card-body">
          <div className="card-product-category">{product.category}</div>
          <div className="card-product-name">{product.name}</div>
          <div className="card-product-price">{product.price} zł</div>
        </div>
      </Link>
      <div className="card-footer">
        <ActionButton events={events} data={product} cartItems={cartItems} />
      </div>
    </div>
  );
}

const MemoizedProductCard = memo(ProductCard, shouldRefreshCardItem);
export default MemoizedProductCard;
