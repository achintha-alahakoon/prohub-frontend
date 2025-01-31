import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import axios from "axios";

const getColumns = () => [
  { field: "id", headerName: "ID", width: 95 },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    renderCell: (params) => (
      <div style={{ lineHeight: 1.6 }}>
        {params.row.firstName} {params.row.lastName}
      </div>
    ),
  },
  {
    field: "contactDetails",
    headerName: "Mobile / Email",
    width: 200,
    renderCell: (params) => (
      <div style={{ lineHeight: 1.6 }}>
        <div>{params.row.phone}</div>
        <div>{params.row.confirmEmail}</div>
        <div>{params.row.placeOfResidence}</div>
      </div>
    ),
  },
  { field: "uploadedAt", headerName: "Uploaded At", width: 180 },
];

const ViewGrid = () => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/applicants", {
          headers: {
            Authorization: "Basic " + btoa("admin:admin123"),
          },
        });
        setRows(response.data);
        setFilteredRows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);
    
    const filtered = rows.filter((row) => {
      const fullName = `${row.firstName} ${row.lastName}`.toLowerCase();
      return fullName.includes(searchValue);
    });
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
          getRowHeight={() => 70}
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
