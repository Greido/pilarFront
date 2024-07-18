'use client'
import axios from "axios";
import api from "../api";
import "./css/global.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InformacionBasicaForm from "../InformacionBasica/page";

function Home() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("Clientes");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const seeAll = async () => {
        try {
          const response = await api.get("/getallBD");
          setUsers(response.data);
        } catch (error) {
          console.error("Error al obtener los datos de la API:", error);
        }
      };
      seeAll();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>No estás autenticado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex font-staatliches">
      {/* Barra lateral */}
      <aside className={`fixed left-0 top-0 bottom-0 bg-red-700 text-white w-64 px-5 py-10 ${isSidebarOpen ? 'block' : 'hidden'} lg:block lg:w-auto overflow-y-auto`}>
        <h1 className="font-staatliches uppercase text-2xl tracking-wide font-bold mt-2">
          Registro de economía
        </h1>
        <p className="font-staatliches mt-6 text-lg">Administra tu bolsa de trabajo</p>
        <nav className="mt-8">
          <button
            onClick={() => setView("Clientes")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'Clientes' ? 'bg-teal-800' : 'bg-teal-700'} w-full text-left`}
          >
            Clientes
          </button>
          <button
            onClick={() => setView("EnterpriseProfile")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'EnterpriseProfile' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Perfil
          </button>
          <button
            onClick={() => setView("InformacionBasica")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'InformacionBasica' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Información Básica
          </button>
          <button
            onClick={() => setView("CambiarContrasena")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'CambiarContrasena' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Cambia tu contraseña
          </button>
          <button
            onClick={() => setView("Notificaciones")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'Notificaciones' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Notificaciones
          </button>
          <button
            onClick={() => setView("SesionesActivas")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'SesionesActivas' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Sesiones activas
          </button>
          <button
            onClick={() => setView("BorrarCuenta")}
            className={`text-lg px-4 py-2 block hover:bg-teal-800 ${view === 'BorrarCuenta' ? 'bg-teal-800' : 'bg-teal-700'} mt-2 w-full text-left`}
          >
            Borrar cuenta
          </button>
        </nav>
        <a style={{'background':'none', 'marginTop':'100px'}} 
          href="/login-user"
          onClick={()=>{onLogout()}}
          className="px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400 bg-teal-700"
        >🔒 Cerrar Sesión</a>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-y-auto px-10 py-10 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          {view === "Clientes" && (
            <>
              <h1 className="font-staatliches text-2xl font-black text-red-900 text-center">Clientes</h1>
              <p className="font-staatliches text-xl my-5 text-center">Registra tus clientes</p>
              <div className="bg-white shadow mt-5 rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mx-auto">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          No hay usuarios
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {view === "InformacionBasica" && (
            <div className="bg-white shadow mt-5 p-5 rounded-lg">
              <InformacionBasicaForm />
            </div>
          )}
        </div>
      </main>

      {/* Botón de menú hamburguesa */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-gray-500 lg:hidden p-4 fixed top-4 right-4"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}

export default Home;

