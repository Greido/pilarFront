"use client";
import React, { useState } from "react";
import axios from "axios";

function InformacionBasicaForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    localidad: "",
    phone: "",
    email: "",
    educacion: "",
    titulos: "",
    fechaNacimiento: "",
    experienciaLP: "",
    experienciaBD: "",
    experienciaSO: "",
    experienciaHG: "",
    experienciaendesarrollo: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user", formData);
      setResponseMessage("Datos enviados exitosamente!");
    } catch (error) {
      setResponseMessage("Error al enviar los datos.");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-5">Información Básica</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre:</label>
            <input
              value={formData.name}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Ingresar nombre"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">Apellido:</label>
            <input
              value={formData.surname}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              name="surname"
              type="text"
              placeholder="Ingresar apellido"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="localidad">Localidad:</label>
            <input
              value={formData.localidad}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="localidad"
              name="localidad"
              type="text"
              placeholder="Ingresar localidad"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Teléfono:</label>
            <input
              value={formData.phone}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Ingresar su teléfono"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
            <input
              value={formData.email}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Ingresar su email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="educacion">Educación:</label>
            <input
              value={formData.educacion}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="educacion"
              name="educacion"
              type="text"
              placeholder="Ingresar educación"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input
              value={formData.fechaNacimiento}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="text"
              placeholder="Ingresar fecha de nacimiento"
              onChange={handleChange}
              style={{ maxWidth: '750px' }} 
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center my-5">Experiencia</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaLP">Experiencia en lenguaje de programación:</label>
            <select
              value={formData.experienciaLP}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaLP"
              name="experienciaLP"
              onChange={handleChange}
            >
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaBD">Experiencia en base de datos:</label>
            <select
              value={formData.experienciaBD}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaBD"
              name="experienciaBD"
              onChange={handleChange}
            >
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaSO">Experiencia en sistemas operativos:</label>
            <select
              value={formData.experienciaSO}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaSO"
              name="experienciaSO"
              onChange={handleChange}
            >
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaHG">Experiencia en habilidades ágiles:</label>
            <select
              value={formData.experienciaHG}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaHG"
              name="experienciaHG"
              onChange={handleChange}
            >
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaendesarrollo">Experiencia en desarrollo:</label>
            <input
              value={formData.experienciaendesarrollo}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaendesarrollo"
              name="experienciaendesarrollo"
              type="text"
              onChange={handleChange}
              style={{ maxWidth: '750px' }} 
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-900 px-5 py-2 text-white uppercase font-bold"
          >
            Enviar
          </button>
        </div>
        {/* {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>} */}
      </form>
    </div>
  );
}

export default InformacionBasicaForm;
