import { ReviewsType } from "../../types/types";
import CustomerReview from "./CustomReview";

CustomerReviews.propTypes = {
  reviews: ReviewsType,
};

function CustomerReviews({ reviews }) {
  if (!reviews.length) return null;

  return (
    <div className="page-section">
      {reviews.map((review) => (
        <CustomerReview key={review.id} review={review} />
      ))}
    </div>
  );
}

export default CustomerReviews;
