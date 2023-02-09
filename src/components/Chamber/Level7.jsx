import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// import questionimg from "../../assets/galleryImage/Poesis.png";
import styles from "../Modal/InputControl.module.css";
const Level7 = ({ setLevel7, setLevel8 }) => {
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
    if (doc.level7 === ans) {
      setLevel7(false);
      setLevel8(true);
    } else {
      const ins = document.getElementById(`l7q1`);
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
                “ I have been a ghost at Hogwarts School of Witchcraft and
                Wizardry since the beginning. People here consider me a constant
                pain, especially the caretaker Argus Filch, maybe because of my
                mischiefs. Even though it is hard to find ghosts like me around
                here, Fred and George Weasley have helped me a lot in my chaos
                in the past. Apart from Albus Dumbledore, there is one ghost
                that I am truly scared of.” <br />
                <br />
                Who is the ghost that the ghost in the riddle is “truly” scared
                of?
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l7q1"
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

export default Level7;
