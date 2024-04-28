import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/contact"}>
          <li>contact</li>
        </Link>
        <Link to={"/about"}>
          <li>about</li>
        </Link>
        <Link to={"/products"}>
          <li>Products</li>
        </Link>
        <Link to={"/memo"}>
          <li>memo</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
