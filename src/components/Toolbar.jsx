import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function CustomToolbar({ children }) {
  return (
    <Box flex={{ grow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "	#D32F2F" }}>
        <Toolbar sx={{ margin: 0, textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: 600, color: "white", flexGrow: 1, fontSize: 30 }}
          >
            Polo Tecnologico{" "}
          </Typography>
          <Button sx={{ bgcolor: "#8B322C" }} variant="contained">
            Iniciar Sesion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
