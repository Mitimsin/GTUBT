import React, { useContext, useEffect } from "react";
import Aboutus from "../Aboutus/Aboutus";
import Background from "../Base/Background";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Events from "../Events/Events";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Recruit from "../Recruit/Recruit";
import wave from "../../assets/image/wave.svg";
import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";

const MainPage = () => {
    const { setFaint } = useContext(DataContext);

    const location = useLocation();

    useEffect(() => {
        setFaint(false);
    }, [location.pathname, setFaint]);

    return (
        <>
            <Background />
            <Navbar />
            <Home />
            <Aboutus />
            <div className="transition-image-box">
                <img src={wave} alt="" className="transition-image" />
            </div>
            <Events />
            <Education />
            <Recruit />
            <Contact />
        </>
    );
};

export default MainPage;
