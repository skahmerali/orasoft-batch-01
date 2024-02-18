import React, { memo } from "react";

function Productb(props) {
  console.log("ProductB is running ");

  return <div>ProductB {props.fname} </div>;
}

export default memo(Productb);
// export default Productb;
