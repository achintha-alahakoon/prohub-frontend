import React from "react";
import Logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import "../../Styles/Apply.css";

const Apply = () => {
  return (
    <div>
      <div className="apply-header">
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "220px", height: "80px" }}
          />
        </div>

        <div>
          <p>Internship</p>
          <p>
            <FaLocationDot />
            Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apply;
