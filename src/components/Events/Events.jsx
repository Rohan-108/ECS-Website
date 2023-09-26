import "../Home/home.scss";
import Cards from "./Cards";
//
import { spectre, spectrum, orientation, dehleez } from "../Home/data";
//
import fresher from "../../assets/galleryImage/fresher.jpg";
import dehle from "../../assets/galleryImage/dehleez.jpeg";
import light from "../../assets/galleryImage/light.jpg";
import spect from "../../assets/galleryImage/spectre.jpeg";
const Events = () => {
  return (
    <div className="annual" id="annual">
      <h2 style={{ letterSpacing: "2px" }}>Annual Attractions</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Cards src={light} message={orientation} ocassion="Orientation" />
        <Cards ocassion="Spectrum" message={spectrum} src={fresher} />
        <Cards src={spect} message={spectre} ocassion="Spectre" />
        <Cards message={dehleez} ocassion="Dehleez" src={dehle} />
      </div>
    </div>
  );
};
export default Events;
