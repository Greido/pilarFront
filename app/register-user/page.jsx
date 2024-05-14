"use client";

import Secondtoolbar from "@/src/components/Secondoolbar";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import Box from "@mui/system/Box";
import landing from "../../app/landing.css";
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
      <header>
        <nav className="z-10 w-full absolute">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <a
                  href="#home"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                    <div className="h-6 w-2 bg-primary"></div>
                  </div>
                  <span className="text-2xl font-bold text-white dark:text-black">
                    Registro de economia
                  </span>
                </a>
                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
              ></div>
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
              ></div>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenedor principal del formulario */}
      <Container sx={{ marginTop: 1 }}>
        {/* Grid para organizar el diseño del formulario */}
        <Grid container spacing={2}>
          <Grid item mt={15} xs={4} sm={4} md={4}>
            <Link href="/home-card">
              <Button
                variant="outlined"
                className="bg-[#9333EA] text-white" // Aplica el color de fondo de Tailwind
                style={{ borderColor: "#9333EA", color: "white" }} // Aplica el color del borde
              >
                Volver
              </Button>
            </Link>
          </Grid>
          {/* Grid item que contiene el formulario */}
          <Grid mt={15} item xs={12} sm={6} md={4}>
            <Paper square={false} elevation={8} sx={{}}>
              {" "}
              {/* Contenedor del formulario con sombra */}
              {/* Título del formulario */}
              <Typography pt={5} sx={{ fontWeight: 600, textAlign: "center" }}>
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
                  variant="outlined"
                  sx={{ mt: 5 }}
                  className="bg-[#9333EA] text-white" // Aplica el color de fondo de Tailwind
                  style={{ borderColor: "#9333EA", color: "black" }} // Aplica el color del borde
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
