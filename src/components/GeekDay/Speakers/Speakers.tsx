import React from "react";
import "../../../styles/geekday-styles/speakers-styles/speakers.css";

import SpeakerBox from "./SpeakerBox";
import SpeakersList from "../../../assets/json/Speakers.json";

const Speakers = () => {
  return (
    <section id="speakers" className="speakers-container">
      <div className="speakers-header-box">
        <p className="speakers-header">Bu seneki konuşmacılarımız</p>
        <p className="speakers-info">
          Aynı anda iki salonda misafir ettiğimiz birbirinden değerli
          konuşmacılarımız
        </p>
      </div>
      <div className="speakers-list">
        {SpeakersList.map((speaker, index) => {
          return (
            <SpeakerBox
              key={index}
              name={speaker.name}
              subject={speaker.subject}
              company={speaker.company}
              image={speaker.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Speakers;
