import { ProductType, ReviewsType } from "../../types/types";
import CustomerReviewHeading from "./CustomerReviewHeading";
import CustomerReviews from "./CustomerReviews";

CustomerReviewsSection.propTypes = {
  product: ProductType,
  userReviews: ReviewsType,
};

function CustomerReviewsSection({ product, userReviews }) {
  return (
    <div className="page-element">
      <CustomerReviewHeading id={product.id} />
      <CustomerReviews reviews={userReviews} />
    </div>
  );
}

export default CustomerReviewsSection;
