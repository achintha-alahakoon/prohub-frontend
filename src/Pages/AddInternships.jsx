import React, { useState } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import Swal from "sweetalert2";
import "../Styles/Internship.css";

const AddInternships = () => {
  const [formData, setFormData] = useState({
    createdAt: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    title: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = ["description", "requirements", "location", "salary", "title"];
    const isValid = requiredFields.every((field) => formData[field].trim() !== "");

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill all required fields.",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("admin:admin123"),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add internship");
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Internship added successfully!",
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add internship.",
      });
    }
  };

  return (
    <Box sx={{ margin: "0 auto", backgroundColor: "#fff", padding: "30px", borderRadius: "10px" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField label="Title" variant="standard" fullWidth name="title" value={formData.title} onChange={handleInputChange} required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Salary" variant="standard" fullWidth name="salary" value={formData.salary} onChange={handleInputChange} required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Location" variant="standard" fullWidth name="location" value={formData.location} onChange={handleInputChange} required />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Qualification" variant="standard" fullWidth name="requirements" value={formData.qualification} onChange={handleInputChange} required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" variant="standard" fullWidth name="description" value={formData.internDescription} onChange={handleInputChange} required />
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <button className="add-internship-button" onClick={handleSubmit} color="primary" variant="contained" sx={{ width: "200px" }}>
            ADD INTERNSHIP
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddInternships;
