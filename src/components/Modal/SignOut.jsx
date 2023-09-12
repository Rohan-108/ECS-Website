import React from "react";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import styles from "./SignOut.module.scss";
const SignOut = ({ setModal }) => {
  const handleSubmission = () => {
    auth.signOut();
    setModal(false);
  };
  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.innerBox}>
        <button className={styles.button} onClick={handleSubmission}>
          Sign Out
        </button>
      </div>
    </motion.div>
  );
};

export default SignOut;
