import React, { useState } from "react";
import "../../../styles/geekday-styles/schedule-styles/schedule.css";

import Salon1 from "../../../assets/json/Salon_1.json";
import Salon2 from "../../../assets/json/Salon_2.json";
import Salon3 from "../../../assets/json/Salon_3.json";
import ScheduleStrip from "./ScheduleStrip";

const Schedule = () => {
    const [slideValue, setSlideValue] = useState(0);

    return (
        <section id="schedule" className="schedule-container">
            <div className="schedule-header-box">
                <p className="schedule-header">Etkinlik Takvimi</p>
                <p className="schedule-info">
                    Bu sene 2 Mart'da gerçekleşecek olan GeekDay etkinlik
                    takvimi
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
                <div className="schedule-seperator" />
                {
                    <ScheduleStrip
                        title={"Salon 3"}
                        salonDetail={Salon3}
                        slideValue={slideValue}
                        setSlideValue={setSlideValue}
                    />
                }
            </div>
        </section>
    );
};

export default Schedule;
