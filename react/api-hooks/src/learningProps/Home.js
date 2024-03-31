import React from "react";
import HomeChild1 from "./HomeChild1";
import HomeChild2 from "./HomeChild2";
import HomeChild3 from "./HomeChild3";

function Home() {
  return (
    <div>
      <h1>This is home parent component</h1>
      <HomeChild1 name="zubir" />
      {/* <HomeChild2 /> */}
      {/* <HomeChild3 /> */}
    </div>
  );
}

export default Home;
