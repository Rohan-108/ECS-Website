import React from "react";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./chamber.css";
import questionimg from "../../assets/galleryImage/johan.jpeg";
import styles from "../Modal/InputControl.module.css";
const Level4 = ({ setLevel4, setLevel5 }) => {
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
    if (doc.level4 === ans) {
      setLevel4(false);
      setLevel5(true);
    } else {
      const ins = document.getElementById(`l4q1`);
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
                “There’s nothing special about being born. Not a thing. Most of
                the universe is just death, nothing more. In this universe of
                ours, the birth of a new life on some corner of our planet is
                nothing but a tiny, insignificant flash. Death is a normal
                thing. So why live?” <br />
                <br />
                Often considered as one of the greatest and most exciting
                antagonists of all time, who quoted this?
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l4q1"
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

export default Level4;
