"use client"
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="relative z-50 w-full h-24">
    <header className="relative z-50 w-full h-24">
      <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a className="relative flex items-center  h-full font-black leading-none">
          <img src="./img/PoloTecLogo.png" className="w-auto h-8" alt="Polo Tec Logo" />
          <span className="font-staatliches text-xl ml-3 text-xl text-gray-800">Polo Tecnologico<span className="text-red-500">.</span></span>
        </a>
  
        <nav className="relative z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          {/* <div className="text-2xl font-bold text-gray-800">
            <a href="#">Logo</a>
          </div> */}
  
          {/* Menu Toggle Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
  
          {/* Navigation Menu for Desktop */}
          <div className="hidden md:flex md:flex-row md:items-center md:space-x-8">
            <a href="/" className="font-staatliches text-xl font-bold duration-100 transition-color hover:text-red-600">Inicio</a>
            <a href="/institucional" className="font-staatliches text-xl font-bold duration-100 transition-color hover:text-red-600">Institucional</a>
            <a href="/contacto" className="font-staatliches text-xl font-bold duration-100 transition-color hover:text-red-600">Contacto</a>
            <div className="flex flex-row space-x-4">
       
            </div>
          </div>
        </div>
  
        {/* Navigation Menu for Mobile */}
        <div
          className={`fixed inset-0 bg-white border-t border-gray-200 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col w-full p-4">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end p-2 text-gray-800 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a href="#" className="block py-2 text-gray-800 font-bold hover:text-red-600" onClick={toggleMenu}>Inicio</a>
            <a href="Isntitucional" className="block py-2 text-gray-800 font-bold hover:text-red-600" onClick={toggleMenu}>Institucional</a>
            <a href="#pricing" className="block py-2 text-gray-800 font-bold hover:text-red-600" onClick={toggleMenu}>Contacto</a>
          </div>
        </div>
      </nav>
  
        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
        <a className="relative z-40 flex items-center px-3 py-2 mr-0 text-sm font-bold text-white md:px-5 lg:text-white sm:mr-3 md:mt-0" href="#_">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-3.313 0-3.726.013-5.025.073-1.29.058-2.171.261-2.947.544-.819.297-1.515.693-2.207 1.385-.693.693-1.089 1.389-1.386 2.207-.282.776-.486 1.657-.543 2.947C.013 8.274 0 8.688 0 12c0 3.313.013 3.726.073 5.025.058 1.29.261 2.171.544 2.947.297.819.693 1.515 1.385 2.207.693.693 1.389 1.089 2.207 1.386.776.282 1.657.486 2.947.543C8.274 23.987 8.688 24 12 24c3.313 0 3.726-.013 5.025-.073 1.29-.058 2.171-.261 2.947-.544.819-.297 1.515-.693 2.207-1.385.693-.693 1.089-1.389 1.386-2.207.282-.776.486-1.657.543-2.947C23.987 15.726 24 15.313 24 12c0-3.313-.013-3.726-.073-5.025-.058-1.29-.261-2.171-.544-2.947-.297-.819-.693-1.515-1.385-2.207-.693-.693-1.389-1.089-2.207-1.386-.776-.282-1.657-.486-2.947-.543C15.726.013 15.313 0 12 0zM12 5.838a6.162 6.162 0 0 1 6.162 6.162A6.162 6.162 0 0 1 12 18.162 6.162 6.162 0 0 1 5.838 12 6.162 6.162 0 0 1 12 5.838zm0 1.513a4.648 4.648 0 0 0-4.649 4.649A4.648 4.648 0 0 0 12 16.649 4.648 4.648 0 0 0 16.649 12 4.648 4.648 0 0 0 12 7.351zM19.438 4.499a1.476 1.476 0 1 1-2.952 0 1.476 1.476 0 1 1 2.952 0z" />
        </svg>
      </a>


<a
  className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all duration-100 bg-transparent rounded hover:shadow-xl"
  href="#_"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M24 4.556c-.883.392-1.832.656-2.828.775a4.936 4.936 0 0 0 2.165-2.723 9.867 9.867 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.951 13.951 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.556 4.897 4.897 0 0 1-2.228-.616v.061a4.919 4.919 0 0 0 3.946 4.818 4.9 4.9 0 0 1-2.224.084 4.922 4.922 0 0 0 4.598 3.417 9.867 9.867 0 0 1-6.102 2.102c-.396 0-.787-.023-1.175-.068a13.94 13.94 0 0 0 7.547 2.212c9.054 0 14-7.496 14-13.986 0-.214-.005-.428-.014-.64a9.936 9.936 0 0 0 2.459-2.548l.002-.003z" />
  </svg>
</a>
<a
  className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all duration-100 bg-transparent rounded hover:shadow-xl"
  href="https://www.facebook.com" 
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white" 
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22 12.072c0-5.525-4.475-10-10-10S2 6.547 2 12.072c0 5.094 3.74 9.36 8.64 9.887v-6.978H7.543v-2.786h3.097V9.932c0-3.066 1.806-4.752 4.566-4.752 1.305 0 2.42.097 2.746.142v3.183h-1.885c-1.48 0-1.768.705-1.768 1.738v2.278h3.536l-.46 2.786h-3.076v6.978c4.876-.528 8.616-4.788 8.616-9.887z" />
  </svg>
</a>



          <svg className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block" viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient id="c" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF0000" />
                <stop offset="100%" stopColor="#808080" />
              </linearGradient>
              <linearGradient id="f" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF0000" />
                <stop offset="100%" stopColor="#808080" />
              </linearGradient>
              <filter id="a" x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox">
                <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
              </filter>
              <filter id="d" x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox">
                <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
              </filter>
              <path id="b" d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z" />
              <path id="e" d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z" />
            </defs>
            <g fill="none" fillRule="evenodd" opacity=".9">
              <g transform="rotate(65 416.452 409.167)">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <use fill="url(#c)" xlinkHref="#b" />
              </g>
              <g transform="rotate(29 421.929 414.496)">
                <use fill="#000" filter="url(#d)" xlinkHref="#e" />
                <use fill="url(#f)" xlinkHref="#e" />
              </g>
            </g>
          </svg>
        </div>
  
       
      </div>
    </header>
  
    
  </div>
  )
}

export default Header