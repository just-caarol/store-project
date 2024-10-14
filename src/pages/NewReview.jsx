import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";

export function NewReview() {
  const { state } = useNavigation();
  const { product } = useLoaderData();

  const isSubmitting = state === "submitting" || state === "loading";

  return (
    <>
      <div className="create-review-page d-flex flex-column align-items-center">
        <h1 className="create-review-title orange">
          New Review for <span className="product-name"> {product.name}</span>
        </h1>
        <Form method="post" className="form">
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
            />
          </div>
          <div className="form-row">
            <label htmlFor="name">E-mail:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your e-mail..."
            />
          </div>
          <div className="form-row">
            <label htmlFor="body">Review:</label>
            <textarea
              name="body"
              id="body"
              placeholder="Add your review..."
            ></textarea>
          </div>
          <div className="form-row ">
            <Link className="btn-form" to={`/products/${product.id}`}>
              Cancel
            </Link>
            <button disabled={isSubmitting} className="btn-form">
              {isSubmitting ? "Adding..." : " Add"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
