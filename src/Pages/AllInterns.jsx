import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const getColumns = (handleEditClick, handleDeleteClick) => [
  { field: "id", headerName: "Trainee_ID", width: 95 },
  { field: "name", headerName: "Name", width: 180 },
  {
    field: "contactDetails",
    headerName: "Mobile / Email / Address",
    width: 240,
    renderCell: (params) => (
      <div style={{ lineHeight: 1.6 }}>
        <div>{params.row.mobile}</div>
        <div>{params.row.email}</div>
        <div>{params.row.address}</div>
      </div>
    ),
  },
  { field: "nic", headerName: "NIC", width: 140 },
  { field: "endDate", headerName: "Training Ends", width: 130 },
  { field: "institute", headerName: "Institute", width: 207 },
  {
    field: "field",
    headerName: "Field of Specialization",
    width: 200,
  },
  { field: "supervisor", headerName: "Supervisor", width: 160 },
  {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          gap: "10px",
        }}
      >
        <IconButton
          aria-label="edit"
          style={{ color: "green" }}
          onClick={() => handleEditClick(params.row)}
        >
          <EditIcon style={{ width: 17, height: 17 }} />
        </IconButton>
        <IconButton aria-label="delete" style={{ color: "red" }}
        onClick={() => handleDeleteClick(params.row)}>
          <DeleteIcon style={{ width: 17, height: 17 }} />
        </IconButton>
      </div>
    ),
  },
];

const AllInterns = () => {
  const [interns, setInterns] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/interns");
        const data = await response.json();
        setInterns(data);
      } catch (error) {
        console.error("Error fetching interns:", error);
      }
    };

    fetchInterns();

    const interval = setInterval(fetchInterns, 1000);
    return () => clearInterval(interval);

  }, []);

  const handleEditClick = (row) => {
    setEditData(row);
    setIsEditing(true);
  };

  const handleDeleteClick = async (row) => {
    const confirmation = window.confirm(`Are you sure you want to delete the intern with ID ${row.id}?`);
    if (!confirmation) return;
  
    try {
      const response = await fetch(`http://localhost:8080/api/interns/${row.id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // If deletion is successful, remove the intern from the state
        setInterns((prevInterns) => prevInterns.filter((intern) => intern.id !== row.id));
        alert("Intern deleted successfully.");
      } else {
        alert("Failed to delete intern.");
      }
    } catch (error) {
      console.error("Error deleting intern:", error);
      alert("An error occurred while trying to delete the intern.");
    }
  };
  

  const handleClose = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    console.log("Updated Data: ", editData);
    handleClose();
  };

  return (
    <div className="all-interns-container">
      <Box sx={{ height: 550, width: "95%", margin: "auto" }}>
        <DataGrid
          rows={interns}
          columns={getColumns(handleEditClick, handleDeleteClick)}
          getRowHeight={() => 75}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Box>

      {isEditing && (
        <Dialog
          open={isEditing}
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
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Update Intern Details
            <Button
              variant="contained"
              sx={{
                backgroundColor: editData.status === "true" ? "green" : "red",
                color: "white",
                cursor: "default",
                outline: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: editData.status === "true" ? "green" : "red",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              {editData.status === "true" ? "Active" : "Not Active"}
            </Button>
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  variant="standard"
                  fullWidth
                  name="name"
                  value={editData.name}
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
                  value={editData.mobile}
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
                  value={editData.nic}
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
                  value={editData.email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  variant="standard"
                  fullWidth
                  name="address"
                  value={editData.address}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Training Start Date"
                  variant="standard"
                  fullWidth
                  type="date"
                  name="startDate"
                  value={editData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Training End Date"
                  variant="standard"
                  fullWidth
                  type="date"
                  name="endDate"
                  value={editData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Institute"
                  variant="standard"
                  fullWidth
                  name="institute"
                  value={editData.institute}
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
                  value={editData.languagesKnown}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Field of Specialization"
                  variant="standard"
                  fullWidth
                  name="fieldofSpecialization"
                  value={editData.field}
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
                  value={editData.supervisor}
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
                  value={editData.assignedWork}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Target Date"
                  variant="standard"
                  fullWidth
                  type="date"
                  name="targetDate"
                  value={editData.targetDate}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary" variant="contained">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default AllInterns;
