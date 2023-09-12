import "./cardRayyan.scss";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";

const CardRayyan = ({ data }) => {
  return (
    <div className="container1">
      <div className="card1">
        <div className="content">
          <img src={data.src} alt="placeholder" className="prof-pic" loading="lazy" />
          <div className="bottom-container1">
            <h3>{data.name}</h3>
            <p>{data.desig}</p>
            <div className="linksR">
              <a href={data.insta} target="_blank" rel="noreferrer">
                <img src={facebook} alt="insta" className="soc-icon" loading="lazy" />
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedin} alt="twitter" className="soc-icon" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardRayyan;
