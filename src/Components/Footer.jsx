import React from "react";
import "../Styles/Footer.css";
import {
    FacebookOutlined,
    InstagramOutlined,
    XOutlined,
    LinkedinOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
      <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Fiber and ADSL</li>
            <li>SLT PEOTV</li>
            <li>Fixed & Mobile Broadband</li>
            <li>SLT Cloud</li>
            <li>Enterprise Solutions</li>
            <li>Network Management</li> 
          </ul>
        </div>
        <div className="footer-section">
          <h4>Industries</h4>
          <ul>
            <li>Telecommunications</li>
            <li>ICT</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Home</li>
            <li>About SLT</li>
            <li>Careers at SLT</li>
            <li>Contact Us</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customers & Partners</h4>
          <ul>
            <li>Customer Stories</li>
            <li>Find a Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Legal</a>
          <a href="#">Cookies Settings</a>
          <a href="#">Report a Concern</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <XOutlined />
          </a>
          <a href="#">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
