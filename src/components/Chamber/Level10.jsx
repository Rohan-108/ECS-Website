import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// import questionimg from "../../assets/galleryImage/Poesis.png";
import styles from "../Modal/InputControl.module.css";
const Level10 = ({ setLevel10, setLevel11 }) => {
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
    const ans = answers[1];
    if (doc.level10 === ans) {
      setLevel10(false);
      setLevel11(true);
    } else {
      const ins = document.getElementById(`l10q1`);
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
                Looking back into the past ,a person started something a century
                ago in our motherland. Then it began to be made in colours, in
                monochrome, some could speak , while few were quiet.
                <br />
                <br /> Name his last creation.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l10q1"
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

export default Level10;
