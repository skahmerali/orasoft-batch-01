import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/notFound/NotFound";
import Products from "./components/products/products";
import ProductDetail from "./components/productDetail/ProductDetail";
import Memo from "./components/memo/Memo";

import SignUp from "./connectserver/signup";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: () => {
      let allposts = fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => json);
      return allposts;
    },
  },
  {
    path: "/product-detail/:productid",
    element: <ProductDetail />,
  },
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// {
//   /* <App /> */
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

