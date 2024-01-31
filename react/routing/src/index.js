import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about";
import Contact from "./components/contact/contact";

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
]);

{
  /* <App /> */
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
