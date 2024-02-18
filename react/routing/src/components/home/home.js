import React, { useState } from "react";
import NavBar from "../navbar/navbar";
import Productb from "./ProductB";

function Home() {
  // let value = 10;
  const [value, setValue] = useState();
  const [fistname, sefistname] = useState("hello");

  const inc = () => {
    console.log(value);
    if (value === undefined) {
      setValue(20);
    } else {
      setValue(value + 20);
    }

    console.log(value);
  };
  const ChangeName = () => {
    sefistname("name has been changed");
  };

  console.log("recreate component", value);
  return (
    <div>
      Home
      <NavBar />
      <h1>value {value}</h1>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => ChangeName()}>dec</button>
      <Productb fname={fistname} />
    </div>
  );
}

export default Home;
