import React from "react";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./chamber.css";
import questionimg from "../../assets/galleryImage/citizen.jpeg";
import styles from "../Modal/InputControl.module.css";
const Level17 = ({ setLevel17, setLevel18 }) => {
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
    if (doc.level17 === ans) {
      setLevel17(false);
      setLevel18(true);
    } else {
      const ins = document.getElementById(`l17q1`);
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
                The following picture is taken from a movie poster. Termed as
                the greatest film ever made, the film was nominated for Academy
                Awards in nine categories and it won for Best Writing (Original
                Screenplay). Although it was a critical success, the movie
                failed to recoup its costs at the box office. The film faded
                from view after its release, but it returned to public attention
                when it was praised by French critics such as André Bazin and
                re-released in 1956.
                <br /> Name the movie.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l17q1"
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

export default Level17;
