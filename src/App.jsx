import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllInterns from "./Pages/AllInterns";
import Header from "./Components/Header";


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllInterns />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
