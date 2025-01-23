import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Styles/JobDetails.css";
import Logo from "../../assets/logo.png";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  MailFilled,
} from "@ant-design/icons";

const JobDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const job = {
    JobTitle: params.get("JobTitle"),
    TypeOfEmployment: params.get("TypeOfEmployment"),
    Department: params.get("Department"),
    Location: params.get("Location"),
    Description: params.get("Description"),
  };

  return (
    <div className="job-details-container">
      <div className="job-details-content">
        <div className="job-details-header">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "250px", height: "100px" }}
          />
        </div>
        <div className="job-details-body">
          <h2 style={{ fontWeight: "normal" }}>{job.JobTitle}</h2>
          <p>{job.Location}</p>
          <p>{job.TypeOfEmployment}</p>
          <p>Department: {job.Department}</p>
          <h5>Company Description</h5>
          <p>{job.Description}</p>
          <h5>Intern Description</h5>
          <p>{job.Description}</p>
          <h5>Qualifications</h5>
          <p>{job.Description}</p>
          <h5>Additional Information</h5>
          <p>{job.Description}</p>
          <div
            className="divider"
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              width: "100%",
              height: "0.5px",
              backgroundColor: "black",
            }}
          ></div>
          <div className="interested-button-container">
            <button className="interested-button" onClick={() => navigate("/apply")}>I'm Interested</button>
          </div>
          <div className="privacy-policy-container">
            <p href="#">Privacy Policy</p>
            <p href="#">Cookies Settings</p>
          </div>
        </div>
      </div>

      <div className="job-details-sidebar">
        <div className="interested-button-sidebar">
          <button className="interested-button-sider" onClick={() => navigate("/apply")}>I'm Interested</button>
        </div>
        <div className="share-job">
          <p className="share-title">Share This interns</p>
          <div className="share-icons">
            <FacebookFilled className="icon" />
            <InstagramFilled className="icon" />
            <LinkedinFilled className="icon" />
            <TwitterCircleFilled className="icon" />
            <MailFilled className="icon" />
          </div>
        </div>
        <div className="other-jobs">
          <h3 className="other-jobs-title">Other interns at SLT</h3>
          <div className="other-jobs-list">
            <div className="job-card">
              <p className="job-title">Software Engineer</p>
              <p className="job-location">Colombo</p>
            </div>
            <div className="job-card">
              <p className="job-title">Network Administrator</p>
              <p className="job-location">Kandy</p>
            </div>
            <div className="job-card">
              <p className="job-title">Data Analyst</p>
              <p className="job-location">Jaffna</p>
            </div>
          </div>
          <p className="show-all-jobs">Show all interns</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
