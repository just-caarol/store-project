import cls from "classnames";
import propTypes from "prop-types";

FilterCategory.propTypes = {
  category: propTypes.string,
  isActive: propTypes.bool,
  setActiveCategory: propTypes.func,
};

function FilterCategory({ category, isActive, setActiveCategory }) {
  return (
    <button
      className={cls("filter-button", {
        "filter-active": isActive,
      })}
      onClick={() => setActiveCategory(category.toLowerCase())}
    >
      {category.toUpperCase()}
    </button>
  );
}

export default FilterCategory;
