import React from "react";
import { Outlet, useResolvedPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function AboutOutlet() {
  const location = useLocation();
  console.log(location);

  return (
    <>


  


      {location.pathname === "/about/detail" ? null : <Header />}
      <Outlet />
      {location.pathname !== "/about/detail" && <Footer />}
    </>
  );
}

export default AboutOutlet;
