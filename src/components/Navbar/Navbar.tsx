import React, { useEffect, useState } from "react";
import "../../styles/navbar-styles/navbar.css";
import NavbarButton from "./NavbarButton";

import logo from "../../assets/image/white_logo.png";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    setMobile(width < 1024);
    if (width >= 1024) setBurgerMenu(false);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const navbarStyle = document.querySelector(".navbar-container");

      if (window.scrollY > 100) {
        navbarStyle?.classList.add("scrolled");
      } else if (window.scrollY <= 100) {
        navbarStyle?.classList.remove("scrolled");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [width]);

  return (
    <section id="navbar" className="navbar-container">
      <button
        className="navbar-zone left"
        onClick={() => window.location.reload()}
      >
        <img src={logo} alt="" className="navbar-logo" />
      </button>
      <div
        className={`navbar-zone right ${
          mobile && burgerMenu ? "shown" : "hidden"
        }`}
      >
        {NavbarMembers.map((member, index) => {
          return (
            <NavbarButton
              key={index}
              index={index}
              title={member.title}
              destination={member.destination}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
              mobile={mobile}
              setBurgerMenu={setBurgerMenu}
            />
          );
        })}
      </div>
      {mobile && (
        <button
          onClick={() => setBurgerMenu(!burgerMenu)}
          className="navbar-burger-button"
        >
          <div className={`navbar-sitck ${burgerMenu && "top"}`}></div>
          <div className={`navbar-sitck ${burgerMenu && "middle"}`}></div>
          <div className={`navbar-sitck ${burgerMenu && "bottom"}`}></div>
        </button>
      )}
    </section>
  );
};

const NavbarMembers = [
  {
    title: "Ana Sayfa",
    destination: "home",
  },
  {
    title: "Hakkımızda",
    destination: "aboutus",
  },
  {
    title: "Etkinlikler",
    destination: "events",
  },
  {
    title: "Eğitimler",
    destination: "education",
  },
  {
    title: "İletişim",
    destination: "contact",
  },
];

export default Navbar;
