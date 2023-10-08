import React from "react";
import "../../styles/base-styles/loading.css";

const LoadingScreen = ({ faint = false }) => {
  return (
    <div className={`loading-frame ${faint ? "faint" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
