import React from "react";

const EnterpriseProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-5">
          Perfil de la Empresa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Información de la Empresa */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">
              Información de la Empresa
            </h3>
            <p className="text-gray-700">Nombre: Empresa Ejemplo</p>
            <p className="text-gray-700">Industria: Tecnología</p>
            <p className="text-gray-700">Ubicación: Ciudad, País</p>
          </div>

          {/* Estadísticas */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Estadísticas</h3>
            <p className="text-gray-700">Empleados: 120</p>
            <p className="text-gray-700">Proyectos: 45</p>
            <p className="text-gray-700">Años en el mercado: 10</p>
          </div>

          {/* Gráficos (Ejemplo) */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Gráficos</h3>
            <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Otros módulos o secciones */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Módulo Adicional</h3>
            <p className="text-gray-700">Contenido adicional aquí.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseProfile;
