import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Cards({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper sx={{ textAlign: "center" }}>
            <Typography>PEPE</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Typography>Pepe</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>pepe</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cards;
