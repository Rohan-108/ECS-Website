import React from "react";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./chamber.css";
import styles from "../Modal/InputControl.module.css";
const Level2 = ({ setLevel2, setLevel3 }) => {
  const [answers, setAnswers] = useState({
    1: "",
  });
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const docref = doc(db, "Answers", "dWGHE89ckr8Afp9yMyIy");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getDoc(docref);
    const doc = response.data();
    console.log(doc.level1);
    const ans = answers[1];
    if (doc.level2 === ans) {
      setLevel2(false);
      setLevel3(true);
    } else {
      const ins = document.getElementById(`l2q1`);
      ins.style.borderColor = "red";
      ins.style.borderWidth = "2px";
    }
  };
  console.log(answers);
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
                “Put me underneath God's sky <br />
                and know me <br />
                don't just see me with your eyes <br />
                Take away <br />
                this mask of flesh and bone and <br />
                See me for my soul alone”
                <br /> <br />
                The following extract is taken from a novel written by the main
                protagonist. Name the person who found the hidden meaning behind
                the poem first and about whom the whole chapter is dedicated to
                in the novel.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l2q1"
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

export default Level2;
