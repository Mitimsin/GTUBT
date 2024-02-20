import React from "react";
import "../../../styles/geekday-styles/sponsors-styles/sponsors.css";
import { SponsorLevels } from "./Sponsors";

interface Props {
    name: string;
    info: string;
    level: SponsorLevels;
    image: string;
}

const SponsorBox = (props: Props) => {
    return (
        <div className={`sponsor-box ${props.level}`}>
            <div className="sponsor-box-image-box">
                <img
                    src={require(`../../../assets/image/sponsors/${props.image}`)}
                    alt=""
                    className="sponsor-box-image"
                />
            </div>
            <div className="sponsor-box-text">
                <p className="sponsor-box-name">{props.name}</p>
                <p className="sponsor-box-info">{props.info}</p>
            </div>
        </div>
    );
};

export default SponsorBox;
