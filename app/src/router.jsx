import { createBrowserRouter, redirect } from "react-router-dom";
import { ErrorPageHandler } from "./ErrorHandler";
import { Layout } from "./Layout";
import { Cart } from "./pages/cart/Cart";
import { Farmer } from "./pages/farmers/Farmer";
import { Farmers } from "./pages/farmers/Farmers";
import { Home } from "./pages/Home";
import { NewReview } from "./pages/NewReview";
import { Product } from "./pages/products/Product";
import { Products } from "./pages/products/Products";
import { buildQueryString } from "./utils/url";

const apiUrl = `http://${window.location.hostname}:3000`;

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPageHandler />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
            loader: async ({ request: { signal, url } }) => {
              const searchParams = new URL(url).searchParams;
              const q = searchParams.get("q") || "";
              const category = searchParams.get("category") || "";

              const filteredProducts = await fetch(
                `${apiUrl}/products?${buildQueryString({
                  q,
                  category,
                })}`,
                { signal }
              ).then((res) => res.json());

              return {
                searchParams: { q, category },
                products: await fetch(`${apiUrl}/products`, {
                  signal,
                }).then((res) => res.json()),
                filteredProducts: filteredProducts.filter((product) =>
                  product.name.toLowerCase().includes(q)
                ),
              };
            },
          },
          {
            path: ":productId",
            loader: async ({ params, request: { signal } }) => {
              const product = await fetch(
                `${apiUrl}/products/${params.productId}`,
                { signal }
              ).then((res) => res.json());

              const farmer = await fetch(
                `${apiUrl}/farmers/${product.farmerId}`,
                { signal }
              ).then((res) => res.json());

              const userReviews = await fetch(
                `${apiUrl}/products/${params.productId}/reviews`,
                { signal }
              ).then((res) => res.json());

              return new Promise((resolve) =>
                resolve({ product, farmer, userReviews })
              );
            },
            element: <Product />,
          },
          {
            path: ":productId/reviews/new",
            element: <NewReview />,

            loader: async ({ params, request: { signal } }) => {
              const product = await fetch(
                `${apiUrl}/products/${params.productId}`,
                { signal }
              ).then((res) => res.json());

              const userReviews = await fetch(
                `${apiUrl}/products/${params.productId}/reviews`,
                { signal }
              ).then((res) => res.json());

              return new Promise((resolve) =>
                resolve({ product, userReviews })
              );
            },
            action: async ({ params, request }) => {
              const formData = await request.formData();
              const name = formData.get("name");
              const email = formData.get("email");
              const body = formData.get("body");
              const id = formData.get("id");
              const productId = formData.get("productId");

              await fetch(`${apiUrl}/products/${params.productId}/reviews`, {
                method: "POST",
                signal: request.signal,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  productId,
                  id,
                  name,
                  email,
                  body,
                }),
              }).then((res) => res.json());

              return redirect(`/products/${params.productId}`);
            },
          },
        ],
      },

      {
        path: "farmers",
        children: [
          {
            index: true,
            element: <Farmers />,
            loader: ({ request: { signal } }) => {
              return fetch(`${apiUrl}/farmers`, { signal });
            },
          },
          {
            path: ":farmerId",
            loader: async ({ params, request: { signal } }) => {
              const farmer = await fetch(
                `${apiUrl}/farmers/${params.farmerId}`,
                { signal }
              ).then((res) => res.json());
              const products = await fetch(`${apiUrl}/products/`, {
                signal,
              }).then((res) => res.json());
              const farmerProducts = products.filter(
                (product) => product.farmerId === farmer.id
              );

              return new Promise((resolve) =>
                resolve({ farmer, farmerProducts })
              );
            },
            element: <Farmer />,
          },
        ],
      },

      {
        path: "/cart",
        element: <Cart />,
        loader: async ({ request: { signal } }) => {
          const products = await fetch(`${apiUrl}/products`, {
            signal,
          }).then((res) => res.json());

          return new Promise((resolve) => resolve({ products }));
        },
      },
    ],
  },
]);
