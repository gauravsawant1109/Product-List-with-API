import {  useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Component/Home'
import LoginPage from './Component/LoginPage';
import Registrationpage from './Component/Registrationpage';
import ThemeProvider from './ThemeContext/ThemeProvider';


function App() {

  return (
    <>
    <ThemeProvider >
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/LoginPage" />}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
          <Route path='/RegistrationPage' element={<Registrationpage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path="/Home/:ID" element={<Home/>} ></Route>


        </Routes>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
