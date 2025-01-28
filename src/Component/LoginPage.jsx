import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()
  function SumitLoginForm(e) {

    e.preventDefault();
    const getData = localStorage.getItem("Admin");
    const dataOne = JSON.parse(getData);
    console.log("get data:", dataOne);
    if(dataOne.Email==email){
        navigate("/Home")
    }else{
        navigate("/")
    }
  }
  return (
    <>
   
   <div class="d-flex align-items-center"  style={{height:"100vh"}}>

     <form className="border rounded p-4 cu-form mx-auto" onSubmit={SumitLoginForm}>
      <h1 className="text-center">Login Page</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />
        </div>
       <Link className="d-block text-center mb-2" type="button" to="/RegistrationPage">Create New Account</Link>
        <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
