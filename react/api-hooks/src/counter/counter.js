import "../App.css";

import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [todoData, setTodoData] = useState(1);

  // useEffect(
  //   function () {
  //     console.log("use Effect called ");
  //     if (counter > 5) {
  //       getPosts();
  //     } else if (counter1 > 4) {
  //       getPosts();
  //     } else if (counter1 > 4 && counter1 < 7) {
  //       getPosts();
  //     }
  //     calculator(counter1, counter);
  //   },
  //   [(counter, counter1)]
  // );

  useEffect(function () {
    // getPosts();
  }, []);

  // this is snipit code

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  function inc() {
    // console.log("clicked", counter);
    // counter += 1;
    // let countervalue = (document.getElementById("counterValue").innerHTML =
    //   counter);
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1);
  }
  function inc1() {
    // console.log("clicked", counter);
    // counter += 1;
    // let countervalue = (document.getElementById("counterValue").innerHTML =
    //   counter);
    setCounter1(counter1 + 1);
    if (counter1 >= 10) {
      setCounter(10);
    }
  }
  function dec1() {
    setCounter1(counter1 - 1);
  }

  // let myPromis = new Promise((resolved, rejected) => {
  //   // resolved();
  //   rejected()
  // });

  // console.log(myPromis);

  // function calculator(counter1, counter) {
  //   let myPromis = new Promise(function (resolved, rejected) {
  //     if (counter + counter1 > 10) {
  //       resolved();
  //     } else {
  //       console.log("rejected");
  //       setTimeout(() => {
  //         // rejected('rejected');
  //       }, 3000);
  //     }
  //   });
  // }

  // const getPosts = () => {
  //   console.log("api called");
  //   fetch("https://jsonplaceholder.typicode.com/todosjkdfjsk")
  //     // .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <div>
        <h1>This is Counter </h1>
        <h1 id="counterValue">{counter}</h1>
        <button onClick={() => inc()}>+ {counter}</button>
        <button onClick={() => dec()}>- {counter}</button>
      </div>
      <div>
        <h1>This is Counter 01 </h1>
        <h1 id="counterValue">{counter1}</h1>
        <button onClick={() => inc1()}>+ {counter1}</button>
        <button onClick={() => dec1()}>- {counter1}</button>
      </div>
    </>
  );
}

export default Counter;
