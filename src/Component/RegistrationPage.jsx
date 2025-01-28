import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registrationpage = () => {
    const [Email,setEmail]=useState()
    const [Password,setPassword]=useState()
    const navigate = useNavigate()
   
    function SubmitForm(e){
        e.preventDefault()
        console.log("Email on Submit Form :" ,Email);
        console.log("Password on submit form :",Password);

        const setData = {Email:Email,Password:Password} 
        localStorage.setItem("Admin",JSON.stringify(setData))
        navigate("/")
    }
  return (
    <>
    <div class="d-flex align-items-center"  style={{height:"100vh"}}>

<form className="border rounded p-4 cu-form mx-auto" onSubmit={SubmitForm}>
        <h1 className="text-center">Registration Page</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
       
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

export default Registrationpage;
