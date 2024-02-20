import React from "react";

interface props {
    index: number;
    title: string;
    hoverIndex: number;
    setHoverIndex: (state: number) => void;
    mobile: boolean;
    setBurgerMenu: (state: boolean) => void;
    currentTab: number;
    setCurrentTab: (state: number) => void;
}

const NavbarButtonGeekDay = (props: props) => {
    return (
        <button
            className={`navbar-button ${
                props.hoverIndex === -1
                    ? props.currentTab === props.index
                        ? "hovered"
                        : "not-hovered"
                    : props.hoverIndex === props.index
                    ? "hovered"
                    : "not-hovered"
            } `}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

                setTimeout(() => {
                    props.setCurrentTab(props.index);
                    if (props.mobile) props.setBurgerMenu(false);
                }, 100);
            }}
            onMouseEnter={() => props.setHoverIndex(props.index)}
            onMouseLeave={() => props.setHoverIndex(-1)}
        >
            {props.title}
        </button>
    );
};

export default NavbarButtonGeekDay;
