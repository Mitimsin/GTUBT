import React from "react";
import "../../styles/base-styles/loading.css";

const LoadingScreen = ({ faint = false }) => {
  return (
    <div className={`loading-frame ${faint ? "faint" : ""}`}>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
      <div className="base">
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
        <div className="circ"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
