import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "../../firebase";
import {motion} from "framer-motion"
import styles from "./Login.module.css";

function Login(props) {
  const {setOpenLogin,setSignup,setCurrentUser}=props;
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [forgot,setForgot]=useState(false);
  const handleSubmission = () => {
    if(forgot){
        sendPasswordResetEmail(auth,values.email)
          .then(async (res)=>{
            setErrorMsg("Email sent")
              setForgot(false);
          })
          .catch((err)=>{
            setErrorMsg(err.message);
          })
    }
    else{
        if (!values.email || !values.pass) {
          setErrorMsg("Fill all fields");
          return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
            setSubmitButtonDisabled(false);
            setOpenLogin(false);
            setCurrentUser(auth.currentUser);
            navigate("/");
          })
          .catch((err) => {
            setSubmitButtonDisabled(false);
              if(err.code === 'auth/wrong-password'){
                setErrorMsg('Please check the Password');
              }
              if(err.code === 'auth/user-not-found'){
                setErrorMsg('Please check the Email');
              }
          });
    }
  };
  const handleClick=()=>{
    setOpenLogin(false);
    setSignup(true);
  }
  return (
    <div className={styles.container}>
      <motion.div className={styles.innerBox}
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:.4}}
      >
        <h1 className={styles.heading}>{forgot?"Reset":"Login"}</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
          type="email"
        />
        {!forgot &&<InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
          type="password"
        />
        }
         {!forgot &&<p onClick={()=>{setForgot(true)}}style={{position:"absolute",top:"53%",fontSize:"14px",textDecoration:"underline",cursor:"pointer"}}>Forgot Password?</p>
        }
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            {forgot?"Send Email":"Login"}
          </button>
          <button className={styles.cancel} onClick={()=>{setOpenLogin(false)}}>
            Cancel
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <a href="#"onClick={handleClick}>Sign up</a>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;