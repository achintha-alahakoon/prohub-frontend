import React from "react";
import { Box, Container } from "@mui/material";
import Avarageoftraineers from "../Components/Avarageoftraineers";
import "chartjs-adapter-moment";
import "chartjs-adapter-moment/dist/chartjs-adapter-moment";
import AvarageOfFields from "../Components/AvarageOfFields";


const Dashboard = () => {
  return (
    <Box>
      <Container
        className="grid-item"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(, 1fr)",
          gap: 2,
        }}
      >
        <Box sx={{ gridColumn: "span 6", gridRow: "span 3" }}>
          <Avarageoftraineers />
        </Box>

        <Box sx={{ gridColumn: "span 6", gridRow: "span 3" }}>
          <AvarageOfFields /> 
        </Box>
        <Box sx={{ gridColomn: "span 4", gridRow: "span 3" }}>

        </Box>
      </Container>


    </Box>
  );
};

export default Dashboard;
