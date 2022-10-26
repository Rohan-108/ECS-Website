import React from 'react'
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import { Link } from 'react-router-dom'
import {auth}from '../../firebase';
const Navbar = (props) => {
  const{currentUser}=props;
  return (
    <div className='container'>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <a href="#">Annual Attractions</a>
          </li>
          <li>
             <a href="#">About Us</a>
          </li>
          <li>
             <Link to="/members">Members</Link>
          </li>
          <li>
             <Link to="/developers">Developers</Link>
          </li>
          <li>
             <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar