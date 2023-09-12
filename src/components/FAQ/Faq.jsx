import { useState } from "react";
import "./Faq.scss";
import { Data } from "../FAQ/FaqData";
import Accord from "./Accord";

const Faq = () => {
  const [data] = useState(Data);
  return (
    <>
      <h1 className="Faq-Heading"> Frequently Asked Questions</h1>
      <div className="faq">
        <div className="main-faq-div">
          {data.map((curElem) => {
            const { Id } = curElem;
            return <Accord key={Id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
