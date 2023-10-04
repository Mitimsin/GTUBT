import React from "react";
import "../../styles/aboutus-styles/aboutus.css";

const Aboutus = () => {
  return (
    <section id="aboutus" className="aboutus-container">
      <div className="aboutus-zone left"> BERKAYIN POPOSUNUN FOTOSU</div>
      <div className="aboutus-zone right">
        <p className="aboutus-header">Biz Kimiz?</p>
        <p className="aboutus-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget
          dolor malesuada iaculis.{" "}
          <span className="aboutus-highlight">GTU BT</span> Nunc euismod elit id
          ex sollicitudin, eget vulputate odio malesuada. Nulla facilisi. Nullam
          euismod, augue a aliquet cursus, tellus justo tincidunt dui, nec
          suscipit purus libero id justo. <br />
          <br />
          Pellentesque quis justo nec leo tincidunt lacinia. Curabitur non odio
          in lectus mattis semper. Nulla facilisi. Donec nec sapien{" "}
          <span className="aboutus-highlight">GEEKDAY</span> nec ligula cursus
          feugiat. Pellentesque quis justo nec leo tincidunt lacinia. Curabitur
          non odio in lectus mattis semper. Nulla facilisi. Donec nec sapien nec
          ligula cursus feugiat.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
