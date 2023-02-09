import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import questionimg from "../../assets/galleryImage/witcher.png";
import styles from "../Modal/InputControl.module.css";
const Level13 = ({ setLevel13, setLevel14 }) => {
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
    if (doc.level13 === ans) {
      setLevel13(false);
      setLevel14(true);
    } else {
      const ins = document.getElementById(`l13q1`);
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
              <img src={questionimg} alt="question hint" />
            </div>
            <div className="questionflex">
              <p>
                The main character from This game is set in a fantasy world
                filled with kings, magic, and monsters. He has many nicknames
                but one of them is infamous. This infamous nickname is because
                of a certain chain of events that transpire between him and two
                other characters, a princess and a wizard.
                <br /> Name the wizard.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l13q1"
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

export default Level13;
