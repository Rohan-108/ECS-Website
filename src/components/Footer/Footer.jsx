import { Link } from "react-router-dom";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="grid_container">
          <div className="col1">
            <p style={{ fontWeight: 500, color: "black" }}>Quick Links</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: ".8rem",
                justifyContent: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <a className="linkss" target='blank' href="https://drive.google.com/drive/u/0/folders/1YhM-dgozkKS_j73HACHdPwyk_7jlzggC">
                Resource Hub
              </a>
              <a href="#about_us" className="linkss">
                Message
              </a>
              <Link to="/Events" className="linkss">
                Annual Attractions
              </Link>
            </div>
          </div>
          <div className="col2">
            <p style={{ fontWeight: 500, color: "black" }}>Contact Us</p>
            <div className="emailFooter">
              <p style={{ color: "white" }}>Email:- </p>
              <a
                href="mailto:ecs.nitsilchar2023@gmail.com"
                style={{ color: "white", fontSize: "16px" }}
              >
                ecs.nitsilchar2023@gmail.com
              </a>
            </div>
          </div>
          <div className="col3">
            <p style={{ fontWeight: 500, color: "black" }}>Quick Links</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: ".8rem",
                justifyContent: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <Link to="/" className="linkss">
                Home
              </Link>
              <Link className="linkss" to="/Member">
                Members
              </Link>
              <Link className="linkss" to="/Gallery">
                Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright 2022 All rights reserved</p>
          <p>ECS NIT Silchar</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
