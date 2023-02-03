import React from "react";
import { useState } from "react";
import InputControl from "../Modal/InputControl";
const Level1 = ({ setLevel, setLevel11 }) => {
  const ans = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
  };
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
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
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (haveSameData(ans, answers)) {
      setLevel(false);
      setLevel11(true);
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
  return (
    <>
      <div className="levelContainer">
        <div className="questionContainer">
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laborum, obcaecati dignissimos nihil dicta doloremque saepe labore
              nulla vitae molestiae, ducimus tempora reprehenderit sunt
              voluptates exercitationem praesentium nemo, eveniet natus? Soluta
              reiciendis aspernatur ad ipsa animi numquam consectetur, ullam in
              nam odit fugiat eius quaerat quibusdam similique est sunt quasi.
            </p>
            <InputControl
              label=""
              placeholder="Enter ans"
              type="text"
              name="1"
              handleChange={handleChange}
            />
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laborum, obcaecati dignissimos nihil dicta doloremque saepe labore
              nulla vitae molestiae, ducimus tempora reprehenderit sunt
              voluptates exercitationem praesentium nemo, eveniet natus? Soluta
              reiciendis aspernatur ad ipsa animi numquam consectetur, ullam in
              nam odit fugiat eius quaerat quibusdam similique est sunt quasi.
            </p>
            <InputControl
              label=""
              placeholder="Enter ans"
              type="text"
              name="2"
              handleChange={handleChange}
            />
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laborum, obcaecati dignissimos nihil dicta doloremque saepe labore
              nulla vitae molestiae, ducimus tempora reprehenderit sunt
              voluptates exercitationem praesentium nemo, eveniet natus? Soluta
              reiciendis aspernatur ad ipsa animi numquam consectetur, ullam in
              nam odit fugiat eius quaerat quibusdam similique est sunt quasi.
            </p>
            <InputControl
              label=""
              placeholder="Enter ans"
              type="text"
              name="3"
              handleChange={handleChange}
            />
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laborum, obcaecati dignissimos nihil dicta doloremque saepe labore
              nulla vitae molestiae, ducimus tempora reprehenderit sunt
              voluptates exercitationem praesentium nemo, eveniet natus? Soluta
              reiciendis aspernatur ad ipsa animi numquam consectetur, ullam in
              nam odit fugiat eius quaerat quibusdam similique est sunt quasi.
            </p>
            <InputControl
              label=""
              placeholder="Enter ans"
              type="text"
              name="4"
              handleChange={handleChange}
            />
          </div>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              laborum, obcaecati dignissimos nihil dicta doloremque saepe labore
              nulla vitae molestiae, ducimus tempora reprehenderit sunt
              voluptates exercitationem praesentium nemo, eveniet natus? Soluta
              reiciendis aspernatur ad ipsa animi numquam consectetur, ullam in
              nam odit fugiat eius quaerat quibusdam similique est sunt quasi.
            </p>
            <InputControl
              label=""
              placeholder="Enter ans"
              type="text"
              name="5"
              handleChange={handleChange}
            />
          </div>
          <button className="button1" onClick={handleSubmit}>
            Next Level
          </button>
        </div>
      </div>
    </>
  );
};

export default Level1;
