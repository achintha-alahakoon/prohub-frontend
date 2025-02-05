import React from 'react'
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "chartjs-adapter-moment";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Avarageoftraineers = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augu", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Trainers",
            data: [50, 70, 40, 35, 60, 80, 50, 70, 40, 85, 60, 48],
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };
    
      // Chart options
      const options = {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: "New Trainers" },
        },
      };


  return (

    <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
      <Typography variant="h6" gutterBottom>
       Monthly joined trainers
      </Typography>
      <Bar data={data} options={options} />
    </Box>
 
   
  )
}

export default Avarageoftraineers
