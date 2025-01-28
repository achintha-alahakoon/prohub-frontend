import React, { useState } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import Swal from "sweetalert2";
import "../Styles/Internship.css";

const AddInternships = () => {

  const [formData, setFormData] = useState({
      createdAt: "",
      internDescription: "",
      qualification: "",
      location: "",
      duration: "",
      title: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = () => {
      const requiredFields = [
        "internDescription",
        "qualification",
        "location",
        "duration",
        "title",
      ];
  
      const isValid = requiredFields.every((field) => formData[field].trim() !== "");
  
      if (!isValid) {
        Swal.fire({
          icon: "error",
          title: "Missing Information",
          text: "Please fill all required fields.",
        });
        return;
      }
      console.log(formData);
    }

  return (
    <Box sx={{ margin: "0 auto", backgroundColor: "#fff", padding: "30px", borderRadius: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Title"
                variant="standard"
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Duration"
                variant="standard"
                fullWidth
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Location"
                variant="standard"
                fullWidth
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Qualification"
                variant="standard"
                fullWidth
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="standard"
                fullWidth
                name="internDescription"
                value={formData.internDescription}
                onChange={handleInputChange}
                required
              />
            </Grid>
          
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
              <button
              className="add-internship-button"
                onClick={handleSubmit}
                color="primary"
                variant="contained"
                sx={{ width: "200px" }}
              >
                ADD INTERNSHIP
              </button>
            </Grid>
          </Grid>
        </Box>
  )
}

export default AddInternships
