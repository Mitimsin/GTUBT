import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/geekday-styles/geekday.css";

import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";
import { BsArrowUpCircleFill } from "react-icons/bs";

import NavbarGeekDay from "../Navbar/NavbarGeekDay";
import Background from "../Base/Background";
import Schedule from "./Schedule/Schedule";
import Speakers from "./Speakers/Speakers";
import Sponsors from "./Sponsors/Sponsors";

const GeekDay = () => {
    const { setFaint, mobile } = useContext(DataContext);
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(
        Math.floor((TabMembers.length - 1) / 2)
    );
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setFaint(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname, setFaint]);

    useEffect(() => {
        if (containerRef.current) {
            const activeTabHeight =
                containerRef.current.children[
                    currentTab
                ].getBoundingClientRect().height;
            containerRef.current.style.height = `${activeTabHeight}px`;
        }
    }, [currentTab]);

    useEffect(() => {
        const handleScroll = () => {
            const treshold = mobile ? 120 : 80;

            if (window.scrollY > treshold) {
                setScrollTopVisible(true);
            } else if (window.scrollY <= treshold) {
                setScrollTopVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [mobile]);

    return (
        <div className="geekday-container">
            <Background />
            <NavbarGeekDay
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <div
                className="geekday-tab-container"
                style={{ transform: `translateX(${-currentTab * 100}vw)` }}
                ref={containerRef}
            >
                {TabMembers.map((member, index) => {
                    return React.cloneElement(member.component, {
                        key: index,
                    });
                })}
            </div>
            <button
                className={`geekday-scroll-top-button ${
                    scrollTopVisible ? "show" : ""
                }`}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <BsArrowUpCircleFill size={mobile ? 28 : 38} color="#233b77" />
            </button>
        </div>
    );
};

export default GeekDay;

export const TabMembers = [
    { title: "Takvim", component: <Schedule /> },
    { title: "Konuşmacılar", component: <Speakers /> },
    { title: "Sponsorlar", component: <Sponsors /> },
];
