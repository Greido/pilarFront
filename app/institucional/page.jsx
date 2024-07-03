"use client"
import '../landing/css/style.css'
import Header from "../landing/components/Header"
import Footer from "../landing/components/Footer"
import { useState } from 'react'



function page() {
  // Estado para rastrear qué acordeón está abierto
  const [openIndex, setOpenIndex] = useState(null);

  // Maneja el cambio de estado del acordeón
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: '¿Quiénes somos?',
      content: 'El Polo Tecnológico es una entidad autárquica que trabaja de manera articulada con el Ministerio de Trabajo Empleo e Industria y con la secretaría de ciencia y tecnología, promoviendo el desarrollo de la economía del conocimiento en la región, fomentando la innovación, el emprendimiento, impulsando la diversificación de la matriz productiva y la creación de empleo de alta calidad..',
    },
    {
      title: 'Puedo Aplicar desde cualquier parte del mundo',
      content: 'Es la Herramienta del Polo Tecnológico La Rioja, para fortalecer el networking de la economía del conocimiento de la provincia a los fines de fortalecer la conexión del talento riojano con las empresas en alianza con el Polo, además quienes quieran fortalecer sus habilidades digitales y formarse en tecnología, mediante este registro gozarán de las novedad del “Programa de Formación con Empleabilidad”.',
    },
    {
      title: 'Cuales son las posiciones laborales que puedo aplicar',
      content: 'MERN STACK, Cloud Computing, Metodologías ágiles, Data analytics, Marketing Digital, Diseño UX/UI, Introducción a la programación, Front End, Back End, QA automation, Community management, Digital product management, E-mail marketing, Salesforce y más…',
    },
  ];
  return (
    <div>
      <Header />
      
        
      <div className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0" id="features">
  <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
    <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
      Autoridades
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 lg:mt-20">
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md">
        <img
          src="img/ricardo_quintela.jpg"
          alt="Ricardo Quintela"
          className="w-full h-auto max-h-80 object-contain"
        />
        <h4 className="font-staatliches  mt-6 text-lg font-extrabold">Ricardo Quintela</h4>
        <p className="font-staatliches text-xl mt-2 text-base text-center text-gray-800">
        Gobernador de la Provincia de La Rioja
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md">
        <img
          src="img/federico_bazan.jpg"
          alt="Federico Bazan"
          className="w-full h-auto max-h-80 object-contain"
        />
        <h4 className="font-staatliches  mt-6 text-lg font-extrabold">Federico Bazan</h4>
        <p className="font-staatliches  text-xl mt-2 text-base text-center text-gray-800">
        Ministro de Trabajo, Empleo e Industria
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md">
        <img
          src="img/hugo_vera.jpg"
          alt="Hugo Vera"
          className="w-full h-auto max-h-80 object-contain"
        />
        <h4 className="font-staatliches  mt-6 text-lg font-extrabold">Hugo Vera</h4>
        <p className="font-staatliches  text-xl mt-2 text-base text-center text-gray-800">
        Secretario de Ciencia y Tecnología
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md">
        <img
          src="img/cristian_oliva.jpg"
          alt="Cristian Oliva"
          className="w-full h-auto max-h-80 object-contain"
        />
        <h4 className="font-staatliches  mt-6 text-lg font-extrabold">Cristian Oliva</h4>
        <p className="font-staatliches text-xl mt-2 text-base text-center text-gray-800">
            Director Gral. de Economía del Conocimiento
        </p>
      </div>
    </div>
  </div>
</div>

 



<div className="max-w-4xl mx-auto px-4 py-8 mt-4 lg:mt-8">
  <div className="flex flex-col lg:flex-row">
    <div className="flex-1 lg:pr-8">
      <h2 className="font-staatliches text-gray-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 border-none">
        Forma parte de la Bolsa de Trabajo Digital del Polo Tecnológico!
      </h2>
      <p className="font-staatliches text-gray-800 text-lg md:text-xl lg:text-2xl mb-6 border-none">
        <span className="font-bold">Polo Tecnológico La Rioja,</span> está trabajando de forma activa para poder brindar soluciones y generar nuevos vínculos. Es por ello que desarrollamos un lugar donde tanto empresas como talentos especializados pueden formar un vínculo para poder generar proyectos de desarrollo.
      </p>
    </div>
  </div>
</div>

<div className="py-8">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h6 className="text-4xl font-bold text-gray-700">
        ¡Estamos construyendo el Futuro y estas empresas nos ayudan a hacerlo!
      </h6>
    </div>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/materiad-logo.png"
        />
      </div>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/epidata-logo.png"
        />
      </div>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/banco-rioja.svg"
        />
      </div>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/incluit.svg"
        />
      </div>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/logo-tsoft.png"
        />
      </div>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 mb-4">
        <img
          alt="logo"
          className="w-full opacity-90"
          src="img/practia-logo.svg"
        />
      </div>
    </div>
  </div>
</div>
{/* acordion */}

<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="max-w-2xl mx-auto text-center px-4 mb-12">
    <h2 className="text-4xl font-bold mb-6">¿ Tienes alguna duda ?</h2>
    <p className="text-2xl text-gray-700">En este panel encontrarás algunas de las preguntas que nos realizan nuestros usuarios.</p>
  </div>
  <div className="space-y-6">
    {accordionItems.map((item, index) => (
      <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <h2 id={`accordion-heading-${index}`}>
          <button
            aria-controls={`accordion-body-${index}`}
            aria-expanded={openIndex === index}
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full p-6 font-semibold text-gray-700 border-b border-gray-300 rounded-t-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out"
          >
            <span className="font-staatliches text-lg sm:text-xl lg:text-2xl font-bold">{item.title}</span>
            <svg
              aria-hidden="true"
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L5 1 1 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-body-${index}`}
          aria-labelledby={`accordion-heading-${index}`}
          className={`p-6 border-t border-gray-300 ${openIndex === index ? 'block' : 'hidden'}`}
        >
          <p className="font-staatliches text-gray-700 text-base sm:text-lg lg:text-xl font-semibold">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      

  <Footer/>
    </div>
  )
}

export default page