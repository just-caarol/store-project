import { Link, useLoaderData } from "react-router-dom";
import ActionButton from "../../components/AddToBasketActionButton";
import CustomerReviewsSection from "../../components/reviews/CustomerReviewsSection";
import { useLocalStorageContext } from "../../hooks/localStorageContext";

export function Product() {
  const {
    setCartItems: addToCart,
    removeFromCart,
    cartItems,
  } = useLocalStorageContext();
  const { product, farmer, userReviews } = useLoaderData();

  return (
    <>
      <div className="product-page d-flex flex-column">
        <Link
          className="product-picture-link d-flex align-items-center"
          to=".."
        >
          <img src="/back.png" className="back-icon" alt="back icon" />
          Back To Products
        </Link>

        <div className="product-page-columns d-flex">
          <div className="d-flex flex-column align-items-center">
            <div className="product-page-left-column d-flex justify-content-center flex-column">
              <img
                className="product-page-picture"
                src={product.picture}
                alt="a picture of the product"
              />
            </div>
            <ActionButton
              className="w-300px m-auto"
              events={{ removeFromCart, addToCart }}
              data={product}
              cartItems={cartItems}
            />
          </div>

          <div className="product-page-right-column">
            <div className="content">
              <Link className="link" to={`/farmers/${farmer.id}`}>
                {farmer.name}
              </Link>
              <div>{product.category}</div>
              <h1 className="product-page-name">{product.name}</h1>

              <div className="price">{product.price} zł</div>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                necessitatibus doloremque provident porro, voluptatem voluptate
                consequatur nihil animi molestiae ipsa consequuntur expedita
                cumque quod similique, neque facilis adipisci maiores, labore
                itaque blanditiis. Quis quam at cumque, natus numquam non
                exercitationem ipsa quia, vero deserunt consectetur, similique
                enim perferendis accusamus impedit.
              </div>
            </div>
          </div>
        </div>

        <CustomerReviewsSection product={product} userReviews={userReviews} />
      </div>
    </>
  );
}
