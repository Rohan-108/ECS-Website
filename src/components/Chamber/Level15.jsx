import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../Modal/InputControl.module.css";
const Level15 = ({ setLevel15, setLevel16 }) => {
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
    if (doc.level15 === ans) {
      setLevel15(false);
      setLevel16(true);
    } else {
      const ins = document.getElementById(`l15q1`);
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
                There was a rap song by the name _______. The song tells the
                story of an obsessed fan who was toxic with his girlfriend. The
                fan wrote two letters to the artist and recorded a tape that
                remained unheard by the artist.
                <br />
                Name the alias of that artist.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l15q1"
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

export default Level15;
