import React from "react";
import "./App.css";

import Background from "./components/Base/Background";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

import wave from "./assets/image/wave.svg";

function App() {
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
      <Contact />
    </>
  );
}

export default App;
