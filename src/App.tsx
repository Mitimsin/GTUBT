import React from "react";
import "./App.css";
import Background from "./components/Base/Background";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Education from "./components/Education/Education";

import wave from "./assets/image/wave.svg";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <Aboutus />
      <img src={wave} alt="" className="transition-image" />
      <Events />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
