"use client"
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="px-4 pt-12 pb-8 bg-gray-800 border-t border-gray-700 text-white">
      <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
        <div className="w-full pl-0 lg:pl-12 mb-6 lg:mb-0 lg:w-1/4 text-center lg:text-left">
          <a className="relative flex items-center h-full font-black leading-none">
            <img src="./img/PoloTecLogo.png" className="w-auto h-12" alt="Polo Tec Logo" />
            <span className="ml-3 text-xl text-gray-300">Polo Tecnologico<span className="text-red-500">.</span></span>
          </a>
          <p className="mt-6 text-base text-gray-400">
            Crafting the next-level of user experience and engagement.
          </p>
        </div>
        <div className="flex flex-wrap w-full lg:w-3/4">
          <ul className="w-full p-0 mb-6 lg:mb-0 lg:w-1/3">
            <li>
              <a href="/" className="inline-block px-3 py-2 text-gray-400 hover:text-gray-300">
                Principal
              </a>
            </li>
            <li>
              <a href="/intitucional" className="inline-block px-3 py-2 text-gray-400 hover:text-gray-300">
                Institucional
              </a>
            </li>
            <li>
              <a href="/contacto" className="inline-block px-3 py-2 text-gray-400 hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>

          <div className="w-full lg:w-1/3">
            <div className="px-3 py-2 font-bold text-gray-300 uppercase">
              Síguenos
            </div>
            <div className="flex justify-center lg:justify-start mt-2">
              <a
                className="flex items-center mr-6 text-gray-400 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100083851852563">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
              <a
                className="flex items-center  mr-6 text-gray-400 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/PoloTecLR"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a className="relative z-40 flex items-center px-3 py-2 mr-0 text-sm font-bold text-white md:px-5 lg:text-white sm:mr-3 md:mt-0" href="https://www.instagram.com/polotecnologicolr/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"  
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-3.313 0-3.726.013-5.025.073-1.29.058-2.171.261-2.947.544-.819.297-1.515.693-2.207 1.385-.693.693-1.089 1.389-1.386 2.207-.282.776-.486 1.657-.543 2.947C.013 8.274 0 8.688 0 12c0 3.313.013 3.726.073 5.025.058 1.29.261 2.171.544 2.947.297.819.693 1.515 1.385 2.207.693.693 1.389 1.089 2.207 1.386.776.282 1.657.486 2.947.543C8.274 23.987 8.688 24 12 24c3.313 0 3.726-.013 5.025-.073 1.29-.058 2.171-.261 2.947-.544.819-.297 1.515-.693 2.207-1.385.693-.693 1.089-1.389 1.386-2.207.282-.776.486-1.657.543-2.947C23.987 15.726 24 15.313 24 12c0-3.313-.013-3.726-.073-5.025-.058-1.29-.261-2.171-.544-2.947-.297-.819-.693-1.515-1.385-2.207-.693-.693-1.389-1.089-2.207-1.386-.776-.282-1.657-.486-2.947-.543C15.726.013 15.313 0 12 0zM12 5.838a6.162 6.162 0 0 1 6.162 6.162A6.162 6.162 0 0 1 12 18.162 6.162 6.162 0 0 1 5.838 12 6.162 6.162 0 0 1 12 5.838zm0 1.513a4.648 4.648 0 0 0-4.649 4.649A4.648 4.648 0 0 0 12 16.649 4.648 4.648 0 0 0 16.649 12 4.648 4.648 0 0 0 12 7.351zM19.438 4.499a1.476 1.476 0 1 1-2.952 0 1.476 1.476 0 1 1 2.952 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-15 text-xl mt-10 text-center text-red-500 border-t border-gray-700 font-extrabold">
        © {currentYear} Desarrollado por : Dirección General de Economia del Conocimiento
      </div>
    </footer>
  );
}

export default Footer;
