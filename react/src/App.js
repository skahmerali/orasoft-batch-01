import React, { useState } from "react";
// import Name from "./Name";
// import Button from "./components/Button";
// import About from "./screens/about/About";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 14;
  function inc() {
    // console.log("clicked", counter);
    // counter += 1;
    // let countervalue = (document.getElementById("counterValue").innerHTML =
    //   counter);
    setCounter(counter + 1);
  }
  function dec() {}

  return (
    <>
      {/* <Name name="ZUBIR" fname="saleem"></Name>
      <Name name="Ahmer" fname='Sheikh'></Name>
      <Name name='Noman'></Name>
      <About about="My Name is Noman Lodhi"/>
      <Name></Name>
      <Name></Name>
      <Button name="click me"></Button>
      <Button name="hold me"></Button> */}

      <h1>This is Counter</h1>
      <h1 id="counterValue">{counter}</h1>
      <button onClick={() => inc()}>+ {counter}</button>
      <button onClick={dec()}>- {counter}</button>
    </>
  );
}
export default App;
