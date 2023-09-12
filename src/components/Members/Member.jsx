import { motion } from "framer-motion";
import CardRayyan from "../CardRayyan/CardRayyan";
import "./member.scss";
import { leadData, senData, junData } from "./data";
const Member = () => {
  return (
    <>
      <motion.div
        className="lead"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1.8 }}
      >
        {leadData.map((elem, i) => (
          <CardRayyan key={i} data={elem} />
        ))}
      </motion.div>
      <motion.div
        className="designation-title"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
      >
        Senior Members
      </motion.div>
      <div className="seniors">
        {senData.map((elem, i) => (
          <CardRayyan key={i} data={elem} />
        ))}
      </div>
      <div className="designation-title">Junior Members</div>
      <div className="juniors">
        {junData.map((elem, i) => (
          <CardRayyan key={i} data={elem} />
        ))}
      </div>
    </>
  );
};

export default Member;
