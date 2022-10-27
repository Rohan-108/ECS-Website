import React from 'react'
import {auth}from '../../firebase';
import styles from "./SignOut.module.css";
const SignOut = ({setModal}) => {
    const handleSubmission=()=>{
        auth.signOut();
        setModal(false);
    }
  return (
     <div className={styles.container}>
      <div className={styles.innerBox}>
        <button className={styles.button} onClick={handleSubmission}>
            Sign Out
          </button>
        </div>
        </div>
  )
}

export default SignOut