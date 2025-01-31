import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import "../Styles/ReviewComponent.css";

const ReviewComponent = ({ selectedCVs, setSelectedCVs }) => {
  const [cvList, setCvList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCVs, setFilteredCVs] = useState([]);

  useEffect(() => {
    const fetchCVs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/applicants", {
          auth: {
            username: "admin",
            password: "admin123",
          },
        });
        setCvList(response.data);
        setFilteredCVs(response.data);
      } catch (error) {
        console.error("Error fetching CVs:", error);
      }
    };

    fetchCVs();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedCVs((prev) =>
      prev.includes(id) ? prev.filter((cvId) => cvId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCVs(filteredCVs.map((cv) => cv.id));
    } else {
      setSelectedCVs([]);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);
    setFilteredCVs(
      cvList.filter(
        (cv) =>
          `${cv.firstName} ${cv.lastName}`.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" ml={1} mr={1}>
        <h2>Review & Select</h2>
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={handleSearch}
          className="search-bar"
        />
      </Box>
      <Box className="container">
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCVs.length === filteredCVs.length}
              indeterminate={
                selectedCVs.length > 0 && selectedCVs.length < filteredCVs.length
              }
              onChange={handleSelectAll}
              className="checkbox"
            />
          }
          label="Select All"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        />

        <Box className="scrollable">
          {filteredCVs.map((cv) => (
            <Card key={cv.id} className="card" sx={{ backgroundColor: "#f0f2f5" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCVs.includes(cv.id)}
                    onChange={() => handleCheckboxChange(cv.id)}
                    className="checkbox"
                  />
                }
                label=""
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography className="typography">
                  {cv.firstName} {cv.lastName}
                </Typography>
              </CardContent>
              <button
                variant="contained"
                size="small"
                onClick={() =>
                  window.open(
                    `http://localhost:8080/uploads/${cv.cvFilePath.split('/').pop()}`,
                    "_blank"
                  )
                }
                className="view-button"
              >
                View
              </button>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default ReviewComponent;
