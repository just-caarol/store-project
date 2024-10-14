import propTypes from "prop-types";

export const ProductType = propTypes.shape({
  farmerId: propTypes.number,
  id: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
  category: propTypes.string,
  price: propTypes.string,
  quantity: propTypes.string,
  picture: propTypes.string,
});

export const CartItemsType = propTypes.arrayOf(ProductType);

export const ProductEventsType = propTypes.shape({
  addToCart: propTypes.func,
  removeFromCart: propTypes.func,
});

export const NavEventsType = propTypes.shape({
  onToggleSidebar: propTypes.func,
  onHamburgerClick: propTypes.func,
});

export const FarmerType = propTypes.shape({
  id: propTypes.number,
  name: propTypes.string,
  email: propTypes.string,
  website: propTypes.string,
  description: propTypes.string,
});

export const CartContentType = propTypes.shape({
  groupedItems: propTypes.func,
  getCartItemDetails: propTypes.func,
  removeGroupFromCart: propTypes.func,
  ...ProductEventsType,
});

export const ReviewType = propTypes.shape({
  productId: propTypes.string,
  id: propTypes.number,
  name: propTypes.string,
  email: propTypes.string,
  body: propTypes.string,
});

export const ReviewsType = propTypes.arrayOf(ReviewType);
