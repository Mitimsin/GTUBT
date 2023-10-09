import React, { useState } from "react";
import "../../styles/contact-styles/social-link.css";
import { IconType } from "react-icons";

interface Props {
  url: string;
  icon: IconType;
  isMobile: boolean;
}

const SocialLink = (props: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="social-link-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(props.url, "_blank")}
    >
      <props.icon
        size={props.isMobile ? 35 : 40}
        color="#f6e4f6"
        className={`${hovered ? "shake" : ""}`}
      />
    </button>
  );
};

export default SocialLink;
