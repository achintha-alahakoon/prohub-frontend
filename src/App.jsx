import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllInterns from "./Pages/AllInterns";
import Header from "./Components/Header";
import UserHeader from "./Components/UserHeader";
import Home from "./Pages/UserView/Home";
import ContactUs from "./Pages/UserView/ContactUs";
import AboutUs from "./Pages/UserView/AboutUs";
import JoinWithUs from "./Pages/UserView/JoinWithUs";

function App() {
  return (
    <Router>
      <div>
        <UserHeader />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/join-with-us" element={<JoinWithUs />} />
            <Route path="/all-interns" element={<AllInterns />} />
            <Route path="/header" element={<Header />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
