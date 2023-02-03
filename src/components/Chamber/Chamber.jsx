import React, { useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Navbar from "../Navbar/Navbar";
const Chamber = () => {
  const [Level, setLevel] = useState(true);
  const [Level11, setLevel11] = useState(false);
  const [Level12, setLevel12] = useState(false);
  const [Level13, setLevel13] = useState(false);
  const [Level14, setLevel14] = useState(false);
  return (
    <>
      <Navbar />
      {Level && <Level1 setLevel={setLevel} setLevel11={setLevel11} />}
      {Level11 && <Level2 setLevel11={setLevel11} setLevel12={setLevel12} />}
      {Level12 && <Level3 setLevel12={setLevel12} setLevel13={setLevel13} />}
      {Level13 && <Level4 setLevel13={setLevel13} setLevel14={setLevel14} />}
      {Level14 && <Level5 setLevel14={setLevel14} />}
    </>
  );
};

export default Chamber;
