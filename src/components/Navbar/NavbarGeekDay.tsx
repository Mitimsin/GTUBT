import React, { useContext, useState } from "react";
import NavbarButtonGeekDay from "./NavbarButtonGeekDay";
import { DataContext } from "../../App";
import { TabMembers } from "../GeekDay/GeekDay";

interface Props {
    currentTab: number;
    setCurrentTab: (state: number) => void;
}

const NavbarGeekDay = (props: Props) => {
    const { mobile } = useContext(DataContext);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <section
            id="navbar"
            className="navbar-container scrolled"
            style={{ justifyContent: mobile ? "flex-end" : "center" }}
        >
            <div
                className={`navbar-zone right ${
                    mobile && burgerMenu ? "shown" : "hidden"
                }`}
            >
                {TabMembers.map((member, index) => {
                    return (
                        <NavbarButtonGeekDay
                            key={index}
                            index={index}
                            title={member.title}
                            hoverIndex={hoverIndex}
                            setHoverIndex={setHoverIndex}
                            mobile={mobile}
                            setBurgerMenu={setBurgerMenu}
                            currentTab={props.currentTab}
                            setCurrentTab={props.setCurrentTab}
                        />
                    );
                })}
            </div>
            {mobile && (
                <button
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="navbar-burger-button"
                >
                    <div
                        className={`navbar-sitck ${burgerMenu && "top"}`}
                    ></div>
                    <div
                        className={`navbar-sitck ${burgerMenu && "middle"}`}
                    ></div>
                    <div
                        className={`navbar-sitck ${burgerMenu && "bottom"}`}
                    ></div>
                </button>
            )}
        </section>
    );
};

export default NavbarGeekDay;
