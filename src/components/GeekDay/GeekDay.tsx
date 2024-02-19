import React, { useContext, useEffect, useState } from "react";
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
    const [currentTab, setCurrentTab] = useState("speakers");

    useEffect(() => {
        setFaint(false);
    }, [location.pathname, setFaint]);

    return (
        <div className="geekday-container">
            <Background />
            <NavbarGeekDay
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            {currentTab === "schedule" ? (
                <Schedule />
            ) : currentTab === "speakers" ? (
                <Speakers />
            ) : currentTab === "sponsors" ? (
                <Sponsors />
            ) : (
                <></>
            )}
        </div>
    );
};

export default GeekDay;
