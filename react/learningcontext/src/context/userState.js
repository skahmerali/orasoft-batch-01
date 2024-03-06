import { useState } from "react";
import UserContext from "./usercontext";

const UserState = (props) => {
  const [userDetail, setUserDetail] = useState({
    name: "zubair",
    address: "xyz",
    country: "pakistan",
  });


  return (
    <>
      <UserContext.Provider value={{ userDetail, setUserDetail }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;
