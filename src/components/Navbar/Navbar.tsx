import React, { useEffect, useState } from "react";
import "../../styles/navbar-styles/navbar.css";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    setMobile(width < 1024);
    if (width >= 1024) setBurgerMenu(false);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const navbarStyle = document.querySelector(".navbar-container");

      if (window.scrollY > 120) {
        navbarStyle?.classList.add("scrolled");
      } else if (window.scrollY <= 120) {
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
      <div>GTU BT</div>
      <div>Navigation + socials</div>
    </section>
  );
};

export default Navbar;
