import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserState from "./context/userState";

import { RouterProvider } from "react-router-dom";
import "./index.css";

import {router} from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      <RouterProvider router={router} />
    </UserState>
  </React.StrictMode>
);