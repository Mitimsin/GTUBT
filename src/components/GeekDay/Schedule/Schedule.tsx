import React, { useState } from "react";
import "../../../styles/geekday-styles/schedule-styles/schedule.css";

import Salon1 from "../../../assets/json/Salon_1.json";
import Salon2 from "../../../assets/json/Salon_2.json";
import ScheduleStrip from "./ScheduleStrip";

const Schedule = () => {
  const [slideValue, setSlideValue] = useState(0);

  return (
    <section id="schedule" className="schedule-container">
      <div className="schedule-header-box">
        <p className="schedule-header">Etkinlik Takvimi</p>
        <p className="schedule-info">
          Bu sene 28 Şubat'ta gerçekleşecek olan GeekDay etkinlik takvimi.{" "}
          <br />
          <span className="schedule-extra-info">
            Etkinlik saat 11.00 da açılış konuşması ile başlayıp saat 17.30 da
            kapanış konuşması ile bitecektir
          </span>
        </p>
      </div>
      <div className="schedule-zone">
        {
          <ScheduleStrip
            title={"Salon 1"}
            salonDetail={Salon1}
            slideValue={slideValue}
            setSlideValue={setSlideValue}
          />
        }
        <div className="schedule-seperator" />
        {
          <ScheduleStrip
            title={"Salon 2"}
            salonDetail={Salon2}
            slideValue={slideValue}
            setSlideValue={setSlideValue}
          />
        }
      </div>
    </section>
  );
};

export default Schedule;
