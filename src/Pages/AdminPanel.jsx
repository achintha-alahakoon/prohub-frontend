import { Box } from '@mui/material';
import React from 'react';
import View from './View';
import Review from './Review';

const AdminPanel = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="610px"
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
      {/* View Component */}
      <Box
        gridColumn="span 8"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px", 
        }}
      >
        <View />
      </Box>

      {/* Review Component */}
      <Box
        gridColumn="span 4"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          height: "100%",
        }}
      >
        <Review />
      </Box>
    </Box>
  );
};

export default AdminPanel;
