import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>This is About PAGE</div>
      <Link to={'/about/detail'}>
        <button>Show Dtail</button>
      </Link>
    </>
  );
}

export default About;
