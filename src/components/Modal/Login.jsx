import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login(props) {
  const {setOpenLogin,setSignup}=props;
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
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
  };
  const handleClick=()=>{
    setOpenLogin(false);
    setSignup(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
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
      </div>
    </div>
  );
}

export default Login;