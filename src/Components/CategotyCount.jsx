import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const CategoryCount = () => {
  const categories = [
    { id: 1, name: "C#", count: 12 },
    { id: 2, name: "BA", count: 8 },
    { id: 3, name: "Java", count: 5 },
  ];

  const totalCount = categories.reduce((total, category) => total + category.count, 0);

  return (
    <div style={{ padding: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" component="h2">
          Categories
        </Typography>
        <Typography variant="h6" component="p">
          Total Count: {totalCount}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        flexWrap="wrap"
        justifyContent="start"
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "#f0f2f5",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {category.name}
              </Typography>
              <Typography variant="h5" color="primary">
                {category.count}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CategoryCount;