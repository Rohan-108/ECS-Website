import React from "react";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
const Textspan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, SetIsPlaying] = useState(false);
  const rubberband = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    SetIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberband();
      }}
      onAnimationComplete={() => SetIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default Textspan;
