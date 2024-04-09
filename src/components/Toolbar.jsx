import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function CustomToolbar({ children }) {
  return (
    <Box flex={{ grow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ff0000" }}>
        <Toolbar sx={{ margin: 0 }}>
          <Typography sx={{ fontWeight: 600 }}>Polo Tecnologico </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
