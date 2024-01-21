import React from "react";

const Name = (e) => {
  console.log(e);
  // let name = "zubair";
  return <h1 className="fullname">this is {e.name} { e.fname} from Karachi </h1>;
}; 

export default Name;
