import React, { useContext } from "react";
import UserContext from "../context/usercontext";

function ProductsDetail() {
  const data = useContext(UserContext);
  console.log(data);

  return (
    <>
      <div>productsDetail</div>
      <p1>name {data.name}</p1>
    </>
  );
}

export default ProductsDetail;
