"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import Box from "@mui/material/Box";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Loginempresas() {
  const router = useRouter();
  const [email, setEmail] = useState("");
=======
import axios from "axios";
import { useRouter } from "next/navigation";
import "./login.css"; // Asegúrate de que el archivo CSS esté en el mismo directorio

const Loginusuarios = () => {
  const [name, setName] = useState("");
>>>>>>> ee0843e7eaa8a47b2b6c016a3fffb84333d646eb
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  console.log(router.pathname); // Imprime la ruta actual
  console.log(router.query);    // Imprime los parámetros de la consulta

  const login = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const userData = { email, password };
=======
      const userData = { name, password }; // Cambia 'email' por 'name'
>>>>>>> ee0843e7eaa8a47b2b6c016a3fffb84333d646eb

      const response = await axios.post(
        "http://localhost:4000/api/enterprise/login",
        userData
      );

      if (response.status === 200) {
        console.log("Inicio de sesión exitoso");
<<<<<<< HEAD
        router.push("/home");
=======
        // Puedes redirigir al usuario a otra página, por ejemplo:
        // router.push('/dashboard');
        router.push("/landing");
>>>>>>> ee0843e7eaa8a47b2b6c016a3fffb84333d646eb
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Error en el inicio de sesión");
      } else {
        setError("Error en el inicio de sesión");
      }
      setShowError(true);

      // Limpia los campos del formulario después de un pequeño retraso
      setTimeout(() => {
        setName("");
        setPassword("");
        setShowError(false);
      }, 10000); // Muestra el mensaje por 10 segundos
    }
  };

  return (
    <>
<<<<<<< HEAD
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
=======
      <div className="page-header" loading="lazy"></div>
      <div className="container mx-auto p-8 max-w-5xl">
        {showError && (
          <div className="error-message text-red-600 bg-red-200 p-4 rounded mb-4">
            {error}
          </div>
        )}
        <div className="card bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
          <img
            src="/img/Logo_Polo.png"
            alt="Your Company"
            className="h-96 w-auto mb-12" // Ajusta el tamaño de la imagen aquí
          />
          <h2 className="text-3xl font-semibold mb-6">Inicia Sesion</h2>
          <form onSubmit={login} className="w-full max-w-md">
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Nombre de empresa
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <a href="#" className="forgot-password-link">
                Olvidaste la contraseña?
              </a>
            </div>
            <button type="submit" className="submit-button">
              Iniciar sesión
            </button>
          </form>
          <p className="footer-text mt-6 text-center text-gray-600">
            No sos miembro{" "}
            <a href="/home-card" className="text-teal-600 hover:underline">
              Registrarse
            </a>
          </p>
        </div>
      </div>
>>>>>>> ee0843e7eaa8a47b2b6c016a3fffb84333d646eb
    </>
  );
};

export default Loginusuarios;
