import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllInternships = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch internships");
        }
        const data = await response.json();
        setCategories(data.map(job => job.title));
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };
    fetchInternships();
  }, []);

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
            borderRadius: "10px",
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
