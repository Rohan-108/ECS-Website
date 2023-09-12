import { motion } from "framer-motion";
import CardRayyan from "../CardRayyan/CardRayyan";
import "./developers.scss";
import devData from "./devData";
const Developers = () => {
  const dataAbhinav = {
    name: "Abhinav Ghosh",
    desig: "Technical Head",
    insta: "https://www.facebook.com/profile.php?id=100006867829068&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/abhinav-ghosh-sl/",
    src: "https://i.ibb.co/NSQW2PN/Whats-App-Image-2022-11-08-at-12-58-15-AM.jpg",
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "-5rem",
        }}
      >
        <CardRayyan data={dataAbhinav} />
      </motion.div>
      <motion.div
        className="dev-container1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1.8 }}
      >
        {devData.map((elem, i) => (
          <CardRayyan key={i} data={elem} />
        ))}
      </motion.div>
    </>
  );
};

export default Developers;
