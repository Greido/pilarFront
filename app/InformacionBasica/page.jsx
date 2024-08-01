"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
function informacionBasicaForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    localidad: "",
    phone: "",
    email: "",
    educacion: "",
    fechaNacimiento: "",
    experienciaLP: [{ nombreLP: "", nivel: "Básico" }],
    experienciaBD: [{ nombreBD: "", nivel: "Básico" }],
    experienciaSO: [{ nombreSO: "", nivel: "Básico" }],
    experienciaHG: [{ nombreHG: "", nivel: "Básico" }],
    experienciaendesarrollo: "",
    conocimientoTec: "",
    experienciaEnAdministracionyGestiondeSistemas: "",
    debilidadTEC: "",
  });

  const [options, setOptions] = useState({
    experienciaLP: [
      "Java",
      "C#",
      "VisualBasic",
      "NET",
      "JavaScript",
      "HTML/CSS",
      "C/C++",
      "Python",
      "PHP",
    ],
    experienciaBD: ["SQL Server", "PostgreSQL", "MongoDB", "Oracle", "MySQL"],
    experienciaSO: ["Linux", "iOS", "Windows Server", "Android"],
    experienciaHG: [
      "Sistema de Información Geográfico",
      "Computación en la Nube",
      "Project Management Institute",
      "Repositorio en la Nube",
      "Metodologías Ágiles",
    ],
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/options");
        setOptions(response.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const [id, setId] = useState(null);
const [token, setToken] = useState(null);


const getToken = () => {
  return Cookies.get("token");
};

// Esta función se puede ajustar para decodificar el token y obtener el ID del usuario
const decodeToken = (token) => {
  // Lógica para decodificar el token y obtener el ID
  // Por ejemplo, si el token es un JWT, puedes decodificarlo
  // Nota: Debes tener en cuenta la seguridad y validación del token
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.id; // Asumiendo que el ID está en el payload
};

useEffect(() => {
  const token = getToken();
  if (token) {
    setToken(token);
    const userId = decodeToken(token);
    if (userId) {
      setId(userId);
    }
  }
}, []);

useEffect(() => {
  if (id && token) {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/getoneBD/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("La respuesta no es un JSON válido");
        }

        const data = await response.json();
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: data.name,
          surname: data.surname,
          localidad: data.localidad,
          phone: data.phone,
          email: data.email,
          educacion: data.educacion,
          fechaNacimiento: data.fechaNacimiento,
          experienciaLP: data.experienciaLP,
          experienciaBD: data.experienciaBD,
          // experienciaSO: data.experienciaSO,
          experienciaHG: data.experienciaHG,
          experienciaendesarrollo: data.experienciaendesarrollo,
          conocimientoTec: data.conocimientoTec,
          experienciaEnAdministracionyGestiondeSistemas: data.experienciaEnAdministracionyGestiondeSistemas,
          debilidadTEC: data.debilidadTEC,
          // Otros campos si es necesario
          // Otros campos si es necesario
        }));
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }
}, [id, token]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], { nombreLP: "", nivel: "Básico" }],
    });
  };

  const handleRemoveField = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    const updatedFormData = {
      ...formData,
      fechaNacimiento: formatDate(formData.fechaNacimiento),
      experienciaLP: formData.experienciaLP.map((exp) => ({
        nombreLP: exp.nombreLP || "",
        nivel: exp.nivel || "Básico",
      })),
      experienciaBD: formData.experienciaBD.map((exp) => ({
        nombreBD: exp.nombreBD || "",
        nivel: exp.nivel || "Básico",
      })),
      experienciaSO: formData.experienciaSO.map((exp) => ({
        nombreSO: exp.nombreSO || "",
        nivel: exp.nivel || "Básico",
      })),
      experienciaHG: formData.experienciaHG.map((exp) => ({
        nombreHG: exp.nombreHG || "",
        nivel: exp.nivel || "Básico",
      })),
      conocimientoTec: formData.conocimientoTec || "",
      experienciaendesarrollo: formData.experienciaendesarrollo || "",
      experienciaEnAdministracionyGestiondeSistemas:
        formData.experienciaEnAdministracionyGestiondeSistemas || "",
      debilidadTEC: formData.debilidadTEC || "",
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/createBasicData",
        updatedFormData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setResponseMessage("Datos básicos creados y asociados exitosamente!");
    } catch (error) {
      console.error(
        "Error en el envío de datos:",
        error.response ? error.response.data : error
      );
      if (error.response) {
        setResponseMessage(
          `Error al crear datos básicos: ${error.response.data.error}`
        );
      } else {
        setResponseMessage("Error al crear datos básicos.");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-2xl font-bold mb-4">
          Formulario de Experiencia en TI
        </h1>

        {/* Datos Personales */}
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre:
            </label>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="surname"
            >
              Apellido:
            </label>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="localidad"
            >
              Localidad:
            </label>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Teléfono:
            </label>
            <input
              value={formData.phone}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Ingresar teléfono"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              value={formData.email}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Ingresar email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="educacion"
            >
              Educación:
            </label>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fechaNacimiento"
            >
              Fecha de Nacimiento (dd/mm/yyyy):
            </label>
            <input
              value={formData.fechaNacimiento}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="text"
              placeholder="Ingresar fecha de nacimiento"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Experiencia en Lenguajes de Programación */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaLP"
          >
            Experiencia en Lenguajes de Programación:
          </label>
          {formData.experienciaLP.map((exp, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="nombreLP"
                value={exp.nombreLP}
                onChange={(e) => handleChange(e, index, "experienciaLP")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccionar lenguaje</option>
                {options.experienciaLP.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="nivel"
                value={exp.nivel}
                onChange={(e) => handleChange(e, index, "experienciaLP")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                onClick={() => handleRemoveField("experienciaLP", index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("experienciaLP")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Agregar Lenguaje
          </button>
        </div>

        {/* Experiencia en Bases de Datos */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaBD"
          >
            Experiencia en Bases de Datos:
          </label>
          {formData.experienciaBD.map((exp, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="nombreBD"
                value={exp.nombreBD}
                onChange={(e) => handleChange(e, index, "experienciaBD")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccionar base de datos</option>
                {options.experienciaBD.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="nivel"
                value={exp.nivel}
                onChange={(e) => handleChange(e, index, "experienciaBD")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                onClick={() => handleRemoveField("experienciaBD", index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("experienciaBD")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Agregar Base de Datos
          </button>
        </div>

        {/* Experiencia en Sistemas Operativos */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaSO"
          >
            Experiencia en Sistemas Operativos:
          </label>
          {formData.experienciaSO.map((exp, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="nombreSO"
                value={exp.nombreSO}
                onChange={(e) => handleChange(e, index, "experienciaSO")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccionar sistema operativo</option>
                {options.experienciaSO.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="nivel"
                value={exp.nivel}
                onChange={(e) => handleChange(e, index, "experienciaSO")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                onClick={() => handleRemoveField("experienciaSO", index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("experienciaSO")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Agregar Sistema Operativo
          </button>
        </div>

        {/* Experiencia en Herramientas de Gestión */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaHG"
          >
            Experiencia en Herramientas de Gestión:
          </label>
          {formData.experienciaHG.map((exp, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="nombreHG"
                value={exp.nombreHG}
                onChange={(e) => handleChange(e, index, "experienciaHG")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccionar herramienta</option>
                {options.experienciaHG.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="nivel"
                value={exp.nivel}
                onChange={(e) => handleChange(e, index, "experienciaHG")}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                onClick={() => handleRemoveField("experienciaHG", index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField("experienciaHG")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Agregar Herramienta
          </button>
        </div>

        {/* Experiencia en Desarrollo */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaendesarrollo"
          >
            Experiencia en Desarrollo:
          </label>
          <textarea
            value={formData.experienciaendesarrollo}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experienciaendesarrollo"
            name="experienciaendesarrollo"
            placeholder="Ingresar experiencia en desarrollo"
            onChange={handleChange}
          />
        </div>

        {/* Conocimiento Técnico */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="conocimientoTec"
          >
            Conocimiento Técnico:
          </label>
          <textarea
            value={formData.conocimientoTec}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="conocimientoTec"
            name="conocimientoTec"
            placeholder="Ingresar conocimiento técnico"
            onChange={handleChange}
          />
        </div>

        {/* Experiencia en Administración y Gestión de Sistemas */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experienciaEnAdministracionyGestiondeSistemas"
          >
            Experiencia en Administración y Gestión de Sistemas:
          </label>
          <textarea
            value={formData.experienciaEnAdministracionyGestiondeSistemas}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experienciaEnAdministracionyGestiondeSistemas"
            name="experienciaEnAdministracionyGestiondeSistemas"
            placeholder="Ingresar experiencia en administración y gestión de sistemas"
            onChange={handleChange}
          />
        </div>

        {/* Debilidad Técnica */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="debilidadTEC"
          >
            Debilidad Técnica:
          </label>
          <textarea
            value={formData.debilidadTEC}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="debilidadTEC"
            name="debilidadTEC"
            placeholder="Ingresar debilidad técnica"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default informacionBasicaForm;
