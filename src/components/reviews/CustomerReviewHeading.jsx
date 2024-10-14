import propTypes from "prop-types";
import { Link } from "react-router-dom";

CustomerReviewHeading.propTypes = {
  id: propTypes.number,
};

function CustomerReviewHeading({ id }) {
  return (
    <section className="customer-rating-heading d-flex justify-content-between flex-wrap align-items-center">
      <h3 className="page-element-title">Customer reviews</h3>
      <Link className="btn-review" to={`/products/${id}/reviews/new`}>
        Add A Review
      </Link>
    </section>
  );
}

export default CustomerReviewHeading;
