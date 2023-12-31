import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
const Message = (props) => {
  const { message, name, designation, src } = props;
  return (
    <div className="message_container">
      <img src={src} alt="for people" id="img2s" loading="lazy" />
      <div className="mess" style={{ whiteSpace: "pre-line" }}>
        {message}
      </div>
      <div className="name_deg">
        <p>{name}</p>
        <p>-{designation}</p>
      </div>
    </div>
  );
};

export default Message;
