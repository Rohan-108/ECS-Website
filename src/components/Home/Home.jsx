import React from 'react'
import { Link } from 'react-router-dom'
import {auth}from '../../firebase';
import Navbar from '../Navbar/Navbar';
import "./home.css"
const Home = (props) => {
  const{currentUser,setCurrentUser}=props;
  return (
    <div className='container'>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  )
}

export default Home