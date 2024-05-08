"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomToolbar from "@/src/components/Toolbar";
import Link from "next/link";

function HomeCard() {
  const router = useRouter();

  const handleUsuarioClick = () => {
    router.push("/register-user");
  };

  const handleEmpresaClick = () => {
    router.push("/register-company");
  };

  return (
    <>
      <CustomToolbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center" sx={{ marginTop: 5 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Link href="/landing">
              <Button variant="contained" color="error">
                Volver
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <Paper sx={{ padding: 10 }} elevation={8}>
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#344767",
                    textAlign: "center",
                    marginBottom: 2,
                  }}
                >
                  Registro Economía del Conocimiento
                </Typography>

                <Typography sx={{ padding: 2 }}>
                  Llena el formulario, completa el registro y comenzarás a vivir tu
                  futuro. Nuestro objetivo es incrementar tus oportunidades
                  laborales, acompañarte con capacitaciones 100% gratis y hacer tus
                  logros y habilidades visibles en bootcamps o búsquedas laborales
                  en las empresas líderes de base tecnológica asociadas al
                  PoloTecnológico La Rioja.
                </Typography>

                {/* btn empresa */}
                <Button
                  sx={{ bgcolor: "#8B322C", marginTop: 3 }}
                  variant="contained"
                  color="error"
                  onClick={handleEmpresaClick}
                >
                  Registrarme como empresa
                </Button>

                {/* btn personas comunes */}
                <Button
                  sx={{ bgcolor: "#8B322C", marginTop: 3 }}
                  variant="contained"
                  color="error"
                  onClick={handleUsuarioClick}
                >
                  Registrarme como usuario
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomeCard;
