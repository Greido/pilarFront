import React from "react";
import axios from "axios";
const EnterpriseProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-5">
          Perfil de la Empresa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
          {/* Información de la Empresa */}
          <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3 text-center">
              Información de la Empresa
            </h3>
            <p className="text-gray-700 text-center">Nombre: Empresa Ejemplo</p>
            <p className="text-gray-700 text-center">Industria: Tecnología</p>
            <p className="text-gray-700 text-center">Ubicación: Ciudad, País</p>
          </div>

          {/* Otros módulos o secciones */}
          {/* <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-center">Módulo Adicional</h3>
            <p className="text-gray-700 text-center">Contenido adicional aquí.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseProfile;
