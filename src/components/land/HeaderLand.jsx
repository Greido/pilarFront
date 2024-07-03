// pages/index.js

"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false); // Change this as needed
  const inicio = true; // Change this as needed

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Polo Tecnológico</title>
      </Head>
      <header className={`header ${inicio ? "inicio" : ""}`}>
        <div className="contenedor contenido-header">
          <div className="barra">
            <a href="/polo/index.php">
              <h1></h1>
            </a>
            <div className="mobile-menu">
              <Image
                src="/polo/build/img/barras.svg"
                alt="icono menu responsive"
                width={24}
                height={24}
              />
            </div>
            <div className="derecha">
              <Image
                className="dark-mode-boton"
                src="/polo/build/img/dark-mode.svg"
                alt="Dark mode button"
                width={24}
                height={24}
              />
              <nav className="navegacion">
                <a href="/polo/nosotros.php"></a>
                <a href="/polo/cursos.php"></a>
                <a href="/polo/blog.php"></a>
                {!auth && <a href="/polo/login.php">Iniciar </a>}
                {auth && (
                  <>
                    <a href="/polo/admin/index.php"></a>
                    <a href="/polo/empresas/index.php"></a>
                    <a href="/polo/cerrar-session.php"></a>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
        {inicio && <h1>Polo de Ciencia y Tecnologia La Rioja</h1>}
      </header>
    </>
  );
}
