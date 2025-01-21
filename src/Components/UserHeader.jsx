import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";
import Logo from "../assets/logo.png";
import "../Styles/UserHeader.css";

const UserHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <AppBar className={`appBar ${scrolled ? "scrolled" : ""}`}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "98%",
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

        {/* Navigation Links */}
        <Box style={{ display: "flex", gap: "15px" }}>
          <Button color="inherit" component={Link} to="/">
            <b>Home</b>
          </Button>
          <Button color="inherit" component={Link} to="/about-us">
            <b>About Us</b>
          </Button>
          <Button color="inherit" component={Link} to="/join-with-us">
            <b>Join With Us</b>
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
            <b>Contact Us</b>
          </Button>
        </Box>

        {/* Social Icons */}
        <Box style={{ display: "flex", gap: "10px" }}>
          <Button color="inherit">
            <span style={{ fontSize: "20px" }}>
              <FacebookOutlined />
            </span>
          </Button>
          <Button color="inherit">
            <span style={{ fontSize: "20px" }}>
              <InstagramOutlined />
            </span>
          </Button>
          <Button color="inherit">
            <span style={{ fontSize: "20px" }}>
              <XOutlined />
            </span>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;

