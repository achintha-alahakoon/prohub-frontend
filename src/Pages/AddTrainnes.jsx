import React, { useState } from "react";
import { TextField, Grid, Box, Button } from "@mui/material";
import Swal from "sweetalert2"; // Ensure you have installed sweetalert2: `npm install sweetalert2`

const AddTrainees = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    nic: "",
    email: "",
    address: "",
    startDate: "",
    endDate: "",
    institute: "",
    languagesKnown: "",
    field: "",
    supervisor: "",
    assignedWork: "",
    targetDate: "",
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
      "name",
      "mobile",
      "nic",
      "email",
      "address",
      "startDate",
      "endDate",
      "institute",
      "field",
      "supervisor",
      "assignedWork",
      "targetDate",
    ];

    const isValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill all required fields.",
      });
      return;
    }

    try {
      fetch("http://localhost:8080/api/trainees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Trainee added successfully:", data);

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "The trainee has been added successfully.",
          });

          setFormData({
            name: "",
            mobile: "",
            nic: "",
            email: "",
            address: "",
            startDate: "",
            endDate: "",
            institute: "",
            languagesKnown: "",
            field: "",
            supervisor: "",
            assignedWork: "",
            targetDate: "",
          });
        })
        .catch((error) => {
          console.error("Error adding trainee:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add the trainee. Please try again.",
          });
        });
    } catch (error) {
      console.error("Error adding trainee:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Box sx={{ margin: "0 auto", backgroundColor: "#fff", padding: "30px", borderRadius: "10px" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile"
            variant="standard"
            fullWidth
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="NIC"
            variant="standard"
            fullWidth
            name="nic"
            value={formData.nic}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Home Address"
            variant="standard"
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Training Start Date"
            type="date"
            variant="standard"
            fullWidth
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Training End Date"
            type="date"
            variant="standard"
            fullWidth
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Institute"
            variant="standard"
            fullWidth
            name="institute"
            value={formData.institute}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Languages Known"
            variant="standard"
            fullWidth
            name="languagesKnown"
            value={formData.languagesKnown}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Field of Specialization"
            variant="standard"
            fullWidth
            name="field"
            value={formData.field}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Supervisor"
            variant="standard"
            fullWidth
            name="supervisor"
            value={formData.supervisor}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Assigned Work"
            variant="standard"
            fullWidth
            name="assignedWork"
            value={formData.assignedWork}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Target Date"
            type="date"
            variant="standard"
            fullWidth
            name="targetDate"
            value={formData.targetDate}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            sx={{ width: "200px" }}
          >
            Add Trainee
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTrainees;
