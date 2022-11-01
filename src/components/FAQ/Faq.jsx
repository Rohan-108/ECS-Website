import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Particle from "../Particle";
import "./Faq.css";
import { Data } from "../FAQ/FaqData";
import Accord from "./Accord.jsx";

const Faq = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [data, setdata] = useState(Data);
  return (
    <>
      <Particle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <h1 className="Faq-Heading"> Frequently Asked Questions</h1>
      <div className="faq">
        <div className="main-faq-div">
          {data.map((curElem) => {
            const { Id, Question, Answer } = curElem;
            return <Accord key={Id} {...curElem} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
