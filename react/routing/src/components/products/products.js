import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Products() {
  const [allProducts, setAllProducts] = useState([]);

  const posts = useLoaderData();
  console.log(posts);
  console.log(Array.isArray(posts));
  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  //   const getPosts = () => {
  //     fetch("https://jsonplaceholder.typicode.com/photos")
  //       .then((response) => response.json())
  //       .then((json) => setAllProducts(json));
  //   };

  return (
    <div>
      <div>All Products</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {Array.isArray(posts) &&
          posts?.map((value, index) => {
            return (
              <div
                key={index}
                style={{
                  width: 300,
                  padding: 10,
                  border: "1px solid black",
                  borderRadius: 10,
                  margin: "10px 0px",
                }}
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gWPIOSgR2EJzqGPbA_09juhpJRu1Kru3Na_9bpZY0KCVaP23ajrxGpxxcXnL3kzC5CY&usqp=CAU" />
                <h3>{value.title}</h3>
                <div>
                  <Link to={`/product-detail/${value.id}`}>
                    <button>add to cart</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
