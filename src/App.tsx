import React from "react";
import "./App.css";
import Background from "./components/Base/Background";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Education from "./components/Education/Education";

import wave from "./assets/image/wave.svg";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Background />
      <Navbar />
      <Home />
      <Aboutus />
      <img src={wave} alt="" className="transition-image" />
      <Events />
      <Education />
    </div>
  );
}

export default App;
