import { motion } from "framer-motion";
import CardRayyan from "../CardRayyan/CardRayyan";
import "./developers.scss";
import devData from "./devData";
const Developers = () => {
  const dataRohan = {
    name: "Rohan Jha",
    desig: "Technical Head",
    insta: "https://www.facebook.com/profile.php?id=100010061770737",
    linkedin: "https://www.linkedin.com/in/rohan-jha-ab635322b/",
    src: "https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/rohan.jpg",
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
        <CardRayyan data={dataRohan} />
      </motion.div>
      <motion.div
        className="dev-container1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1.8 }}
      >
        {devData.map((elem) => (
          <CardRayyan key={elem.name} data={elem} />
        ))}
      </motion.div>
    </>
  );
};

export default Developers;
