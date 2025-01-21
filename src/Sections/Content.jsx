import React from "react";
import { Link } from "@mui/material";
import Team from "../assets/SLT_team.jpg";
import Business from "../assets/business.jpg";
import "../Styles/Content.css";

const Content = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "80vh auto 100vh 100vh",
        gap: "10px",
        width: "100%",
      }}
    >
      {/* Row 1 */}
      <div className="row-content">
        <h1 style={{ color: "#1450A3" }}>Careers at SLT</h1>
        <h3 style={{ fontWeight: "normal" }}>
          Life is full of moments that define who we are.
          <br /> At SLT, everyone can create moments
          <br /> that give them a sense of purpose.
          <br /> #MakeYourMoment
        </h3>
        <button className="primary-button">See Available Positions</button>
      </div>
      <div className="text-center">
        <h2 style={{ fontWeight: "normal" }}>
          We empower staff to be agile, collaborative and trustworthy, giving
          you experiences that instill pride and making moments that matter.
          Careers with Team Purple provide you with the opportunity to work
          collaboratively towards making an impact in the real world.
        </h2>
        <h2 style={{ fontWeight: "normal" }}>
          To read more about our core values, <br />
          <Link href="/about" style={{ color: "#1450A3" }}>
            please click here
          </Link>
        </h2>
      </div>

      {/* Row 2 */}
      <div className="container">
        <div className="quote">
          “The best thing about my job at SLT is that it gives me the
          opportunity to work with talented people all over the world who all
          lean in and drive one goal. ”
        </div>
        <div className="author">- Manoj</div>
      </div>

      {/* Row 3 */}
      <div className="row-content">
        <h1 style={{ color: "#1450A3" }}>Join our team</h1>
        <h3 style={{ fontWeight: "normal" }}>
          We’re an established company, but operate with the passion and speed
          of a start-up to challenge the status quo. Joining an open and
          fast-moving business means plenty of opportunities for you to advance
          your career at SLT by taking on new and challenging responsibilities.
        </h3>
        <button className="hover-button">Search career opportunities</button>
      </div>
      <div className="image-container">
        <img
          src={Team}
          alt="Team"
          className="image-style"
        />
      </div>

      {/* Row 4 */}
      <div className="image-container">
        <img
          src={Business}
          alt="Business"
          className="image-rounded"
        />
      </div>
      <div className="row-content">
        <h1 style={{ color: "#1450A3" }}>A global and diverse environment</h1>
        <h3 style={{ fontWeight: "normal" }}>
          We believe that diversity makes us stronger, more innovative and
          ultimately more competitive. At SLT, you will work in a truly
          international environment, connecting with colleagues all around the
          globe and from different walks of life.
        </h3>
      </div>
    </div>
  );
};

export default Content;
