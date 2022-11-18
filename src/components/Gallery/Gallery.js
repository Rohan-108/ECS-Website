import React from "react";
import "../Gallery/Gallery.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Textspan from "../Home/Textspan";
////photos import /////
import chess from "../../assets/galleryImage/DSC_1692.jpg";
import chess1 from "../../assets/galleryImage/DSC_1698.jpg";
import fresher from "../../assets/galleryImage/fresher.jpg";
import guitar from "../../assets/galleryImage/guitar.jpg";
import light from "../../assets/galleryImage/light.jpg";
import mime from "../../assets/galleryImage/mime.jpg";
import wasim from "../../assets/galleryImage/wasim.jpg";
import unew from "../../assets/galleryImage/dancer.jpg";
import bihu from "../../assets/galleryImage/bihu.jpg";
import dehleez from "../../assets/galleryImage/dehleez.jpeg";
import dehleez1 from "../../assets/galleryImage/dehleez1.jpeg";
import fresher1 from "../../assets/galleryImage/fresher1.jpg";
import girlDraw from "../../assets/galleryImage/girlDraw.jpg";
import new1 from "../../assets/galleryImage/new1.jpg";
export default function Gallery(props) {
  const { currentUser, setCurrentUser } = props;
  const mess = "Glimpses Of Us".split("");
  return (
    <>
      <div className="container">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className="Big_Div">
          <h2 className="Glimpses" style={{ letterSpacing: "1.2px" }}>
            {mess.map((letter, index) => {
              return (
                <Textspan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </Textspan>
              );
            })}
          </h2>
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
                <img
                  className="card-img-top"
                  src={fresher}
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={unew} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={bihu} alt="Card cap"></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img
                  className="card-img-top"
                  src={dehleez}
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img
                  className="card-img-top"
                  src={dehleez1}
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img
                  className="card-img-top"
                  src={girlDraw}
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img
                  className="card-img-top"
                  src={fresher1}
                  alt="Card cap"
                ></img>
              </div>
            </div>
            <div className="smallDiv">
              <div className="card">
                <img className="card-img-top" src={new1} alt="Card cap"></img>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
