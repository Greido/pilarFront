"use client";

import { Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Loginempresas() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  console.log(router.pathname); // Imprime la ruta actual
  console.log(router.query);    // Imprime los parámetros de la consulta

  const login = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };

      const response = await axios.post(
        "http://localhost:4000/api/enterprise/login",
        userData
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Inicio de sesión exitoso");
        router.push("/home");
      }
    } catch (error) {
      if (error.response) {
        setError({
          error: true,
          message:
            error.response.data.message || "Error en el inicio de sesión",
        });
      }
    }
  };

  return (
    <>
      <header>
        <nav className="z-10 w-full absolute">
          {/* Tu código del header */}
        </nav>
      </header>

      <Container sx={{ marginTop: 1 }}>
        <Grid container spacing={2}>
          <Grid item mt={15} xs={4} sm={4} md={4}>
            <Link href="/">
              <Button
                variant="outlined"
                className="bg-[#9333EA] text-white"
                style={{ borderColor: "#9333EA", color: "white" }}
              >
                Volver
              </Button>
            </Link>
          </Grid>
          <Grid mt={12} item sm={6} md={4}>
            <Paper square={false} elevation={8} sx={{}}>
              <Typography pt={4} sx={{ fontWeight: 600, textAlign: "center" }}>
                Inicio de sesión para empresas
              </Typography>
              <Box
                component="form"
                autoComplete="off"
                sx={{ padding: 3 }}
                onSubmit={login}
              >
                <TextField
                  label="Correo electrónico"
                  variant="outlined"
                  id="email"
                  type="email"
                  sx={{ mt: 5 }}
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <TextField
                  label="Contraseña"
                  variant="outlined"
                  id="password"
                  type="password"
                  sx={{ mt: 5 }}
                  fullWidth
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 5 }}
                  className="bg-[#9333EA] text-white"
                  style={{ borderColor: "#9333EA", color: "black" }}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4} md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Loginempresas;
