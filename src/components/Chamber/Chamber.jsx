import React, { useState } from "react";
import Particle from "../Particle";
import dobby from "../../assets/galleryImage/dobby.jpeg";
import dobbys from "../../assets/galleryImage/chamberp.jpeg";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Level6 from "./Level6";
import Level7 from "./Level7";
import Level8 from "./Level8";
import Level9 from "./Level9";
import Level10 from "./Level10";
import Level11 from "./Level11";
import Level12 from "./Level12";
import Level13 from "./Level13";
import Level14 from "./Level14";
import Level15 from "./Level15";
import Level16 from "./Level16";
import Level17 from "./Level17";
import Level18 from "./Level18";
import Level19 from "./Level19";
import Level20 from "./Level20";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./chamber.css";
const Chamber = () => {
  const [L1, setLevel1] = useState(true);
  const [L2, setLevel2] = useState(false);
  const [L3, setLevel3] = useState(false);
  const [L4, setLevel4] = useState(false);
  const [L5, setLevel5] = useState(false);
  const [L6, setLevel6] = useState(false);
  const [L7, setLevel7] = useState(false);
  const [L8, setLevel8] = useState(false);
  const [L9, setLevel9] = useState(false);
  const [L10, setLevel10] = useState(false);
  const [L11, setLevel11] = useState(false);
  const [L12, setLevel12] = useState(false);
  const [L13, setLevel13] = useState(false);
  const [L14, setLevel14] = useState(false);
  const [L15, setLevel15] = useState(false);
  const [L16, setLevel16] = useState(false);
  const [L17, setLevel17] = useState(false);
  const [L18, setLevel18] = useState(false);
  const [L19, setLevel19] = useState(false);
  const [L20, setLevel20] = useState(false);
  const [win, setWin] = useState(false);
  return (
    <>
      <Particle />
      <Navbar />
      {L1 && (
        <div className="question win">
          <img src={dobbys} alt="aa" />
          <p>
            Now you embark on a journey to open the chamber of secrets.
            <br />
            But beware my friend on this journey you will face many challenges ,
            but never forget you have a friend with immense information who will
            help you on this journey.
            <br /> Now, below is the first challenge in your journey......
          </p>
        </div>
      )}
      {L1 && <Level1 setLevel1={setLevel1} setLevel2={setLevel2} />}
      {L2 && <Level2 setLevel2={setLevel2} setLevel3={setLevel3} />}
      {L3 && <Level3 setLevel3={setLevel3} setLevel4={setLevel4} />}
      {L4 && <Level4 setLevel4={setLevel4} setLevel5={setLevel5} />}
      {L5 && <Level5 setLevel5={setLevel5} setLevel6={setLevel6} />}
      {L6 && <Level6 setLevel6={setLevel6} setLevel7={setLevel7} />}
      {L7 && <Level7 setLevel7={setLevel7} setLevel8={setLevel8} />}
      {L8 && <Level8 setLevel8={setLevel8} setLevel9={setLevel9} />}
      {L9 && <Level9 setLevel9={setLevel9} setLevel10={setLevel10} />}
      {L10 && <Level10 setLevel10={setLevel10} setLevel11={setLevel11} />}
      {L11 && <Level11 setLevel11={setLevel11} setLevel12={setLevel12} />}
      {L12 && <Level12 setLevel12={setLevel12} setLevel13={setLevel13} />}
      {L13 && <Level13 setLevel13={setLevel13} setLevel14={setLevel14} />}
      {L14 && <Level14 setLevel14={setLevel14} setLevel15={setLevel15} />}
      {L15 && <Level15 setLevel15={setLevel15} setLevel16={setLevel16} />}
      {L16 && <Level16 setLevel16={setLevel16} setLevel17={setLevel17} />}
      {L17 && <Level17 setLevel17={setLevel17} setLevel18={setLevel18} />}
      {L18 && <Level18 setLevel18={setLevel18} setLevel19={setLevel19} />}
      {L19 && <Level19 setLevel19={setLevel19} setLevel20={setLevel20} />}
      {L20 && <Level20 setLevel20={setLevel20} setWin={setWin} />}
      {win && (
        <p className="question win">
          <div className="questionsimg">
            <img src={dobby} alt="aa" />
          </div>
          “Congratulations! <br />
          You have opened the chamber of secrets! History has again repeated
          itself as the chamber of secrets has been opened once again. Only time
          can tell if you are the only one to open it now”
        </p>
      )}
      <Footer />
    </>
  );
};

export default Chamber;
