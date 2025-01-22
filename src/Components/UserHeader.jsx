import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";
import Logo from "../assets/logo.png";
import "../Styles/UserHeader.css";

const UserHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <AppBar className={`appBar ${scrolled ? "scrolled" : ""}`}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Box>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "150px", height: "60px" }}
          />
        </Box>

        {/* Navigation Tabs */}
        <Box style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label="Home"
              value="/"
              component={Link}
              to="/"
              style={{ fontWeight: activeTab === "/" ? "bold" : "normal",
                color: activeTab === "/" ? "#1450A3" : "black",
               }}
            />
            <Tab
              label="About Us"
              value="/about-us"
              component={Link}
              to="/about-us"
              style={{
                fontWeight: activeTab === "/about-us" ? "bold" : "normal",
                color: activeTab === "/about-us" ? "#1450A3" : "black",
              }}
            />
            <Tab
              label="Join With Us"
              value="/join-with-us"
              component={Link}
              to="/join-with-us"
              style={{
                fontWeight: activeTab === "/join-with-us" ? "bold" : "normal",
                color: activeTab === "/join-with-us" ? "#1450A3" : "black",
              }}
            />
            <Tab
              label="Contact Us"
              value="/contact-us"
              component={Link}
              to="/contact-us"
              style={{
                fontWeight: activeTab === "/contact-us" ? "bold" : "normal",
                color: activeTab === "/contact-us" ? "#1450A3" : "black",
              }}
            />
          </Tabs>
        </Box>

        {/* Social Icons */}
        <Box style={{ display: "flex", gap: "40px", marginRight: "20px" }}>
          <FacebookOutlined style={{ fontSize: "26px", cursor: "pointer" }} />
          <InstagramOutlined style={{ fontSize: "26px", cursor: "pointer" }} />
          <XOutlined style={{ fontSize: "26px", cursor: "pointer" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
