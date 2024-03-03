import { useState } from "react";
import "./App.css";
import Products from "./components/Products";

function App() {
  // const [user, setUser] = useState({
  //   name: "zubair",
  //   address: "xyz",
  //   country: "pakistan",
  // });
  return (
    <>
      <h1>this is app component</h1>;
      <Products />
    </>
  );
}

export default App;
