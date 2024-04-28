import React from 'react'
import axios from 'axios'
function SignUp() {

    const SignUpUser = () =>{
        axios.post('http://localhost:5000/signup', {
            "email": "example@example.com",
            "DOB": "1990-01-01",
            "name": "John Doe",
            "fatherName": "Mike Doe",
            "gender": "male",
            "password": "examplepassword"
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } 







  return (
    <div>
        <div>
            <label>
                userName :
                <input type='text' />
            </label>
        </div>
        <div>
            <label>
                User Email :
                <input type='email' />
            </label>
        </div>
        <div>
            <label>
                User password :
                <input type='password' />
            </label>
        </div>
        <div>
            <button onClick={SignUpUser}>SignUp</button>
        </div>
    </div>
  )
}

export default SignUp