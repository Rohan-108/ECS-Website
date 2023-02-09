import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../Modal/InputControl.module.css";
const Level16 = ({ setLevel16, setLevel17 }) => {
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
    if (doc.level16 === ans) {
      setLevel16(false);
      setLevel17(true);
    } else {
      const ins = document.getElementById(`l16q1`);
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
                His middle name is that of a follower of Sic Mundus and also
                someone who's arc saved many .He wrote a brief history of a
                species. His full name is.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l16q1"
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

export default Level16;
