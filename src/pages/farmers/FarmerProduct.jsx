import { memo } from "react";
import { Link } from "react-router-dom";
import AddToBasketActionButton from "../../components/AddToBasketActionButton";
import {
  CartItemsType,
  ProductEventsType,
  ProductType,
} from "../../types/types";
import { shouldRefreshCardItem } from "../../utils/memoize";

FarmerProduct.propTypes = {
  product: ProductType,
  cartItems: CartItemsType,
  events: ProductEventsType,
};

function FarmerProduct({ product, events, cartItems }) {
  return (
    <div className="card">
      <Link to={`/products/${product.id}`} className="btn">
        <div className="card-header-picture">
          <img src={product.picture} alt="a picture of the product" />
        </div>
        <div className="card-body">
          <div className="card-product-category">{product.category}</div>
          <div className="card-product-name">{product.name}</div>
          <div className="card-product-price">{product.price} zł</div>
        </div>
      </Link>
      <AddToBasketActionButton
        cartItems={cartItems}
        data={product}
        events={events}
      />
    </div>
  );
}

const MemoizedFarmerProduct = memo(FarmerProduct, shouldRefreshCardItem);

export default MemoizedFarmerProduct;
