"use client";

import Secondtoolbar from "@/src/components/Secondoolbar";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Box from "@mui/system/Box";
import axios from "axios";
import Link from "next/link";
// Declara un componente de función llamado Registrousuarios
function Registrousuarios() {
  // Declara dos estados locales usando useState()
  const [email, setEmail] = useState(""); // Estado para almacenar el correo electrónico
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para almacenar la contraseña
  const [error, setError] = useState({
    // Estado para el manejo de errores
    error: false, // Bandera para indicar si hay un error
    message: "", // Mensaje de error
  });

  // Función para validar el formato del correo electrónico usando una expresión regular
  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  // Función para manejar el evento de envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario
    if (!emailValidation(email)) {
      // Valida el correo electrónico ingresado
      setError({
        // Si el correo electrónico no es válido, establece el estado de error
        error: true,
        message: "El email no es valido",
      });
      return;
    }

    try {
      const userData = { email: email, username: username, password: password };

      const response = await axios.post(
        "http://localhost:4000/api/register",
        userData
      );

      console.log(response.status); // Imprime la respuesta del servidor en la consola

      if (response.status === 200) {
        alert("Usuario registrado correctamente");
      }
      if (response.status === 202) {
        alert("Correo ya registrado");
      }

      //console.log(response.data); // Imprime la respuesta del servidor en la consola

      setEmail(""); // Restablece el estado de correo electrónico
      setUsername(""); // Restablece el estado de nombre de usuario
      setPassword(""); // Restablece el estado de contraseña
      setError({
        error: false, // Restablece el estado de error
        message: "", // Restablece el mensaje de error
      });
    } catch (error) {} // Manejo de errores

    //console.log(email); // Si el correo electrónico es válido, imprime el correo electrónico en la consola
    setError({
      // Restablece el estado de error
      error: false,
      message: "",
    });
  };

  // Retorna el JSX que representa la estructura del formulario de registro de usuarios
  return (
    <>
      {/* Renderiza el componente Secondtoolbar */}
      <Secondtoolbar />

      {/* Contenedor principal del formulario */}
      <Container sx={{ marginTop: 5 }}>
        {/* Grid para organizar el diseño del formulario */}
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={4}>
            <Link href="/">
              <Button variant="contained" color="error">
                Volver
              </Button>
            </Link>
          </Grid>
          {/* Grid item que contiene el formulario */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              {" "}
              {/* Contenedor del formulario con sombra */}
              {/* Título del formulario */}
              <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
                Registro de usuarios
              </Typography>
              {/* Formulario */}
              <Box component="form" autoComplete="off" sx={{ padding: 5 }}>
                {/* Campo de entrada para el correo electrónico */}
                <TextField
                  label="Email"
                  variant="outlined"
                  id="email"
                  type="email"
                  fullWidth
                  required
                  error={error.error}
                  helperText={error.message}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {/* Campo de entrada para el nombre de usuario */}
                <TextField
                  label="Nombre de usuario"
                  variant="outlined"
                  id="username"
                  type="username"
                  sx={{ mt: 5 }}
                  fullWidth
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />

                {/* Campo de entrada para la contraseña */}
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

                {/* Botón de envío del formulario */}
                <Button
                  onClick={onSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2 }}
                  color="error"
                >
                  Registrarme
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4} md={4}></Grid> {/* Espacio en blanco */}
        </Grid>
      </Container>
    </>
  );
}

export default Registrousuarios; // Exporta el componente Registrousuarios
