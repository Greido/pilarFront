"use client";
import global from "../../app/global.css";

function Home() {
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
                className="px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400 bg-teal-700"
              >
                Clientes
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
              >
                Perfil
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
              >
                Informacion Basica
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
              >
                Cambia tu contraseña
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
              >
                Notificaciones
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
              >
                Seciones activas
              </a>
              <a
                href="nuevo-cliente.html"
                className="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
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
                          Nombre Cliente
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Teléfono
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Empresa
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
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
