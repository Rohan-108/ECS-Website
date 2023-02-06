import React from "react";
import { useState } from "react";
import "./chamber.css";
import questionimg from "../../assets/galleryImage/Poesis.png";
import styles from "../Modal/InputControl.module.css";
const Level3 = ({ setLevel3, setLevel4 }) => {
  const ans = {
    1: "a",
  };
  const [answers, setAnswers] = useState({
    1: "",
  });
  const haveSameData = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
      );
    }
    return false;
  };
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (haveSameData(ans, answers)) {
      setLevel3(false);
      setLevel4(true);
    } else {
      const obj1Length = Object.keys(ans).length;
      const obj2Length = Object.keys(answers).length;
      if (obj1Length === obj2Length) {
        Object.keys(answers).forEach((key) => {
          if (ans[key] !== answers[key]) {
            const ins = document.getElementById(`l3q${key}`);
            ins.style.borderColor = "red";
            ins.style.borderWidth = "2px";
          }
        });
      }
    }
    // setData(() => {
    //   return {
    //     1: "",
    //     2: "",
    //     3: "",
    //     4: "",
    //     5: "",
    //   };
    // });
  };
  console.log(answers);
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                laborum, obcaecati dignissimos nihil dicta doloremque saepe
                labore nulla vitae molestiae, ducimus tempora reprehenderit sunt
                voluptates exercitationem praesentium nemo, eveniet natus?
                Soluta reiciendis aspernatur ad ipsa animi numquam consectetur,
                ullam in nam odit fugiat eius quaerat quibusdam similique est
                sunt quasi.
              </p>
              <div className={styles.container}>
                <input
                  type="text"
                  onChange={handleChange}
                  name="1"
                  required
                  id="l3q1"
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

export default Level3;
