import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { Box, Typography } from "@mui/material";
    const data = [
        { name: 'Java', value: 5 },
        { name: 'Python', value: 6 },
        { name: 'FireFox', value: 3 },
        { name: 'PHP', value: 2 },
        { name: 'UI/UX', value: 8 },
        { name: 'React', value: 3 },
        { name: 'QA', value: 2 },
        { name: 'PM', value: 2 },
        { name: 'DevOps', value: 1 },
    ];
    const COLORS = [
        "#FF6633", "#FFB399", "#FF33FF", "#00B3E6", 
        "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
        "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", 
        "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
        "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", 
        "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399",
        "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", 
        "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933",
        "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", 
        "#E64D66", "#4DB380", 

    ];

const AvarageOfFields = () => {

    return (
        <Box sx={{columnSpan:1,rowSpan:1, p: 2, boxShadow: 3, borderRadius: 2, bgcolor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
            <Typography variant="h6" gutterBottom>
                Monthly joined trainers by each field
            </Typography>
            
            
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </Box>
      );
    };

export default AvarageOfFields
