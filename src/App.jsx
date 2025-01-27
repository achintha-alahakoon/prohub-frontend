import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "./Pages/SideNavBar";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SideNavBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
