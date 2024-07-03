import Header from "./components/Header"
import Footer from "./components/Footer"
import "./css/style.css";


function Page() {
  return (
    <>
<Header/>

<div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
  {/* Imagen de fondo */}
  <div className="absolute top-0 left-0 w-full h-full">
    <img
      src="./img/inicio2.jpg"
      alt="Background"
      className="object-cover w-full h-full"
    />
  </div>
</div>


<div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
          <h2 className="font-staatliches text-gray-800 mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Registro Economía del Conocimiento
          </h2>
          <p className="font-staatliches md:text-2xl text-gray-800 text-lg md:pe-5 md:me-5 text-justify">
            Llena el formulario, completa el registro y comenzarás a vivir tu futuro. Nuestro objetivo es incrementar tus oportunidades laborales, acompañarte con capacitaciones 100% gratis y hacer tus logros y habilidades visibles en bootcamps o búsquedas laborales en las empresas líderes de base tecnológica asociadas al PoloTecnológico La Rioja.
          </p>
          <div className="flex space-x-4 w-full mt-6">
            <a
              href="/login-user"
              className="relative flex-1 inline-block px-8 py-4 mx-auto text-base font-bold text-white bg-red-600 border-t border-gray-200 rounded-md shadow-xl text-center"
            >
              Iniciar Sesión Usuario
            </a>
            <a
              href="/login-company"
              className="relative flex-1 inline-block px-8 py-4 mx-auto text-base font-bold text-white bg-red-600 border-t border-gray-200 rounded-md shadow-xl text-center"
            >
              Iniciar Sesión Empresa
            </a>
            <a
              href="/home-card"
              className="relative flex-1 inline-block px-8 py-4 mx-auto text-base font-bold text-white bg-red-600 border-t border-gray-200 rounded-md shadow-xl text-center"
            >
              Registrarse
            </a>
          </div>
          {/* Integrates with section */}
          <div className="flex-col hidden mt-12 sm:flex lg:mt-24">
            <div className="flex">
              {/* SVG icons */}
              <svg
                className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                viewBox="0 0 2499 1037"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
              <svg
                className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                viewBox="0 0 2350 2315"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
              <svg
                className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                viewBox="0 0 2500 2158"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
              <svg
                className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                viewBox="0 0 680 680"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
              <svg
                className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                viewBox="0 0 1681 417"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth={1}>
                  {/* SVG content */}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
   
    
    <Footer/>

    </>
  );
}

export default Page;
