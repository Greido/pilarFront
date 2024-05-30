"use client";
import axios from "axios";
import global from "../../app/global.css";
import { useEffect, useState } from "react";
import InformacionBasicaForm from "../InformacionBasica/page"; 

function Home() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("Clientes"); 

  useEffect(() => {
    const seeAll = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/getallBD");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
      
    };
    seeAll();
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex">
      <aside className="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-purple-700 px-5 py-10">
        <h1 className="uppercase text-white tracking-wide text-2xl font-bold mt-2">
          Registro de economía
        </h1>
        <p className="mt-10 text-white">Administra tu bolsa de trabajo</p>
        <nav className="mt-8">
          <button
            onClick={() => setView("Clientes")}
            className="px-3 py-1 text-white block hover:bg-purple hover:text-white-50 bg-teal-700"
          >
            Clientes
          </button>
          <button
            onClick={() => setView("Perfil")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Perfil
          </button>
          <button
            onClick={() => setView("InformacionBasica")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Información Básica
          </button>
          <button
            onClick={() => setView("CambiarContrasena")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Cambia tu contraseña
          </button>
          <button
            onClick={() => setView("Notificaciones")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Notificaciones
          </button>
          <button
            onClick={() => setView("SesionesActivas")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Sesiones activas
          </button>
          <button
            onClick={() => setView("BorrarCuenta")}
            className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
          >
            Borrar cuenta
          </button>
        </nav>
      </aside>
      <main className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
        {view === "Clientes" && (
          <>
            <h2 className="text-3xl font-light text-center">Personas</h2>
            <div className="flex flex-col mt-10">
              <div className="py-2 overflow-x-auto">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Nombre
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Apellido
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Disponibilidad
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Área de especialización
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Localidad
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Residencia
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          CV
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.surname}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.experienciaLP && user.experienciaLP.length > 0
                              ? user.experienciaLP[0].nivel
                              : ""}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.areaInteres}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.localidad}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {user.residencia}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
        {view === "InformacionBasica" && (
          <div className="mt-10">
            <InformacionBasicaForm />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
