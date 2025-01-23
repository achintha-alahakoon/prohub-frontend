import React from "react";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const job = {
    JobTitle: params.get("JobTitle"),
    TypeOfEmployment: params.get("TypeOfEmployment"),
    Department: params.get("Department"),
    Location: params.get("Location"),
    Description: params.get("Description"),
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{job.JobTitle}</h2>
      <p><strong>Type of Employment:</strong> {job.TypeOfEmployment}</p>
      <p><strong>Department:</strong> {job.Department}</p>
      <p><strong>Location:</strong> {job.Location}</p>
      <p><strong>Description:</strong> {job.Description}</p>
    </div>
  );
};

export default JobDetails;
