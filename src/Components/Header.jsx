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

const Header = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    TellNo: "",
    nic: "",
    Email: "",
    Address: "",
    TrainingStartDate: "",
    TrainingEndDate: "",
    Institute: "",
    LanguagesKnown: "",
    FieldofSpecialization: "",
    Supervisor: "",
    AssignedWork: "",
    TargetDate: "",
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
    console.log("New Intern Data: ", formData);
    setOpenModal(false);
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
                  label="Tell No"
                  variant="standard"
                  fullWidth
                  name="TellNo"
                  value={formData.TellNo}
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
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Home Address"
                  variant="standard"
                  fullWidth
                  name="Address"
                  value={formData.Address}
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
                  name="TrainingStartDate"
                  value={formData.TrainingStartDate}
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
                  name="TrainingEndDate"
                  value={formData.TrainingEndDate}
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
                  name="Institute"
                  value={formData.Institute}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Languages Known"
                  variant="standard"
                  fullWidth
                  name="LanguagesKnown"
                  value={formData.LanguagesKnown}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Field of Specialization"
                  variant="standard"
                  fullWidth
                  name="FieldofSpecialization"
                  value={formData.FieldofSpecialization}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Supervisor"
                  variant="standard"
                  fullWidth
                  name="Supervisor"
                  value={formData.Supervisor}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Assigned Work"
                  variant="standard"
                  fullWidth
                  name="AssignedWork"
                  value={formData.AssignedWork}
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
                  name="TargetDate"
                  value={formData.TargetDate}
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
