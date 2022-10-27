import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import exit from "../../assets/images/exit.svg"
import menu from "../../assets/images/menu.svg"
import { Link,useNavigate } from 'react-router-dom'
import "./navbar.css"
import Login from "../Modal/Login"
import SignUp from '../Modal/SignUp';
import SignOut from '../Modal/SignOut';
const Navbar = (props) => {
  const{currentUser,setCurrentUser}=props;
  const[openLogin,setOpenLogin]=useState(false);
  const[openSignup,setSignup]=useState(false);
  const[modal,setModal]=useState(false);
  const[style,setStyle]=useState('');
  const navigate=useNavigate();
  const handleClick=()=>{
        if(currentUser){
          setModal((prev)=>!prev);
        }else{
          setOpenLogin(true);
        }
  }
  const changeStyle=(x)=>{
    if(x===1)setStyle('nav1');
    if(x===2)setStyle('');
  }
  return (
    <>
    {openLogin && <Login setOpenLogin={setOpenLogin} setSignup={setSignup} />}
    {openSignup && <SignUp setOpenLogin={setOpenLogin} setSignup={setSignup} setCurrentUser={setCurrentUser} />}
    <div className='navbar_container'>
      <div className="logo">
        <img onClick={()=>changeStyle(1)} id="mobile-cta" className="mobile-menu" src={menu} alt="Open navigation" />
        <img id="logoPng" src={logo} alt="ecs logo" />
        <img onClick={handleClick}id="loginPng" src={login} alt ="login button" />
        {modal && <SignOut setModal={setModal}/>}
      </div>
      <nav className={style}>
        <img onClick={()=>changeStyle(2)}id="mobile-exit" className="mobile-menu-exit" src={exit} alt="close navigation" />
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