"use client";
import axios from "axios";
import global from "../../app/global.css";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const seeALl = async () => {
      axios.get("http://localhost:4000/api/allUsers").then((response) => {
        setUsers(response.data);
      });
    };
    seeALl();
  }, []);

  return (
    <>
      <body className="min-h-100 bg-gray-200">
        <div className="md:flex min-h-screen md:align-top">
          <aside className="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-red-600 px-5 py-10">
            <h1 className="uppercase text-white tracking-wide text-2xl font-bold mt-2">
              Registro de economia
            </h1>
            <p className="mt-10 text-white">Administra tu bolsa de trabajo</p>
            <nav className="mt-8">
              <a
                href="/"
                className="px-3 py-1 text-white block hover:bg-teal-700 hover:text-white-50 bg-teal-700"
              >
                Clientes
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Perfil
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Informacion Basica
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Cambia tu contraseña
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Notificaciones
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Seciones activas
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-white-50"
              >
                Borrar cuenta
              </a>
            </nav>
          </aside>
          <main className="md:w-3/5 xl:w-4/5 px-5 py-10 bg-gray-200">
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
                          Area de especializacion
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
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {user.surname}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {user.surname}
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
                    <tbody id="listado-clientes" className="bg-white"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
}
export default Home;
