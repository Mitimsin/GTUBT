import React from "react";
import "../../styles/footer-styles/footer.css";

import logo from "../../assets/image/white_logo_horizontal.png";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <button
        className="footer-zone left"
        onClick={() => window.location.reload()}
      >
        <img src={logo} alt="" className="footer-logo" />
      </button>
      <div className="footer-zone right">
        <p>gtekbt@gmail.com</p>
        <p>0505 594 29 48</p>
      </div>
    </div>
  );
};

export default Footer;
