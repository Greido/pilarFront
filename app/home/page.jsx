"use client";
import axios from "axios";
import api from "../api";
import global from "../../app/global.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import InformacionBasicaForm from "../InformacionBasica/page";
import EnterpriseProfile from "../enterprise-profile/page";

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
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/logout", {}, {
        withCredentials: true,
      });
      if (response.status === 200) {
        Cookies.remove("jwt");
        router.push("/login-user");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-200 flex font-staatliches">
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

          <a
            href="/login-user"
            onClick={() => { logout() }}
            className="text-xl px-3 py-2 text-white block hover:bg-teal-800 mt-4 w-full text-left"
            style={{ background: 'none', marginTop: '100px' }}
          >
            🔒 Cerrar Sesión
          </a>
        </nav>
      </aside>
      <div className="flex-grow">
        <button
          onClick={toggleSidebar}
          className="p-4 bg-red-700 text-white rounded-full fixed top-4 right-4 lg:hidden"
        >
          {isSidebarOpen ? '✖️' : '☰'}
        </button>
        {/* Contenido principal */}
      </div>
      <main className="md:w-3/5 lg:w-3/5 xl:w-4/5 p-10">
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
