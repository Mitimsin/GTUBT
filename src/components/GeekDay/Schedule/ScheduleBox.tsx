import React from "react";
import "../../../styles/geekday-styles/schedule-styles/schedule.css";

interface Props {
    title: string;
    speaker: string;
    time: string;
    image: string;
}

const ScheduleBox = (props: Props) => {
    return (
        <div className="schedule-box">
            <div className="schedule-box-info-box">
                <div className="schedule-box-title-box">
                    <p className="schedule-box-title">{props.title}</p>
                </div>
                <div className="schedule-box-speaker-box">
                    <div className="schedule-box-image-box">
                        <img
                            src={require(`../../../assets/image/speakers/${props.image}`)}
                            alt=""
                            className="schedule-box-image"
                        />
                    </div>
                    <p className="schedule-box-speaker">{props.speaker}</p>
                </div>
            </div>
            <p className="schedule-box-time">{props.time}</p>
        </div>
    );
};

export default ScheduleBox;
