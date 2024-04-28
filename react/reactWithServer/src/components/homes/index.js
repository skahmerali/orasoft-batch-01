import React, { useEffect, useState } from "react";

function Homess() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getPost();
  });



  const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setPost(json));
  };

  console.log(posts)

  return <div>index</div>;
}

export default index;
