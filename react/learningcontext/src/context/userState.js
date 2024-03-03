import UserContext from "./usercontext";

const UserState = (props) => {
  const userDetail = {
    name: "zubair",
    address: "xyz",
    country: "pakistan",
  };

  return (
    <>
      <UserContext.Provider value={userDetail}>
        {props.children}
    </UserContext.Provider>
    </>
  );
};

export default UserState;
