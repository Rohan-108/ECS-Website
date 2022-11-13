import React from "react";
import "../Gallery/Gallery.css";
import events from "../../assets/images/events.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
////photos import /////
import chess from "../../assets/galleryImage/DSC_1692.jpg";
import chess1 from "../../assets/galleryImage/DSC_1698.jpg";
import fresher from "../../assets/galleryImage/fresher.jpg";
import guitar from "../../assets/galleryImage/guitar.jpg";
import light from "../../assets/galleryImage/light.jpg";
import mime from "../../assets/galleryImage/mime.jpg";
import wasim from "../../assets/galleryImage/wasim.jpg";
export default function Gallery(props) {
  const { currentUser, setCurrentUser } = props;
  return (
    <>
      <div className="container">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className="Big_Div">
          <h2 className="Glimpses">Glimpses Of Us</h2>
          <div className="flex_Container">
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={chess} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={chess1} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={wasim} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={light} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={mime} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={guitar} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    "https://i.ibb.co/vzc54hp/Whats-App-Image-2022-11-09-at-9-01-53-PM.jpg"
                  }
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={events} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={events} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={events} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={events} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={events} alt="Card cap"></img>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
