import { Box } from '@mui/material';
import React from 'react';

const AllInternships = () => {
  const categories = [
    "C#",
    "PM",
    "BA",
    "DevOps",
    "AI",
    "UI/UX & Chatbot",
    "Python",
    "BCMS",
    "PHP",
    "Java",
    "Powerprox",
    "MERN",
    "QA",
    "VA",
    "Network",
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridAutoRows="180px"
      gap="30px"
      sx={{
        overflowY: "auto",
        maxHeight: "84vh",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <h2>{category}</h2>
        </Box>
      ))}
    </Box>
  );
};

export default AllInternships;
