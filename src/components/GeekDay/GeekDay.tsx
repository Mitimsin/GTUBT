import React, { useContext, useEffect } from "react";
import "../../styles/geekday-styles/geekday.css";

import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";
import NavbarGeekDay from "../Navbar/NavbarGeekDay";

const GeekDay = () => {
    const { setFaint } = useContext(DataContext);
    const location = useLocation();

    useEffect(() => {
        setFaint(false);
    }, [location.pathname, setFaint]);

    return (
        <div className="geekday-container">
            <NavbarGeekDay></NavbarGeekDay>
        </div>
    );
};

export default GeekDay;
