import React from "react";
import { Box, Button, Typography, Card, CardContent, Checkbox, FormControlLabel } from "@mui/material";
import "../Styles/ReviewComponent.css";

const ReviewComponent = ({ selectedCVs, setSelectedCVs }) => {
  const receivedCVs = [
    { id: 1, name: "Achintha Alahakoon", resumeLink: "/path/to/john_doe_resume.pdf" },
    { id: 2, name: "Kavindu Janojya", resumeLink: "/path/to/jane_smith_resume.pdf" },
    { id: 3, name: "Deemantha Bandara", resumeLink: "/path/to/alice_brown_resume.pdf" },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedCVs((prev) =>
      prev.includes(id) ? prev.filter((cvId) => cvId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCVs(receivedCVs.map((cv) => cv.id));
    } else {
      setSelectedCVs([]);
    }
  };

  return (
    <Box className="container">
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedCVs.length === receivedCVs.length}
            indeterminate={
              selectedCVs.length > 0 && selectedCVs.length < receivedCVs.length
            }
            onChange={handleSelectAll}
            className="checkbox"
          />
        }
        label="Select All"
        sx={{ fontSize: "14px", fontWeight: "bold" }}
      />

      <Box className="scrollable">
        {receivedCVs.map((cv) => (
          <Card key={cv.id} className="card">
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
            <Button
              variant="contained"
              size="small"
              onClick={() => window.open(cv.resumeLink, "_blank")}
              className="view-button"
            >
              View
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewComponent;
