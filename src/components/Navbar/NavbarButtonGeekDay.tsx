import React from "react";

interface props {
    index: number;
    title: string;
    destination: string;
    hoverIndex: number;
    setHoverIndex: (state: number) => void;
    mobile: boolean;
    setBurgerMenu: (state: boolean) => void;
    currentTab: string;
    setCurrentTab: (state: string) => void;
}

const NavbarButtonGeekDay = (props: props) => {
    return (
        <button
            className={`navbar-button ${
                props.hoverIndex === -1
                    ? props.currentTab === props.destination
                        ? "hovered"
                        : "not-hovered"
                    : props.hoverIndex === props.index
                    ? "hovered"
                    : "not-hovered"
            } `}
            onClick={() => {
                props.setCurrentTab(props.destination);
                if (props.mobile) props.setBurgerMenu(false);
            }}
            onMouseEnter={() => props.setHoverIndex(props.index)}
            onMouseLeave={() => props.setHoverIndex(-1)}
        >
            {props.title}
        </button>
    );
};

export default NavbarButtonGeekDay;
