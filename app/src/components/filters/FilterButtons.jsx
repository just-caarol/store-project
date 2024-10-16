import cls from "classnames";
import { capitalize } from "lodash";
import propTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_PRODUCTS_FILTER } from "../../pages/products/Products";
import { buildQueryString } from "../../utils/url";
import FilterCategories from "./FilterCategories";

FilterButtons.propTypes = {
  products: propTypes.array,
  finalProducts: propTypes.array,
  searchParams: propTypes.object,
};

export function FilterButtons({ products, searchParams }) {
  const [isFilterSectionOpened, setIsFilterSectionOpened] = useState(true);
  const navigate = useNavigate();

  const handleSectionVisibility = function () {
    setIsFilterSectionOpened((prev) => !prev);
  };

  const setActiveCategory = (category) => {
    navigate(
      category === ALL_PRODUCTS_FILTER
        ? `/products?${buildQueryString({
            query: searchParams.query,
            category: category !== ALL_PRODUCTS_FILTER ? category : undefined,
          })}`
        : `/products?${buildQueryString({
            query: searchParams.query,
            category,
          })}`
    );
  };

  return (
    <div className={cls({ open: isFilterSectionOpened })}>
      <p className="filter-heading" onClick={handleSectionVisibility}>
        Filters <span className="filter-heading-icon">&gt;</span>
      </p>
      <div className="filter-buttons-wrapper">
        <button
          className={cls("filter-button", {
            "filter-active": !searchParams.category,
          })}
          onClick={() => setActiveCategory(ALL_PRODUCTS_FILTER)}
        >
          {capitalize(ALL_PRODUCTS_FILTER)}
        </button>
        <FilterCategories
          products={products}
          searchParams={searchParams}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
}
