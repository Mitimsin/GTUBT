import React, { useContext, useState } from "react";
import NavbarButtonGeekDay from "./NavbarButtonGeekDay";
import { DataContext } from "../../App";

interface Props {
    currentTab: string;
    setCurrentTab: (state: string) => void;
}

const NavbarGeekDay = (props: Props) => {
    const { mobile } = useContext(DataContext);
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <section
            id="navbar"
            className="navbar-container"
            style={{ justifyContent: mobile ? "flex-end" : "center" }}
        >
            <div
                className={`navbar-zone right ${
                    mobile && burgerMenu ? "shown" : "hidden"
                }`}
            >
                {NavbarMembers.map((member, index) => {
                    return (
                        <NavbarButtonGeekDay
                            key={index}
                            index={index}
                            title={member.title}
                            destination={member.destination}
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

const NavbarMembers = [
    {
        title: "Takvim",
        destination: "schedule",
    },
    {
        title: "Konuşmacılar",
        destination: "speakers",
    },
    {
        title: "Sponsorlar",
        destination: "sponsors",
    },
];
