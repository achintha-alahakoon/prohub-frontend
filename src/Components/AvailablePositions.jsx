import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1450A3",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(JobTitle, TypeOfEmployment, Department, Location) {
  return { JobTitle, TypeOfEmployment, Department, Location };
}

const rows = [
  createData(
    "Software Engineer",
    "Full Time",
    "Information Technology",
    "Colombo"
  ),
  createData(
    "Data Analyst",
    "Part Time",
    "Data Science",
    "Kandy"
  ),
  createData(
    "System Administrator",
    "Full Time",
    "Infrastructure",
    "Galle"
  ),
];

const AvailablePositions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [departmentAnchorEl, setDepartmentAnchorEl] = useState(null);
  const [locationAnchorEl, setLocationAnchorEl] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = () => {
    const filtered = rows.filter((row) =>
      row.JobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
    setPage(0);
  };

  const handleDepartmentFilter = (department) => {
    const filtered = rows.filter((row) => row.Department === department);
    setFilteredRows(filtered);
    setPage(0);
    setDepartmentAnchorEl(null);
  };

  const handleLocationFilter = (location) => {
    const filtered = rows.filter((row) => row.Location === location);
    setFilteredRows(filtered);
    setPage(0);
    setLocationAnchorEl(null);
  };

  const departments = [...new Set(rows.map((row) => row.Department))];
  const locations = [...new Set(rows.map((row) => row.Location))];

  const displayedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <h4 style={{ fontSize: "16px", marginBottom: "4px" }}>
        Beware when applying for jobs online
      </h4>
      <p style={{ marginTop: 0 }}>
        Many large employers are targets of fraudsters. Please note that SLT
        will never ask job applicants for credit card information or to buy
        equipment directly. To ensure job seekers deal directly with SLT, we
        ask that all applications are made directly through our website below.
        If you have any concerns during the process, please <Link href="/contact-us" style={{ color: "#1450A3", textDecoration: "none", fontWeight: "bold" }}>get in touch</Link>.
      </p>
      <h2 style={{ color: "#1450A3", fontSize: "32px", marginBottom: 0, marginTop: "50px" }}>
        Can not find the job you are looking for?
      </h2>
      <p style={{ marginTop: 0 }}>Click below to receive notifications when new jobs are posted</p>

      {/* Search and Filter Bar */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "30px", marginTop: "50px" }}>
        <TextField
          label="Search Job Title"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} style={{ backgroundColor: "#1450A3", color: "white", border: "none" }}>
          Search
        </Button>
        <Button
          variant="outlined"
          onClick={(e) => setDepartmentAnchorEl(e.currentTarget)}
          style={{ marginLeft: "100px", marginRight: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
        >
        Department
        </Button>
        <Menu
          anchorEl={departmentAnchorEl}
          open={Boolean(departmentAnchorEl)}
          onClose={() => setDepartmentAnchorEl(null)}
        >
          {departments.map((dept) => (
            <MenuItem key={dept} onClick={() => handleDepartmentFilter(dept)}>
              {dept}
            </MenuItem>
          ))}
        </Menu>
        <Button
          variant="outlined"
          onClick={(e) => setLocationAnchorEl(e.currentTarget)}
          style={{ backgroundColor: "#4CAF50", color: "white", border: "none" }}
        >
        Location
        </Button>
        <Menu
          anchorEl={locationAnchorEl}
          open={Boolean(locationAnchorEl)}
          onClose={() => setLocationAnchorEl(null)}
        >
          {locations.map((loc) => (
            <MenuItem key={loc} onClick={() => handleLocationFilter(loc)}>
              {loc}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Job Title</StyledTableCell>
              <StyledTableCell align="right">Type of Employment</StyledTableCell>
              <StyledTableCell align="right">Department</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.JobTitle}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.TypeOfEmployment}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Department}</StyledTableCell>
                <StyledTableCell align="right">{row.Location}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default AvailablePositions;
