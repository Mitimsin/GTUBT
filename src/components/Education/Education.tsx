import React, { useEffect, useState } from "react";
import "../../styles/education-styles/education.css";

import image1 from "../../assets/image/education/1.jpg";
import image2 from "../../assets/image/education/2.jpg";
import image3 from "../../assets/image/education/3.jpg";
import image4 from "../../assets/image/education/4.jpg";

import { FaReact } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";

import EducationBox from "./EducationBox";

const Education = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width < 1024);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <section id="education" className="education-container">
      <p className="education-title">Neler Öğrettik?</p>
      <div className="education-area">
        {EducationList.map((education, index) => {
          return (
            <EducationBox
              key={index}
              index={index}
              title={education.title}
              title2={education.title2}
              info={education.info}
              img={education.img}
              icon={education.icon}
              isMobile={mobile}
            />
          );
        })}
      </div>
    </section>
  );
};

const EducationList = [
  {
    title: "Mobile Application",
    title2: "Atolyesi",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
    img: image1,
    icon: BiLogoFlutter,
  },
  {
    title: "Portfolio Web Site",
    title2: "Atolyesi",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissiiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer necm feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
    img: image2,
    icon: FaReact,
  },
  {
    title: "Mobile Application",
    title2: "Atolyesi",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
    img: image3,
    icon: BiLogoFlutter,
  },
  {
    title: "Portfolio Web Site",
    title2: "Atolyesi",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lorem eu purus dignissiiscing elit. Proin nec lorem eu purus dignissim feugiat eget in ex. Integer necm feugiat eget in ex. Integer nec orci eget    dolor malesuada iaculis.",
    img: image4,
    icon: FaReact,
  },
];

export default Education;
