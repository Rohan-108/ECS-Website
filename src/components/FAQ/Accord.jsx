import React, { useState, useEffect } from "react";

const Accord = ({ Question, Answer }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="QAset">
        <div className="Qset" onClick={() => setshow(!show)}>
          <h3 className="faq-click" onClick={() => setshow(!show)}>
            {Question}
          </h3>
          {show ? "➖" : "➕"}
        </div>
        {show && (
          <p className="answers">
            {Answer}
            <br></br>
          </p>
        )}
      </div>
    </>
  );
};
export default Accord;
