import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
} from "@mui/material";
import Logo from "../assets/Logo.png";
import { BiPlus } from "react-icons/bi";
import Swal from "sweetalert2";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
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

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      fetch("http://localhost:8080/api/interns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Intern added successfully:", data);

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Intern has been added successfully.",
          });

          setOpenModal(false);
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
          console.error("Error adding intern:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add the intern. Please try again.",
          });
        });
    } catch (error) {
      console.error("Error adding intern:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 5,
        mt: 2,
        mb: 2,
      }}
    >
      <img src={Logo} alt="Logo" style={{ width: "180px", height: "70px" }} />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
      >
        All Trainees
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <div
          style={{
            backgroundColor: "#1450A3",
            padding: "11px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <BiPlus style={{ fontSize: "18px", color: "white" }} />
        </div>
      </Box>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "1200px",
            height: "85%",
            maxWidth: "none",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(220, 220, 220, 0.48)",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <DialogTitle>Add New Trainees</DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 1 }}>
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
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Add Trainee
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;
