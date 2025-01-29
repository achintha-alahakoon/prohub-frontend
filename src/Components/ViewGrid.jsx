import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField } from "@mui/material";

const getColumns = () => [
  { field: "id", headerName: "ID", width: 95 },
  { field: "name", headerName: "Name", width: 170 },
  {
    field: "contactDetails",
    headerName: "Mobile / Email / Address",
    width: 200,
    renderCell: (params) => (
      <div style={{ lineHeight: 1.6 }}>
        <div>{params.row.mobile}</div>
        <div>{params.row.email}</div>
        <div>{params.row.address}</div>
      </div>
    ),
  },
  { field: "resume", headerName: "Resume", width: 140 },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      const getStatusColor = (status) => {
        switch (status) {
          case "Pending":
            return "#FFC107";
          case "Accepted":
            return "green";
          case "Rejected":
            return "red";
          default:
            return "gray";
        }
      };

      return (
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: getStatusColor(params.row.status),
            color: "white",
            "&:hover": {
              backgroundColor: getStatusColor(params.row.status),
              opacity: 0.8,
            },
          }}
        >
          {params.row.status}
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Achintha Alahakoon",
    mobile: "0703212590",
    email: "achintha@gmail.com",
    address: "Eheliyagoda",
    resume: "View Resume",
    status: "Pending",
  },
  {
    id: 2,
    name: "Kavindu Janojya",
    mobile: "0703212590",
    email: "kavindu@gmail.com",
    address: "Mathara",
    resume: "View Resume",
    status: "Accepted",
  },
  {
    id: 3,
    name: "Deemantha Bandara",
    mobile: "0703212590",
    email: "deemantha@gmail.com",
    address: "Kandy",
    resume: "View Resume",
    status: "Rejected",
  },
];

const ViewGrid = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);

    const filtered = rows.filter((row) =>
      row.name.toLowerCase().includes(searchValue)
    );
    setFilteredRows(filtered);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <h2>View Applications</h2>
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={handleSearch}
          sx={{ width: "250px" }}
        />
      </Box>
      <Box
        sx={{
          height: 500,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={getColumns()}
          getRowHeight={() => 75}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
        />
      </Box>
    </div>
  );
};

export default ViewGrid;
