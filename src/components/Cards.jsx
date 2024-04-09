import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Cards({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Paper elevation={12}>
        <Typography>Hello</Typography>
      </Paper>
    </Box>
  );
}

export default Cards;
