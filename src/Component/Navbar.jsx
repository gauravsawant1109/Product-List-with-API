import React, { useContext } from "react";
import useCustomHook from "./useCustomHook";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import UserContext from "./Home";
import { ThemeContext } from "../ThemeContext/ThemeProvider";

const Navbar = () => {
  const getData = localStorage.getItem("Admin");
  const dataOne = JSON.parse(getData);
  console.log("Navbar Login Info of Admin", getData);
  const navigate = useNavigate();
  const  LogOut=()=> {
    localStorage.removeItem("Admin")
    navigate("/LoginPage");
  }

  const { Theme, setTheme, toggleTheme, setButton, Button, togglebutton } =
    useContext(ThemeContext);
  console.log(Theme);
  console.log(Button);

  // const { user } = useContext(UserContext);
  const { List, Loading, Err } = useCustomHook(
    "https://dummyjson.com/products"
  );
  console.log("in Navbar List:", List, ", Loading ", Loading, ", Error:", Err);
  // console.log(user);

  if (Loading) return <p>Loading....</p>;
  if (Err) return <p>Error....</p>;

  return (
    <>
      <h1 className="">
        Product List{" "}
        <button
          className={`btn bg-${Theme} text-secondary`}
          onClick={() => togglebutton(toggleTheme())}
        >
          {Button}
        </button>
      </h1>

      <div
        className={`shadow-lg  bg-${Theme} rounded overflow-y-scroll`}
        style={{ height: "80vh" }}
      >
        {List.map((p, i) => (
          <>
            <p className="border m-0 p-2">
              {" "}
              <Link to={`/Home/${p.id}`}>
                <p key={i}>
                  {p.id}) {p.title}
                </p>
              </Link>
            </p>

            <button
              className="btn btn-danger m-2"
              type="button"
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => LogOut()}
            >
              LogOut <FaPowerOff />
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Navbar;
