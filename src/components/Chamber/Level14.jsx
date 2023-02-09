import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// import questionimg from "../../assets/galleryImage/Poesis.png";
import styles from "../Modal/InputControl.module.css";
const Level14 = ({ setLevel14, setLevel15 }) => {
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
    if (doc.level14 === ans) {
      setLevel14(false);
      setLevel15(true);
    } else {
      const ins = document.getElementById(`l14q1`);
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
                "Most people think time is like a river that flows swift and
                sure in one direction, but I have seen the face of time and I
                can tell you they are wrong. Time is an ocean in a storm. You
                may wonder who I am and why I say this; sit down and I will tell
                you a tale like none that you have ever heard!"
                <br />
                Who said this famous lines??
                <br />
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l14q1"
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

export default Level14;
