import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "none",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f3f4f6",
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "1px solid #e0e0e0",
    fontSize: 14,
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const columns = [
  { field: "id", headerName: "Emp No", width: 80 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "TellNo", headerName: "Tell No", width: 110, editable: true },
  { field: "nic", headerName: "NIC", width: 120, editable: true },
  { field: "Email", headerName: "Email", width: 200, editable: true },
  { field: "Address", headerName: "Home Address", width: 200, editable: true },
  { field: "TrainingStartDate", headerName: "Training Start Date", width: 160, editable: true },
  { field: "TrainingEndDate", headerName: "Training End Date", width: 150, editable: true },
  { field: "Institute", headerName: "Institute", width: 200, editable: true },
  { field: "LanguagesKnown", headerName: "Languages Known", width: 190, editable: true },
  { field: "FieldofSpecialization", headerName: "Field of Specialization", width: 190, editable: true },
  { field: "Supervisor", headerName: "Supervisor", width: 170, editable: true },
  { field: "AssignedWork", headerName: "Assigned Work", width: 190, editable: true },
  { field: "TargetDate", headerName: "Target Date", width: 150, editable: true },
];

const rows = [
  {
    id: 1,
    name: "Achintha Alahakoon",
    TellNo: "0703212590",
    nic: "200020800163",
    Email: "achintha@gmail.com",
    Address: "Parakaduwa, Eheliyagoda",
    TrainingStartDate: "2024-11-20",
    TrainingEndDate: "2025-05-20",
    Institute: "University of Kelaniya",
    LanguagesKnown: "React, Java, HTML, CSS, JavaScript",
    FieldofSpecialization: "Software Engineering",
    Supervisor: "Mr. Giridaran",
    AssignedWork: "Task 1, Task 2",
    TargetDate: "2024-12-31",
  },
];

export default function AllInterns() {
  return (
    <div className="all-incidents-container">
      <Box sx={{ height: 550, width: "95%", margin: "auto" }}>
        <StyledDataGrid
          rows={rows}
          columns={columns}
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
    </div>
  );
}
