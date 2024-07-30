"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function InformacionBasicaForm() {
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
  const [perfil, setPerfil] = useState({});

  console.log(perfil);

  const [responseMessage, setResponseMessage] = useState("");
  const [options, setOptions] = useState({
    experienciaLP: ['Java', 'C#', 'VisualBasic', 'NET', 'JavaScript', 'HTML/CSS', 'C/C++', 'Python', 'PHP'],
    experienciaBD: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Oracle', 'MySQL'],
    experienciaSO: ['Linux', 'iOS', 'Windows Server', 'Android'],
    experienciaHG: ['Sistema de Información Geográfico', 'Computación en la Nube', 'Project Management Institute', 'Repositorio en la Nube', 'Metodologías Ágiles'],
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/options");
        setOptions(response.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };
    fetchOptions();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/getoneBD/66a3bf415cbaa940f537531f');
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = response.data;
        // Asegúrate de que response.data contiene los datos correctos
        console.log('Fetched data:', data);
        // Aquí puedes actualizar el estado con los datos obtenidos
        // setPerfil(data); // Ejemplo: si los datos van en perfil
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleChange = (e, index = null, field = null) => {
    const { name, value } = e.target;
    if (index !== null && field !== null) {
      const updatedArray = formData[field].map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      const [day, month, year] = dateString.split('/');
      return new Date(`${year}-${month}-${day}`);
    };

    const updatedFormData = {
      ...formData,
      fechaNacimiento: formatDate(formData.fechaNacimiento),
      experienciaLP: formData.experienciaLP.map(exp => ({
        nombreLP: exp.nombreLP || '',
        nivel: exp.nivel || 'Básico'
      })),
      experienciaBD: formData.experienciaBD.map(exp => ({
        nombreBD: exp.nombreBD || '',
        nivel: exp.nivel || 'Básico'
      })),
      experienciaSO: formData.experienciaSO.map(exp => ({
        nombreSO: exp.nombreSO || '',
        nivel: exp.nivel || 'Básico'
      })),
      experienciaHG: formData.experienciaHG.map(exp => ({
        nombreHG: exp.nombreHG || '',
        nivel: exp.nivel || 'Básico'
      })),
      conocimientoTec: formData.conocimientoTec || '',
      experienciaendesarrollo: formData.experienciaendesarrollo || '',
      experienciaEnAdministracionyGestiondeSistemas: formData.experienciaEnAdministracionyGestiondeSistemas || '',
      debilidadTEC: formData.debilidadTEC || '',
    };

    try {
      const response = await axios.post("http://localhost:4000/api/createBasicData", updatedFormData,  {
        withCredentials: true,
      });
      console.log(response.data);
      setResponseMessage("Datos básicos creados y asociados exitosamente!");
    } catch (error) {
      console.error('Error en el envío de datos:', error.response ? error.response.data : error);
      if (error.response) {
        setResponseMessage(`Error al crear datos básicos: ${error.response.data.error}`);
      } else {
        setResponseMessage("Error al crear datos básicos.");
      }
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-5">Información Básica</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {/* Campos de texto */}
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
              placeholder="Ingresar teléfono"
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
              placeholder="Ingresar email"
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <input
              value={formData.fechaNacimiento}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="text"
              placeholder="Ingresar fecha de nacimiento (DD/MM/YYYY)"
              onChange={handleChange}
            />
          </div>
          {/* Repetible de experiencia en lenguajes de programación */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experiencia en Lenguajes de Programación:</label>
            {formData.experienciaLP.map((exp, index) => (
              <div key={index} className="flex items-center mb-2">
                <select
                  name="nombreLP"
                  value={exp.nombreLP}
                  onChange={(e) => handleChange(e, index, 'experienciaLP')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-l leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleccionar Lenguaje</option>
                  {options.experienciaLP.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <select
                  name="nivel"
                  value={exp.nivel}
                  onChange={(e) => handleChange(e, index, 'experienciaLP')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-r leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveField('experienciaLP', index)}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField('experienciaLP')}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Añadir Lenguaje
            </button>
          </div>

          {/* Repetible de experiencia en bases de datos */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experiencia en Bases de Datos:</label>
            {formData.experienciaBD.map((exp, index) => (
              <div key={index} className="flex items-center mb-2">
                <select
                  name="nombreBD"
                  value={exp.nombreBD}
                  onChange={(e) => handleChange(e, index, 'experienciaBD')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-l leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleccionar Base de Datos</option>
                  {options.experienciaBD.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <select
                  name="nivel"
                  value={exp.nivel}
                  onChange={(e) => handleChange(e, index, 'experienciaBD')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-r leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveField('experienciaBD', index)}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField('experienciaBD')}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Añadir Base de Datos
            </button>
          </div>

          {/* Repetible de experiencia en sistemas operativos */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experiencia en Sistemas Operativos:</label>
            {formData.experienciaSO.map((exp, index) => (
              <div key={index} className="flex items-center mb-2">
                <select
                  name="nombreSO"
                  value={exp.nombreSO}
                  onChange={(e) => handleChange(e, index, 'experienciaSO')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-l leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleccionar Sistema Operativo</option>
                  {options.experienciaSO.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <select
                  name="nivel"
                  value={exp.nivel}
                  onChange={(e) => handleChange(e, index, 'experienciaSO')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-r leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveField('experienciaSO', index)}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField('experienciaSO')}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Añadir Sistema Operativo
            </button>
          </div>

          {/* Repetible de experiencia en habilidades generales */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experiencia en Habilidades Generales:</label>
            {formData.experienciaHG.map((exp, index) => (
              <div key={index} className="flex items-center mb-2">
                <select
                  name="nombreHG"
                  value={exp.nombreHG}
                  onChange={(e) => handleChange(e, index, 'experienciaHG')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-l leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seleccionar Habilidad General</option>
                  {options.experienciaHG.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <select
                  name="nivel"
                  value={exp.nivel}
                  onChange={(e) => handleChange(e, index, 'experienciaHG')}
                  className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-r leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveField('experienciaHG', index)}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField('experienciaHG')}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Añadir Habilidad General
            </button>
          </div>

          {/* Otros campos de texto */}
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaendesarrollo">Intereses:</label>
            <input
              value={formData.experienciaendesarrollo}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaendesarrollo"
              name="experienciaendesarrollo"
              type="text"
              placeholder="Ingresar intereses"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaEnAdministracionyGestiondeSistemas">Aspiraciones:</label>
            <input
              value={formData.experienciaEnAdministracionyGestiondeSistemas}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experienciaEnAdministracionyGestiondeSistemas"
              name="experienciaEnAdministracionyGestiondeSistemas"
              type="text"
              placeholder="Ingresar aspiraciones"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="debilidadTEC">Logros:</label>
            <input
              value={formData.debilidadTEC}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="debilidadTEC"
              name="debilidadTEC"
              type="text"
              placeholder="Ingresar logros"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conocimientoTec">Conocimientos:</label>
            <input
              value={formData.conocimientoTec}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="conocimientoTec"
              name="conocimientoTec"
              type="text"
              placeholder="Ingresar Conocimientos"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default InformacionBasicaForm;
