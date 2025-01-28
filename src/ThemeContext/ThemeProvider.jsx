import React, { createContext, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("light");
  const Moon=useState(<FaMoon/>)
  const Sun=useState(<IoSunny/>)
  const [Button,setButton]=useState(Sun)
  


  function toggleTheme() {
    setTheme((Theme)=>Theme=="light"?"dark":"light");
    // togglebutton()
  }
  
  function togglebutton(){
    setButton(Theme== "light" ? Moon : Sun );
    console.log(Button);
    
  }
  return (
    <ThemeContext.Provider value={{ Theme,toggleTheme,togglebutton,Button }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
