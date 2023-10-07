import React, { useState } from "react";
import "../../styles/contact-styles/social-link.css";
import { IconType } from "react-icons";

interface Props {
  url: string;
  name: string;
  icon: IconType;
}

const SocialLink = (props: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="social-link-container">
      <div
        className="link-zone"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(props.url, "_blank")}
      >
        <props.icon
          size={50}
          color="#f6e4f6"
          className={`${hovered ? "shake" : ""}`}
        />
      </div>
      <div className="link-title">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default SocialLink;
