import React from "react";
import logo from "../../assets/ResHubImages/1stSemImg/ce101.jpg";
import poesis from "../../assets/galleryImage/Poesis.png";
import moments from "../../assets/galleryImage/moments.png";
import "./poster.css";
const Poster = () => {
  return (
    <div className="posterContainer">
      <div className="poster">
        <div className="posterImg">
          <img src={poesis} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            provident natus hic! Reiciendis voluptatum aperiam voluptatem quo,
            ab eaque enim deserunt nisi natus est officia numquam repudiandae
            quae commodi delectus.
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={moments} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            provident natus hic! Reiciendis voluptatum aperiam voluptatem quo,
            ab eaque enim deserunt nisi natus est officia numquam repudiandae
            quae commodi delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
