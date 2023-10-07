import React, { useEffect, useState } from "react";
import "../../styles/education-styles/education-box.css";
import { IconType } from "react-icons";

interface Props {
  index: number;
  title: string;
  title2: string;
  info: string;
  img: string;
  icon: IconType;
  isMobile: boolean;
}

const EducationBox = (props: Props) => {
  const [hovered, setHovered] = useState(props.isMobile ? true : false);

  useEffect(() => {
    setHovered(props.isMobile ? true : false);
  }, [props.isMobile]);

  return (
    <div
      className="education-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => !props.isMobile && setHovered(false)}
    >
      <div className={`education-box-image-box ${hovered ? "hover" : ""}`}>
        <img
          src={props.img}
          alt={`education${props.index}`}
          className="education-box-image"
        />
      </div>
      <div className={`education-box-title ${hovered ? "hover" : ""}`}>
        {props.title} <br /> {props.title2}
      </div>
      <div className={`education-box-info ${hovered ? "hover" : ""}`}>
        {props.info}
      </div>
      <props.icon
        size={60}
        className={`education-box-icon ${hovered ? "hover" : ""}`}
      />
    </div>
  );
};

export default EducationBox;
