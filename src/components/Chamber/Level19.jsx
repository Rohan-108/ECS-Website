import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import questionimg from "../../assets/galleryImage/audio.mp3";
import styles from "../Modal/InputControl.module.css";
const Level19 = ({ setLevel19, setLevel20 }) => {
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
    if (doc.level19 === ans) {
      setLevel19(false);
      setLevel20(true);
    } else {
      const ins = document.getElementById(`l19q1`);
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
              <audio controls muted>
                <source src={questionimg} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="questionflex">
              <p>
                On November 4th,2011 X posted on the internet asking people to
                record an audio clip of them chanting a phrase in Arabic which
                he decided to use in his next project named Y. <br />
                Identify Y.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l19q1"
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

export default Level19;
