import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { FilterButtons } from "../../components/filters/FilterButtons";
import { NoItemsFound } from "../../components/NoItemsFound";
import Search from "../../components/Search";

import cls from "classnames";
import { useLocalStorageContext } from "../../hooks/localStorageContext";
import MemoizedProductCard from "./ProductCard";

import ScrollToTopButton from "../../components/ScrollToTopButton";

export const ALL_PRODUCTS_FILTER = "all";

export function Products() {
  const {
    products,
    filteredProducts,
    searchParams: { q, category },
    searchParams,
  } = useLoaderData();

  const {
    setCartItems: addToCart,
    removeFromCart,
    cartItems,
  } = useLocalStorageContext();

  const queryRef = useRef();

  useEffect(() => {
    if (queryRef && queryRef.current) queryRef.current.value = q;
  }, [q]);

  const isAnyFilterApplied = category !== ALL_PRODUCTS_FILTER || q != undefined;

  const finalProducts = isAnyFilterApplied ? filteredProducts : products;

  return (
    <>
      <h1 className="page-title">Products</h1>
      <div className="container mb-40">
        <div className="button-bar">
          <FilterButtons
            searchParams={searchParams}
            finalProducts={finalProducts}
            products={products}
          />

          <Search category={category} q={q} queryRef={queryRef} />

          {q.length > 0 ? (
            <p className="showing-message">
              Showing products for <strong>{q}</strong>
            </p>
          ) : null}
        </div>

        {finalProducts.length > 0 ? (
          <div
            className={cls("card-grid", {
              "card-grid-3-columns-grid": finalProducts.length === 3,
              "card-grid-2-columns-grid": finalProducts.length < 3,
            })}
          >
            {finalProducts.map((product) => (
              <MemoizedProductCard
                key={product.id}
                product={product}
                cartItems={cartItems}
                events={{
                  addToCart,
                  removeFromCart,
                }}
              />
            ))}
          </div>
        ) : (
          <NoItemsFound category={category} />
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
}
