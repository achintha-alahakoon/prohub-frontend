import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import "../Styles/ReviewComponent.css";

const ReviewComponent = ({ selectedCVs, setSelectedCVs }) => {
  const receivedCVs = [
    { id: 1, name: "Achintha Alahakoon", resumeLink: "/path/to/john_doe_resume.pdf" },
    { id: 2, name: "Kavindu Janojya", resumeLink: "/path/to/jane_smith_resume.pdf" },
    { id: 3, name: "Deemantha Bandara", resumeLink: "/path/to/alice_brown_resume.pdf" },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredCVs, setFilteredCVs] = useState(receivedCVs);

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
      receivedCVs.filter((cv) => cv.name.toLowerCase().includes(searchValue))
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
                <Typography className="typography">{cv.name}</Typography>
              </CardContent>
              <button
                variant="contained"
                size="small"
                onClick={() => window.open(cv.resumeLink, "_blank")}
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
