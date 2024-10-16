import { capitalize } from "lodash";
import propTypes from "prop-types";
import { ALL_PRODUCTS_FILTER } from "../pages/products/Products";

NoItemsFound.propTypes = {
  category: propTypes.string,
};

export function NoItemsFound({ category }) {
  return (
    <div className="no-items-message">
      No items has been found for category{" "}
      <strong>{category ? category : capitalize(ALL_PRODUCTS_FILTER)}</strong>
    </div>
  );
}
