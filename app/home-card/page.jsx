"use client";
import "./homeCard.css"; // Asegúrate de que el archivo CSS esté en el mismo directorio
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="page-header" loading="lazy"></div>
      <div className="container mx-auto p-1 max-w-5xl">
        <div className="card bg-white shadow-lg rounded-lg p-1 flex flex-col items-center">
          Registro como usuario
          <Link href="/register-user">
            <button type="button" className="submit-button">
              Registro como usuario
            </button>
          </Link>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}

      <div className="container mx-auto p-8 max-w-5xl">
        <div className="card bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
          Registro como empresa
          <Link href="/register-company">
            <button type="button" className="submit-button">
              Registro como empresa
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
