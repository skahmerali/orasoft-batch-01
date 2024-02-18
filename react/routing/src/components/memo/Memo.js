import React, { useState, useMemo } from "react";
import NavBar from "../navbar/navbar";

function Memo() {
  const [count, setCount] = useState(0);
  const [clicked, setclicked] = useState(false);

  const calculation = (num) => {
    console.log(" finding user ");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }

    console.log(" user fount  ", num);
    return num;
  };

  let startCalculation = useMemo(() => calculation(count), [count]);

  const addvalue = () => {
    console.log('find user function called')
    setCount(count + 1);
};

const clickedMe = () => {
      console.log('clicked function called')
    if (clicked === true) {
      setclicked(false);
    } else {
      setclicked(true);
    }
    setCount(count + 1)
  };

  return (
    <>
      <NavBar />
      <div>Memo</div>
      <h1>{startCalculation}</h1>
      <button onClick={addvalue}>find user</button>
      <h1>countr value {count}</h1>
      <button onClick={clickedMe}>
        {clicked === true ? "clicked" : "clicked me"}
      </button>
    </>
  );
}

export default Memo;
