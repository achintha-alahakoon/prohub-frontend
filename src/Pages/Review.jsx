import React, { useState } from "react";
import ReviewComponent from "../Components/ReviewComponent";

const Review = () => {
  const [selectedCVs, setSelectedCVs] = useState([]);

  const handleDownloadSelected = async () => {
    selectedCVs.forEach(async (cvId) => {
      try {
        const response = await fetch(
          `http://localhost:8080/applicants/${cvId}/download`,
          {
            method: "GET",
            headers: {
              Authorization: "Basic " + btoa("admin:admin123"),
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to download CV with ID ${cvId}`);
        }
  
        const blob = await response.blob();
  
        const contentDisposition = response.headers.get("Content-Disposition");
  
        const fileNameMatch = contentDisposition
          ? contentDisposition.match(/filename="(.+)"/)
          : null;
  
        const fileName = fileNameMatch
          ? fileNameMatch[1]
          : `resume_${cvId}.pdf`;
  
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Download error:", error);
      }
    });
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ReviewComponent
        selectedCVs={selectedCVs}
        setSelectedCVs={setSelectedCVs}
      />
      <div
        className="download-btn"
        style={{ textAlign: "right", marginRight: "20px" }}
      >
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
