import React from "react";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="bgOpacity"></div>
      <div className="videoContainer">
        <video autoPlay loop muted>
          <source
            src="./automotive.224e7418884105595114.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="contentContainer">
        <span>Driven by performance</span>
        <h1>
          Soft Trims and <span> NVH Solutions</span>{" "}
        </h1>
        <h2>for seamless rides</h2>
      </div>
    </div>
  );
};

export default Landing;
