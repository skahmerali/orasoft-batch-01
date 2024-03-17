import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
function Home() {
  return (
    <>
      <div>This is Home PAGE <FaBeer color="red" size={500} /> </div>
    </>
  );
}

export default Home;
