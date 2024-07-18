"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";


function InformacionBasicaForm() {
  const [formData, setFormData] = useState({
    
    _id: "",
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
    // if (_id ) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getoneBD/${formData._id}`);
        setFormData(response.data);  // Asegúrate de que `response.data` contiene los datos correctos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

    // Función para formatear la fecha
    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split('/');
      return new Date(`${year}-${month}-${day}`);
    };

    // Actualiza los datos del formulario con los formatos correctos
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
        withCredentials: true, // Importante para enviar cookies
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input
              value={formData.fechaNacimiento}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="text"
              placeholder="Ingresar fecha de nacimiento (dd/mm/yyyy)"
              onChange={handleChange}
              style={{ maxWidth: '750px' }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center my-5">Experiencia</h2>
        <div className="space-y-4">
          {formData.experienciaLP.map((exp, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaLP-${index}-nombreLP`}>Lenguaje de programación:</label>
              <select
                value={exp.nombreLP}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaLP-${index}-nombreLP`}
                name="nombreLP"
                onChange={(e) => handleChange(e, index, 'experienciaLP')}
              >
                <option value="">Seleccionar lenguaje</option>
                {options.experienciaLP.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaLP-${index}-nivel`}>Nivel:</label>
              <select
                value={exp.nivel}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaLP-${index}-nivel`}
                name="nivel"
                onChange={(e) => handleChange(e, index, 'experienciaLP')}
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                className="text-red-500 mt-2"
                onClick={() => handleRemoveField('experienciaLP', index)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddField('experienciaLP')}
          >
            Añadir experiencia en Lenguaje de Programación
          </button>
        </div>

        <div className="space-y-4 my-5">
          {formData.experienciaBD.map((exp, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaBD-${index}-nombreBD`}>Base de datos:</label>
              <select
                value={exp.nombreBD}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaBD-${index}-nombreBD`}
                name="nombreBD"
                onChange={(e) => handleChange(e, index, 'experienciaBD')}
              >
                <option value="">Seleccionar base de datos</option>
                {options.experienciaBD.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaBD-${index}-nivel`}>Nivel:</label>
              <select
                value={exp.nivel}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaBD-${index}-nivel`}
                name="nivel"
                onChange={(e) => handleChange(e, index, 'experienciaBD')}
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                className="text-red-500 mt-2"
                onClick={() => handleRemoveField('experienciaBD', index)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddField('experienciaBD')}
          >
            Añadir experiencia en Base de Datos
          </button>
        </div>

        <div className="space-y-4 my-5">
          {formData.experienciaSO.map((exp, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaSO-${index}-nombreSO`}>Sistema operativo:</label>
              <select
                value={exp.nombreSO}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaSO-${index}-nombreSO`}
                name="nombreSO"
                onChange={(e) => handleChange(e, index, 'experienciaSO')}
              >
                <option value="">Seleccionar sistema operativo</option>
                {options.experienciaSO.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaSO-${index}-nivel`}>Nivel:</label>
              <select
                value={exp.nivel}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaSO-${index}-nivel`}
                name="nivel"
                onChange={(e) => handleChange(e, index, 'experienciaSO')}
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                className="text-red-500 mt-2"
                onClick={() => handleRemoveField('experienciaSO', index)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddField('experienciaSO')}
          >
            Añadir experiencia en Sistema Operativo
          </button>
        </div>

        <div className="space-y-4 my-5">
          {formData.experienciaHG.map((exp, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaHG-${index}-nombreHG`}>Herramienta o Gestión:</label>
              <select
                value={exp.nombreHG}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaHG-${index}-nombreHG`}
                name="nombreHG"
                onChange={(e) => handleChange(e, index, 'experienciaHG')}
              >
                <option value="">Seleccionar herramienta</option>
                {options.experienciaHG.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`experienciaHG-${index}-nivel`}>Nivel:</label>
              <select
                value={exp.nivel}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`experienciaHG-${index}-nivel`}
                name="nivel"
                onChange={(e) => handleChange(e, index, 'experienciaHG')}
              >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <button
                type="button"
                className="text-red-500 mt-2"
                onClick={() => handleRemoveField('experienciaHG', index)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddField('experienciaHG')}
          >
            Añadir experiencia en Herramienta de Gestión
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaendesarrollo">Experiencia en Desarrollo:</label>
          <textarea
            value={formData.experienciaendesarrollo}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experienciaendesarrollo"
            name="experienciaendesarrollo"
            rows="4"
            placeholder="Describir experiencia en desarrollo"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conocimientoTec">Conocimientos Técnicos:</label>
          <textarea
            value={formData.conocimientoTec}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="conocimientoTec"
            name="conocimientoTec"
            rows="4"
            placeholder="Describir conocimientos técnicos"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experienciaEnAdministracionyGestiondeSistemas">Experiencia en Administración y Gestión de Sistemas:</label>
          <textarea
            value={formData.experienciaEnAdministracionyGestiondeSistemas}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experienciaEnAdministracionyGestiondeSistemas"
            name="experienciaEnAdministracionyGestiondeSistemas"
            rows="4"
            placeholder="Describir experiencia en administración y gestión de sistemas"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="debilidadTEC">Debilidades Técnicas:</label>
          <textarea
            value={formData.debilidadTEC}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="debilidadTEC"
            name="debilidadTEC"
            rows="4"
            placeholder="Describir debilidades técnicas"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className="mx-auto w-auto p-4 rounded-lg bg-red-500 text-white text-2xl font-bold border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-red-600"
        >
          Enviar
        </button>
        </div>
        {responseMessage && (
          <div className="mt-4 text-center">
            <p className="text-green-500">{responseMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default InformacionBasicaForm;
