import { ReviewType } from "../../types/types";

CustomerReview.propTypes = {
  review: ReviewType,
};

function CustomerReview({ review }) {
  return (
    <div key={review.id}>
      <div className="section-content">
        <div className="text-sm mb-1">
          <strong>{review.name}</strong>
        </div>
        {review.body}
      </div>
    </div>
  );
}

export default CustomerReview;
