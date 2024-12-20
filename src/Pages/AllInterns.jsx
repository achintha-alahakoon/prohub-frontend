import React, { useState } from "react";
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

const getColumns = (handleEditClick) => [
  { field: "id", headerName: "Trainee_ID", width: 95 },
  { field: "name", headerName: "Name", width: 180, editable: false },
  {
    field: "contactDetails",
    headerName: "Mobile / Email / Address",
    width: 240,
    editable: false,
    renderCell: (params) => (
      <div style={{ lineHeight: 1.6 }}>
        <div>{params.row.mobile}</div>
        <div>{params.row.email}</div>
        <div>{params.row.address}</div>
      </div>
    ),
  },
  { field: "nic", headerName: "NIC", width: 140, editable: false },
  {
    field: "trainingEndDate",
    headerName: "Training Ends",
    width: 130,
    editable: false,
  },
  { field: "institute", headerName: "Institute", width: 207, editable: false },
  {
    field: "fieldofSpecialization",
    headerName: "Field of Specialization",
    width: 200,
    editable: false,
  },
  { field: "supervisor", headerName: "Supervisor", width: 160, editable: false },
  {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "10px" }}>
        <IconButton
          aria-label="edit"
          style={{ color: "green" }}
          onClick={() => handleEditClick(params.row)}
        >
          <EditIcon style={{ width: 17, height: 17 }} />
        </IconButton>
        <IconButton aria-label="delete" style={{ color: "red" }}>
          <DeleteIcon style={{ width: 17, height: 17 }} />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Achintha Alahakoon",
    mobile: "0703212590",
    nic: "200020800163",
    email: "achintha@gmail.com",
    address: "Parakaduwa, Eheliyagoda",
    trainingStartDate: "2023-05-20",
    trainingEndDate: "2025-05-20",
    institute: "University of Kelaniya",
    languagesKnown: "Java, Python, C, C++",
    fieldofSpecialization: "Software Engineering",
    supervisor: "Mr. Giridaran",
    assignedWork: "Web Development",
    targetDate: "2025-05-20",
  },
];

const AllInterns = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEditClick = (row) => {
    setEditData(row);
    setIsEditing(true);
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
          rows={rows}
          columns={getColumns(handleEditClick)}
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
            "& .MuiDialog-paper": { width: "1200px", height: "85%", maxWidth: "none" },
          }}
        >
          <DialogTitle>Update Intern Details</DialogTitle>
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
                  name="trainingStartDate"
                  value={editData.trainingStartDate}
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
                  name="trainingEndDate"
                  value={editData.trainingEndDate}
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
                  value={editData.fieldofSpecialization}
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
