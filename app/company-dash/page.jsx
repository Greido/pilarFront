"use client";
import axios from "axios";
import api from "../api";
import "./css/global.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import enterproseProfile from "../enterpriseProfile/page";
function Dash() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("Clientes");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token obtenido de las cookies:", token);
    setIsAuthenticated(!token); // Utiliza una conversión booleana para simplificar
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

  const onLogout = () => {
    Cookies.remove("jwt");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <div>No estás autenticado</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex flex-col lg:flex-row font-staatliches">
        {/* Barra lateral */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 bg-red-700 text-white w-64 px-5 py-10 lg:w-64 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block overflow-y-auto`}
        >
          <h1 className="font-staatliches uppercase text-2xl tracking-wide font-bold mt-2">
            Registro de economía
          </h1>
          <p className="font-staatliches mt-6 text-lg">
            Administra tu bolsa de trabajo
          </p>
          <nav className="mt-8">
            <button
              onClick={() => setView("Clientes")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "Clientes" ? "bg-white-800" : "bg-white-700"
              } w-full text-left`}
            >
              Clientes
            </button>
            <button
              onClick={() => setView("enterproseProfile")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "enterproseProfile" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Perfil
            </button>
            <button
              onClick={() => setView("InformacionBasica")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "InformacionBasica" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Información Básica
            </button>
            <button
              onClick={() => setView("CambiarContrasena")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "CambiarContrasena" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Cambia tu contraseña
            </button>
            <button
              onClick={() => setView("Notificaciones")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "Notificaciones" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Notificaciones
            </button>
            <button
              onClick={() => setView("SesionesActivas")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "SesionesActivas" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Sesiones activas
            </button>
            <button
              onClick={() => setView("BorrarCuenta")}
              className={`text-lg px-4 py-2 block hover:bg-gray-500 ${
                view === "BorrarCuenta" ? "bg-white-800" : "bg-white-700"
              } mt-2 w-full text-left`}
            >
              Borrar cuenta
            </button>
          </nav>
          <a
            style={{ background: "none", marginTop: "100px" }}
            href="/login-user"
            onClick={onLogout}
            className="px-6 py-1 text-white block hover:bg-gray-700 hover:text-gray-800 bg-gray-700"
          >
            🔒 Cerrar Sesión
          </a>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 px-4 py-10 bg-gray-200 flex justify-center">
          <div className="w-full max-w-5xl mx-auto">
            {view === "Clientes" && (
              <>
                <h1 className="font-staatliches text-2xl font-black text-red-900 text-center">
                  Clientes
                </h1>
                <p className="font-staatliches text-xl my-5 text-center">
                  Registra tus clientes
                </p>
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
                          <td
                            colSpan="2"
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                          >
                            No hay usuarios
                          </td>
                        </tr>
                      ) : (
                        users.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.email}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {view === "enterproseProfile" && (
              <div className="bg-white shadow mt-5 p-5 rounded-lg">
                <enterproseProfile />
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
    </>
  );
}

export default Dash;
