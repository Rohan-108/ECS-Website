import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Particle from "../Particle";
import Poster from "./Poster";
import "./spectrum.css";
const Spectrum = (props) => {
  const { currentUser, setCurrentUser } = props;
  return (
    <>
      <Particle />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="specContainer">
        <div className="specName">Spectrum 9.0</div>
      </div>
      <Poster />
      <Footer />
    </>
  );
};

export default Spectrum;
