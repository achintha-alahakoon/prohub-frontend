import React, { useState } from "react";
import ReviewComponent from "../Components/ReviewComponent";

const Review = () => {
  const [selectedCVs, setSelectedCVs] = useState([]);

  const handleDownloadSelected = () => {
    selectedCVs.forEach((cvId) => {
     
      const resumeLinks = {
        1: "/path/to/john_doe_resume.pdf",
        2: "/path/to/jane_smith_resume.pdf",
        3: "/path/to/alice_brown_resume.pdf",
      };

      const link = document.createElement("a");
      link.href = resumeLinks[cvId];
      link.download = `resume_${cvId}.pdf`;
      link.click();
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <ReviewComponent selectedCVs={selectedCVs} setSelectedCVs={setSelectedCVs} />
      <div className="download-btn" style={{ textAlign: "right", marginRight: "20px" }}>
        <button
          onClick={handleDownloadSelected}
          disabled={selectedCVs.length === 0}
          style={{
            padding: "10px 20px",
            backgroundColor: selectedCVs.length ? "green" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: selectedCVs.length ? "pointer" : "not-allowed",
          }}
        >
          Download Selected
        </button>
      </div>
    </div>
  );
};

export default Review;
