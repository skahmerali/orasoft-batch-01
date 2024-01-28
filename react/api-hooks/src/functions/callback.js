import React, { useEffect, useState } from "react";

const LearnCallback = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  //   const calculator = (funct, num1, num2) => {
  //     funct(num1, num2);
  //   };

  //   const sumvalue = (num1, num2) => {
  //     console.log(num1 + num2);
  //     return num1 + num2;
  //   };
  //   calculator(sumvalue, 15, 12 );

  //   setTimeout(function () {
  //     console.log("time commpleted");
  //   }, 5000);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => {
        console.log(error);
      });
  }

  //   posts[1]
  return (
    <>
      <h1>All Posts</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {posts.map(function (singlepost, index) {
          return (
            <div
              style={{
                width: "200px",
                height: "400px",
                border: "2px solid black",
              }}
              key={index}
            >
              <h3>{singlepost.title}</h3>
              <h5>{singlepost.body}</h5>;
              <p>RS:12</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LearnCallback;
