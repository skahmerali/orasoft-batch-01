import React from "react";

function HomeChild1(props) {
  function Signup() {
    fetch("http://localhost:5000/signup", {
      method: "Post",
      body: JSON.stringify({
        fName: "sheikh ahmer",
        lastName: "Ali",
        email: "sheikhahmerali75@gmail.com",
        password: "12345",
        dateOfBirth: "11-07",
        gender: "male",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);

        let response = json;
        if (response.status >= 500) {
          console.log("server Error");
        } else if (response.status >= 400) {
          console.log("singUP success fully");
        }
        // console.log(response.status);
      });
  }

  function Login() {
    fetch("http://localhost:5000/login", {
      method: "Post",
      body: JSON.stringify({
        email: "sheikhahmerwali75@gmail.com",
        password: "12345",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        let response = json;
        if (response.status >= 200) {
          console.log(response.message);
        } else if (response.status >= 400) {
          console.log(response.message);
        }
        // console.log(response.status);
      });
  }
  return (
    <>
      <div>HomeChild1 {props.name}</div>

      <button onClick={Signup}>Sign Up</button>
      <button onClick={Login}>Login</button>
    </>
  );
}

export default HomeChild1;
