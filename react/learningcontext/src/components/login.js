import React, { useContext, useRef, useState } from "react";
import UserContext from "../context/usercontext";
function Login() {
  const user = useContext(UserContext);
  console.log(user);
  const password = useRef("");
  const email1 = useRef("");
  const LoginNow = () => {
    console.log(email1.current.value);
    console.log(password.current.value);
    user.setUserDetail({
      ...user.userDetail,
      email: email1.current.value,
      password: password.current.value,
    });
  };

  return (
    <>
      <div>
        <div>Login</div>
        <div>
          <label>
            email
            <input type="text" ref={email1} />
          </label>
          <label>
            password
            <input type="text" ref={password} />
          </label>
          <button onClick={LoginNow}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;

// import React from "react";

// function Login() {
//   return (
//     <>
//       <div>
//         <div>Login</div>
//         <div>
//           <label>
//             fname
//             <input type="text" />
//           </label>
//           <label>
//             lname
//             <input type="text" />
//           </label>
//           <label>
//             email
//             <input type="text" />
//           </label>
//           <label>
//             password
//             <input type="text" />
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
