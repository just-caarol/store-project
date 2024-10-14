import { debounce } from "lodash";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { buildQueryString } from "../utils/url";

Search.propTypes = {
  category: propTypes.string,
  q: propTypes.string,
  queryRef: propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.any }),
  ]),
};

function Search({ category, q, queryRef }) {
  const navigate = useNavigate();

  const onSearch = debounce((ev) => {
    const value = ev.target.value;
    const reloadQuery = () => {
      navigate(
        `/products?${buildQueryString({
          category,
          q: queryRef.current.value,
        })}`
      );
    };

    // reload url query when string is empty
    if (!value) {
      if (q !== value) {
        reloadQuery();
      } else {
        return;
      }
    }
    reloadQuery();
  }, 300);

  return (
    <>
      <p className="search-heading">Search</p>
      <div className="search">
        <input
          onChange={onSearch}
          type="search"
          name="q"
          id="q"
          maxLength="100"
          ref={queryRef}
          autoFocus
        />
      </div>
    </>
  );
}

export default Search;
