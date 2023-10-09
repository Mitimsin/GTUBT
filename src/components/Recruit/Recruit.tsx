import React, { useContext } from "react";
import "../../styles/recruit-styles/recruit.css";

import wave from "../../assets/image/wave.svg";
import { DataContext } from "../../App";

const Recruit = () => {
  const { mobile } = useContext(DataContext);

  const urlMember =
    "https://docs.google.com/forms/d/e/1FAIpQLSeub75atkfQ6rKbfS49KvNK_xDnChHhtuzdTcZcLox7yebj-g/viewform?embedded=true";
  const urlStaff =
    "https://docs.google.com/forms/d/e/1FAIpQLSeeLmbkloYnv2ybkWY7kVJ_wJKRV4miPteMWt9NGiUDpEPr_Q/viewform?embedded=true";

  return (
    <section id="recruit" className="recruit-container">
      <div className="transition-image-box  rotate">
        <img src={wave} alt="" className="transition-image" />
      </div>
      <p className="recruit-header">Aramıza Katılmaya Hazır Mısın?</p>
      <div className="recruit-zone">
        {mobile ? (
          <>
            <button
              className="recruit-button"
              onClick={() => window.open(urlMember, "_blank")}
            >
              Üye Kayıt Formu
            </button>
            <button
              className="recruit-button red"
              onClick={() => window.open(urlStaff, "_blank")}
            >
              Ekip Başvuru Formu
            </button>
          </>
        ) : (
          <>
            <iframe
              src={urlMember}
              className="form-frame"
              title="recruit-member"
            >
              Yükleniyor…
            </iframe>
            <iframe src={urlStaff} className="form-frame" title="recruit-staff">
              Yükleniyor…
            </iframe>
          </>
        )}
      </div>
    </section>
  );
};

export default Recruit;
