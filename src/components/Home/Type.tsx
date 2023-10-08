import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Eğlenirken Öğrenmek",
          "Sosyal Aktiviteler",
          "Yazılım",
          "Eğitici Atölyeler",
          "Yapay Zeka",
          "GeekDay",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
