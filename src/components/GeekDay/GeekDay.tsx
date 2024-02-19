import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/geekday-styles/geekday.css";

import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";
import NavbarGeekDay from "../Navbar/NavbarGeekDay";
import Background from "../Base/Background";
import Schedule from "./Schedule/Schedule";
import Speakers from "./Speakers/Speakers";
import Sponsors from "./Sponsors/Sponsors";

const GeekDay = () => {
    const { setFaint } = useContext(DataContext);
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(
        Math.floor((TabMembers.length - 1) / 2)
    );
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setFaint(false);
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
                {TabMembers.map((members, index) => {
                    return members.component;
                })}
            </div>
        </div>
    );
};

export default GeekDay;

export const TabMembers = [
    { title: "Takvim", component: <Schedule /> },
    { title: "Konuşmacılar", component: <Speakers /> },
    { title: "Sponsorlar", component: <Sponsors /> },
];
