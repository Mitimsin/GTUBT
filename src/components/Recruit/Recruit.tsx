import React from "react";
import "../../styles/recruit-styles/recruit.css";

import wave from "../../assets/image/wave.svg";

const Recruit = () => {
  return (
    <section id="recruit" className="recruit-container">
      <div className="transition-image-box  rotate">
        <img src={wave} alt="" className="transition-image" />
      </div>
      <p className="recruit-header">Aramıza Katılmaya Hazır Mısın?</p>
      <div className="recruit-zone">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeub75atkfQ6rKbfS49KvNK_xDnChHhtuzdTcZcLox7yebj-g/viewform?embedded=true"
          className="form-frame"
          title="recruit-member"
        >
          Yükleniyor…
        </iframe>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeeLmbkloYnv2ybkWY7kVJ_wJKRV4miPteMWt9NGiUDpEPr_Q/viewform?embedded=true"
          className="form-frame"
          title="recruit-staff"
        >
          Yükleniyor…
        </iframe>
      </div>
    </section>
  );
};

export default Recruit;
