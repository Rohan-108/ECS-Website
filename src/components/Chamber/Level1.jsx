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
                A story of two friends stuck in an era of civil war. Due to the
                war, one got left behind and the other went to America with his
                father. Many years later, the friend who went to America returns
                to save his friend’s son. Later in the story, it is revealed
                that the two friends were actually brothers.
                <br /> Name that novel whose plot is this.
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
