import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import questionimg from "../../assets/galleryImage/west.jpeg";
import styles from "../Modal/InputControl.module.css";
const Level12 = ({ setLevel12, setLevel13 }) => {
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
    if (doc.level12 === ans) {
      setLevel12(false);
      setLevel13(true);
    } else {
      const ins = document.getElementById(`l12q1`);
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
                There was a novel that was published in 16th century China,
                narrating the journey to India for procuring a text from Buddha.
                The main protagonist was a monkey with god-like powers, which
                was the inspiration for the main character of a popular anime
                series, and also a game would be launched in 2024 based on his
                journey.
                <br />
                <br /> Like Tony stark is known as iron man, our protagonist is
                also known as
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l12q1"
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

export default Level12;
