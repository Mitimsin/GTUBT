import React, { useContext, useState } from "react";
import "../../../styles/geekday-styles/speakers-styles/speakers.css";
import { DataContext } from "../../../App";

interface Props {
    name: string;
    subject: string;
    company: string;
    image: string;
}

const SpeakerBox = (props: Props) => {
    const { mobile } = useContext(DataContext);
    const [isHoveredName, setIsHoveredName] = useState(false);
    const [isHoveredSubject, setIsHoveredSubject] = useState(false);
    const [isHoveredCompany, setIsHoveredCompany] = useState(false);

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
                <p
                    className="speaker-box-name"
                    onMouseEnter={() => setIsHoveredName(true)}
                    onMouseLeave={() => setIsHoveredName(false)}
                >
                    {props.name}
                </p>
                {mobile && (
                    <p
                        className={`speaker-box-name-extended ${
                            isHoveredName ? "hovered" : ""
                        }`}
                        onMouseEnter={() => setIsHoveredName(true)}
                        onMouseLeave={() => setIsHoveredName(false)}
                    >
                        {props.name}
                    </p>
                )}
                <div className="speaker-box-text-info">
                    <p
                        className="speaker-box-subject"
                        onMouseEnter={() => setIsHoveredSubject(true)}
                        onMouseLeave={() => setIsHoveredSubject(false)}
                    >
                        {props.subject}
                    </p>
                    {mobile && (
                        <p
                            className={`speaker-box-subject-extended ${
                                isHoveredSubject ? "hovered" : ""
                            }`}
                            onMouseEnter={() => setIsHoveredSubject(true)}
                            onMouseLeave={() => setIsHoveredSubject(false)}
                        >
                            {props.subject}
                        </p>
                    )}
                    <p
                        className="speaker-box-company"
                        onMouseEnter={() => setIsHoveredCompany(true)}
                        onMouseLeave={() => setIsHoveredCompany(false)}
                    >
                        @ {props.company}
                    </p>
                    <p
                        className={`speaker-box-company-extended ${
                            isHoveredCompany ? "hovered" : ""
                        }`}
                        onMouseEnter={() => setIsHoveredCompany(true)}
                        onMouseLeave={() => setIsHoveredCompany(false)}
                    >
                        @ {props.company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SpeakerBox;
