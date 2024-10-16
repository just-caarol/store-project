import { useLoaderData } from "react-router-dom";
import { useLocalStorageContext } from "../../hooks/localStorageContext";
import FarmerPageDetails from "./FarmerPageDetails";
import FarmerProduct from "./FarmerProduct";

import ScrollToTopButton from "../../components/ScrollToTopButton";

import cls from "classnames";

export const Farmer = () => {
  const { farmer, farmerProducts } = useLoaderData();
  const {
    setCartItems: addToCart,
    removeFromCart,
    cartItems,
  } = useLocalStorageContext();

  return (
    <div className="farmer-page d-flex flex-column">
      <FarmerPageDetails farmer={farmer} />
      <h3 className="farmer-products-title">Products: </h3>
      <div
        className={cls("card-grid mx-0", {
          "card-grid-3-columns-grid": farmerProducts.length === 3,
          "card-grid-2-columns-grid": farmerProducts.length < 3,
        })}
      >
        {farmerProducts.map((farmerProduct) => (
          <FarmerProduct
            key={farmerProduct.id}
            product={farmerProduct}
            cartItems={cartItems}
            events={{
              addToCart,
              removeFromCart,
            }}
          />
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};
