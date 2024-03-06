import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
