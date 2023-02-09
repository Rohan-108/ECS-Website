import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import questionimg from "../../assets/galleryImage/mellon.png";
import styles from "../Modal/InputControl.module.css";
const Level20 = ({ setLevel20, setWin }) => {
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
    if (doc.level20 === ans) {
      setLevel20(false);
      setWin(true);
    } else {
      const ins = document.getElementById(`l20q1`);
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
                You are very close to opening the chamber of secrets. Only the
                door of Durin stands in the way between you and the chamber of
                secrets <br />
                <br />
                "Ennyn Durin Aran Moria: pedo mellon a minno."
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l20q1"
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

export default Level20;
