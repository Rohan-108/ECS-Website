import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import { Link,useNavigate } from 'react-router-dom'
import {auth}from '../../firebase';
import "./navbar.css"
import Login from "../Modal/Login"
import SignUp from '../Modal/SignUp';
const Navbar = (props) => {
  const{currentUser,setCurrentUser}=props;
  const[openLogin,setOpenLogin]=useState(false);
  const[openSignup,setSignup]=useState(false);
  const navigate=useNavigate();
  const handleClick=()=>{
        if(currentUser){
          setOpenLogin(true);
        }else{
          //navigate("/login");'
          setOpenLogin(true);
        }
  }
  return (
    <>
    {openLogin && <Login setOpenLogin={setOpenLogin} setSignup={setSignup} />}
    {openSignup && <SignUp setOpenLogin={setOpenLogin} setSignup={setSignup} setCurrentUser={setCurrentUser} />}
    <div className='navbar_container'>
      <div className="logo">
        <img id="logoPng" src={logo} alt="ecs logo" />
        <img onClick={handleClick}id="loginPng" src={login} alt ="login button" />
      </div>
      <nav>
        <ul className='links'>
          <li>
             <Link to="/">Home</Link>
          </li>
          {currentUser && <li>
             <Link to="/ResourceHub">Resource Hub</Link>
          </li>}
          <li>
             <a href="#">Annual Attractions</a>
          </li>
          <li>
             <a href="#">About Us</a>
          </li>
          <li>
             <Link to="/Member">Members</Link>
          </li>
          <li>
             <Link to="/Developers">Developers</Link>
          </li>
          <li>
             <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar