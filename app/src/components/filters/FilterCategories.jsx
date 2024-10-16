import FilterCategory from "./FilterCategory";

function FilterCategories({ products, searchParams, setActiveCategory }) {
  const categories = [...new Set(products.map((product) => product.category))];

  return categories.map((category, id) => (
    <FilterCategory
      key={id}
      category={category}
      isActive={searchParams.category === category}
      setActiveCategory={setActiveCategory}
    />
  ));
}

export default FilterCategories;
