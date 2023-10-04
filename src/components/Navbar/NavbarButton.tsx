import React from "react";

interface props {
  index: number;
  title: string;
  destination: string;
  hoverIndex: number;
  setHoverIndex: (state: number) => void;
  mobile: boolean;
  setBurgerMenu: (state: boolean) => void;
}

const NavbarButton = (props: props) => {
  return (
    <button
      className={`navbar-button ${
        props.hoverIndex === -1
          ? ""
          : props.hoverIndex === props.index
          ? "hovered"
          : "not-hovered"
      }`}
      onClick={() => {
        const targetSection = document.getElementById(props.destination);
        if (targetSection) {
          const targetOffset = targetSection.getBoundingClientRect().top;
          const bodyRect = document.body.getBoundingClientRect();
          const targetPosition = targetOffset - bodyRect.top;
          window.scroll({
            top: targetPosition - (props.mobile ? 80 : 90),
            behavior: "smooth",
          });

          if (props.mobile) props.setBurgerMenu(false);
        }
      }}
      onMouseEnter={() => props.setHoverIndex(props.index)}
      onMouseLeave={() => props.setHoverIndex(-1)}
    >
      {props.title}
    </button>
  );
};

export default NavbarButton;
