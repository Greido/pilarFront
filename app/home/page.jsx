"use client";
import axios from "axios";
import api from "../api";
import global from "../../app/global.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InformacionBasicaForm from "../InformacionBasica/page";
import EnterpriseProfile from "../enterprise-profile/page";
import CambiarContrasena from "../CambiarContrasena";
import Notificaciones from "../Notificaciones";
import SesionesActivas from "../SesionesActivas";
import BorrarCuenta from "../BorrarCuenta";

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
      {/* Menú lateral */}
      <aside className={`md:w-2/5 lg:w-2/5 xl:w-1/5 bg-red-700 px-5 py-10 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <h1 className="font-staatliches uppercase text-2xl text-white tracking-wide font-bold mt-2">
          Registro de economía
        </h1>
        <p className="font-staatliches mt-10 text-xl text-white">Administra tu bolsa de trabajo</p>
        <nav className="mt-8">
          <button
            onClick={() => setView("Clientes")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 bg-teal-700 w-full text-left"
          >
            Clientes
          </button>
          <button
            onClick={() => setView("EnterpriseProfile")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Perfil
          </button>
          <button
            onClick={() => setView("InformacionBasica")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Información Básica
          </button>
          <button
            onClick={() => setView("CambiarContrasena")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Cambia tu contraseña
          </button>
          <button
            onClick={() => setView("Notificaciones")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Notificaciones
          </button>
          <button
            onClick={() => setView("SesionesActivas")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Sesiones activas
          </button>
          <button
            onClick={() => setView("BorrarCuenta")}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
          >
            Borrar cuenta
          </button>
        </nav>
      </aside>

      {/* Menú hamburguesa */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-gray-500 lg:hidden p-4"
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

      {/* Sidebar (oculta en pantallas grandes) */}
      <div className={`fixed inset-0 bg-red-700 px-5 py-10 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 bg-red-700 text-white rounded-full fixed top-4 right-4 lg:hidden"
        >
          {isSidebarOpen ? '✖️' : '☰'}
        </button>
        <h1 className="uppercase text-xl text-white tracking-wide font-bold mt-2">
          Registro de economía
        </h1>
        <p className="mt-10 text-xl text-white">Administra tu bolsa de trabajo</p>
        <nav className="mt-8">
          <button
            onClick={() => setView("Clientes")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 bg-teal-700"
          >
            Clientes
          </button>
          <button
            onClick={() => setView("EnterpriseProfile")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Perfil
          </button>
          <button
            onClick={() => setView("InformacionBasica")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Información Básica
          </button>
          <button
            onClick={() => setView("CambiarContrasena")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Cambia tu contraseña
          </button>
          <button
            onClick={() => setView("Notificaciones")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Notificaciones
          </button>
          <button
            onClick={() => setView("SesionesActivas")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Sesiones activas
          </button>
          <button
            onClick={() => setView("BorrarCuenta")}
            className="px-3 py-1 text-xl text-white block hover:bg-teal-800 mt-2"
          >
            Borrar cuenta
          </button>
        </nav>
      </div>

      <main className="flex-1 md:ml-64 px-5 py-10 bg-gray-200">
        {view === "Clientes" && (
          <>
            <h1 className="font-staatliches text-2xl font-black text-red-900">Clientes</h1>
            <p className="font-staatliches text-2xl my-10">Registra tus clientes</p>
            <div className="bg-white shadow mt-10 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
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
        {view === "EnterpriseProfile" && <EnterpriseProfile />}
        {view === "InformacionBasica" && <InformacionBasicaForm />}
        {view === "CambiarContrasena" && <CambiarContrasena />}
        {view === "Notificaciones" && <Notificaciones />}
        {view === "SesionesActivas" && <SesionesActivas />}
        {view === "BorrarCuenta" && <BorrarCuenta />}
      </main>
    </div>
  );
}

export default Home;
