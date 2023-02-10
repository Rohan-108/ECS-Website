import React from "react";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./chamber.css";
import questionimg from "../../assets/galleryImage/booktalk.jpeg";
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
              <img src={questionimg} alt="question hint" />
            </div>
            <div className="questionflex">
              <p>
                The images above relate to a novel that experienced a surge in
                popularity from the booktok community in 2021.
                <br /> Name the novel.
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
