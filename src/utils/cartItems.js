import { groupBy } from "lodash";

const sum = (a, b) => a + b;

// Group Items using lodash "groupBy" by identifier of a product
export function getGroupedCartItems(cartItems) {
  return groupBy(cartItems, (o) => o.id);
}

// Get number of items for specified product identifier
export function getQuantityOfItem(cartItems, id) {
  const groupedItems = getGroupedCartItems(cartItems);
  return groupedItems[id] != null ? groupedItems[id].length : 0;
}

// Get total price of all items in the basket
export function getTotalPriceOfAllItemsFromTheBasket(groupedItems) {
  const productIds = Object.keys(groupedItems);

  let sum = 0;
  // get a sum of all prices for each product identifier
  for (const productId of productIds) {
    const singleProductItemsGroup = groupedItems[productId].map((product) =>
      parseFloat(product.price)
    );

    for (const price of singleProductItemsGroup) {
      sum += price;
    }
  }

  // limit to 2 decimal characters
  return sum.toFixed(2);
}

export function getCartItemDetails(groupedItems, id) {
  const groupedItemsByName = groupedItems[id];

  return {
    quantity: groupedItemsByName.length,
    // sum price for single product group
    sumPrice: groupedItemsByName
      .map((product) => parseFloat(product.price))
      .reduce(sum)
      .toFixed(2),
    // first item from the group
    cartItem: groupedItemsByName[0],
  };
}
