import React from 'react'
import { Link } from 'react-router-dom'
import {auth}from '../../firebase';

const Home = (props) => {
  const{currentUser}=props;
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{currentUser ? `Welcome - ${currentUser.displayName}` : "Login please"}</h2>
      <button onClick={()=>auth.signOut()}>signOut</button>
    </div>
  )
}

export default Home