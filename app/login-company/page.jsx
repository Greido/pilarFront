"use client";

import { Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import landing from "../../app/landing.css";

import Box from "@mui/system/Box";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
function Loginempresas() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();

    try {
      const userData = { name, password };

      const response = await axios.post(
        "http://localhost:4000/api/cologin",
        userData
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Inicio de sesión exitoso");
        // Puedes redirigir al usuario a otra página, por ejemplo:
        // router.push('/dashboard');
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
                Incio de sesion para empresas
              </Typography>
              <Box
                component="form"
                autoComplete="off"
                sx={{ padding: 3 }}
                onSubmit={login}
              >
                <TextField
                  label="Nombre de su empresa"
                  variant="outlined"
                  id="username"
                  type="username"
                  sx={{ mt: 5 }}
                  fullWidth
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onClick={login}
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 5 }}
                  className="bg-[#9333EA] text-white"
                  style={{ borderColor: "#9333EA", color: "black" }}
                >
                  Iniciar sesion
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
