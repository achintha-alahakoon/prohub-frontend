import React from "react";
import Image1 from "../assets/Image1.png";


const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        textAlign: "center",
      }}
    >
    </div>
  );
};

export default HeroSection;
