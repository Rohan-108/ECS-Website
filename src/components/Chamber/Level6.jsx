import React from "react";
import { useState } from "react";
import "./chamber.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// import questionimg from "../../assets/galleryImage/Poesis.png";
import styles from "../Modal/InputControl.module.css";
const Level6 = ({ setLevel6, setLevel7 }) => {
  const [answers, setAnswers] = useState({
    1: "",
  });
  const docref = doc(db, "Answers", "dWGHE89ckr8Afp9yMyIy");
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getDoc(docref);
    const doc = response.data();
    const ans = answers[1];
    if (doc.level6 === ans) {
      setLevel6(false);
      setLevel7(true);
    } else {
      const ins = document.getElementById(`l6q1`);
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
                What are these?
                <br />
                <br /> #3c3c3c,#484848,#4e5054, #272727, #282828, #292929,
                #2b2b2b, #2c2c2c, #2e2e2e,#313131, #323232, #343434, #353535,
                #373737, #393939, #3a3a3a,#3f3f3f, #404040, #424242, #444444,
                #454545, #474747,#4b4b4b, #4d4d4d, #4e4e4e, #505050,
                #515151,#535353, #565656, #575757, #585858, #595959, #5b5b5b,
                #5c5c5c,#5e5e5e, #616161, #626262, #646464, #656565, #676767,
                #6a6a6a,#6d6d6d, #6f6f6f, #727272, #737373, #757575,#767676,
                #777777, #7b7b7b, #7c7c7c .
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l6q1"
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

export default Level6;
