import React from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import "./chamber.css";
import styles from "../Modal/InputControl.module.css";
const Level1 = ({ setLevel1, setLevel2 }) => {
  const [answers, setAnswers] = useState({
    1: "",
  });
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value.trim().toLowerCase(),
    });
  };
  const docref = doc(db, "Answers", "dWGHE89ckr8Afp9yMyIy");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getDoc(docref);
    const doc = response.data();
    console.log(doc.level1);
    const ans = answers[1];
    if (doc.level1 === ans) {
      setLevel1(false);
      setLevel2(true);
    } else {
      const ins = document.getElementById(`l1q1`);
      ins.style.borderColor = "red";
      ins.style.borderWidth = "2px";
    }
  };
  return (
    <>
      <div className="levelContainer">
        <div className="questionContainer">
          <div className="question">
            <div className="questionsimg">
              {/* <img src={questionimg} alt="question hint" /> */}
            </div>
            <div className="questionflex">
              <p>
                Suffering from many mental illnesses with all people in society
                rejecting and looking down upon him, even though all he wants is
                to be accepted by others. After being brutally beaten, having
                his medication cut off, his life begins to spiral downward
                out-of-control into delusions, violence, and anarchy until he
                eventually transforms into the infamous Clown-Prince of Crime .
                <br />
                Name the character from a famous movie?(first name)
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l1q1"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="button1" onClick={handleSubmit}>
          Next Level
        </button>
      </div>
    </>
  );
};

export default Level1;
