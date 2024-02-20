import React from "react";
import "../../../styles/geekday-styles/speakers-styles/speakers.css";

interface Props {
    name: string;
    subject: string;
    company: string;
    image: string;
}

const SpeakerBox = (props: Props) => {
    return (
        <div className="speaker-box">
            <div className="speaker-box-image-box">
                <img
                    src={require(`../../../assets/image/speakers/${props.image}`)}
                    alt=""
                    className="speaker-box-image"
                />
            </div>
            <div className="speaker-box-text">
                <p className="speaker-box-name">{props.name}</p>
                <p className="speaker-box-subject">{props.subject}</p>
                <p className="speaker-box-company">@{props.company}</p>
            </div>
        </div>
    );
};

export default SpeakerBox;
