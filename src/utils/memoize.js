import { getQuantityOfItem } from "./cartItems";

export function shouldRefreshCardItem(prevProps, nextProps) {
  const prevQuantity = getQuantityOfItem(
    prevProps.cartItems,
    nextProps.product.id
  );

  const newQuantity = getQuantityOfItem(
    nextProps.cartItems,
    nextProps.product.id
  );

  return !(prevQuantity !== newQuantity);
}
