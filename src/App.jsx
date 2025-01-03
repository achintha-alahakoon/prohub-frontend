import React from "react";
import "./App.css";
import AllInterns from "./Pages/AllInterns";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "1520px" }}>
        <Header />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", width: "1520px" }}
      >
        <AllInterns />
      </div>
    </div>
  );
}

export default App;
