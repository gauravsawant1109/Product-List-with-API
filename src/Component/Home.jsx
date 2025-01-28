import React, { createContext, useContext } from "react";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";
import { useState } from "react";

// const UserContext = createContext();

const Home = () => {
  // const [user, setUser] = useState({ name: "Gaurav", isLoggedIn: true });

  return (
    <>
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      {/* <UserName/><LogOut/> */}

        <div
          className="d-md-flex justify-content-evenly text-center align-items-start  p-5 "
          style={{ height: "100vh" }}
        >
          <div className="align-self-center  ">
            {" "}
            <Navbar />
          </div>

          <div className="m-auto w-50">
            <ProductDetails />
          </div>
        </div>
      {/* </UserContext.Provider> */}
    </>
  );

  // function UserName(){
  //   const {user} = useContext(UserContext);
  //   return(
  //     <p>Welcome {user.name} !!</p>
  //   )
  // }
  // function LogOut(){
  //   const {setUser}=useContext(UserContext);
  //   function handleLogOut(){
  //     setUser({isLoggedIn:false,name:""})
  //   }
  //   return(
  //     <button onClick={handleLogOut}>Logout</button>
  //   )
  // }
};

export default Home;
