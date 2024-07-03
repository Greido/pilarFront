"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import './login.css'; // Asegúrate de que el archivo CSS esté en el mismo directorio

const Loginusuarios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };

      const response = await axios.post(
        "http://localhost:4000/api/login",
        userData
      );

      if (response.status === 200) {
        console.log("Inicio de sesión exitoso");
        // Redirige al usuario a la página de destino
        router.push("/landing");
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
        setEmail("");
        setPassword("");
        setShowError(false);
      }, 10000); // Muestra el mensaje por 3 segundos
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
  <div className="card bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
    <img
      src="/img/Logo_Polo.png"
      alt="Your Company"
      className="h-96 w-auto mb-12" // Ajusta el tamaño de la imagen aquí
    />
    <h2 className="text-3xl font-semibold mb-6">Inicia Sesion</h2>
    <form onSubmit={login} className="w-full max-w-md">
      <div className="form-group mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="form-group mb-6">
        <label htmlFor="password" className="block text-lg font-medium mb-2">Contraseña</label>
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
        <a href="#" className="forgot-password-link">Olvidaste la contraseña?</a>
      </div>
      <button
  type="submit"
  className="submit-button"
>
  Iniciar sesión
</button>
    </form>
    <p className="footer-text mt-6 text-center text-gray-600">
      No sos miembro{' '}
      <a href="/home-card" className="text-teal-600 hover:underline">Registrarse</a>
    </p>
  </div>
</div>



    </>
  );
};

export default Loginusuarios;
