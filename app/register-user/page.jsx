"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Importa SweetAlert2
import "./login.css"; // Asegúrate de que el archivo CSS esté en el mismo directorio

const Registrousuarios = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const role = "user";

  const register = async (e) => {
    e.preventDefault();

    try {
      const userData = { username, email, password, role };
      const response = await axios.post(
        "http://localhost:4000/api/register",
        userData
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Registro exitoso",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        setError(
          error.response.data.message ||
            "Error en el registro, intentelo de nuevo"
        );
      } else {
        setError("Error en el registro, intentelo de nuevo");
      }
      setShowError(true);

      // Limpia los campos del formulario después de un pequeño retraso
      setTimeout(() => {
        setUsername("");
        setPassword("");
        setShowError(false);
      }, 10000); // Muestra el mensaje por 10 segundos
    }
  };

  return (
    <>
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
          <h2 className="text-3xl font-semibold mb-6">Registrate</h2>
          <form onSubmit={register} className="w-full max-w-md">
            <div className="form-group mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-medium mb-2"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Example name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@exmaple.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button type="submit" className="submit-button">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrousuarios;
