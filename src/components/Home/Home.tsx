import React from "react";
import "../../styles/home-styles/home.css";
import homeLogo from "../../assets/image/home.svg";
import Type from "./Type";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-zone">
        <div className="home-zone-left">
          <h1 className="heading">
            Hi There!{" "}
            <span className="wave" role="img">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            WE'RE
            <strong className="heading-name-main"> GTU COMPUTER SOCIETY</strong>
          </h1>
          <Type />
        </div>

        <div className="home-image-box">
          <img src={homeLogo} alt="home" className="home-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
