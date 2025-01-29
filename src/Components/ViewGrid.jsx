import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

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
  return (
    <Box sx={{ height: 500, width: "100%", backgroundColor: "white", borderRadius: "10px", padding: "20px" }}>
      <DataGrid
        rows={rows}
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
  );
};

export default ViewGrid;
