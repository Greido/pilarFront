import React from "react";
import landing from "../../app/landing.css";

// Componente funcional para el footer
function Footer() {
  return (
    <footer className="py-20 md:py-40">
      <Container>
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
              {/* Primer conjunto de enlaces */}
              <ul className="list-inside list-disc space-y-8">
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Blocks
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-primary">
                    Terms of Use
                  </a>
                </li>
              </ul>

              {/* Segundo conjunto de enlaces */}
              <ul role="list" className="space-y-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-3 transition hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      {/* Icono de Github */}
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
                {/* Otros enlaces aquí */}
              </ul>
            </div>

            {/* Sección de texto y enlaces adicionales */}
            <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
              <span className="block text-gray-500 dark:text-gray-400">
                We change the way UI components librairies are used
              </span>
              <span className="block text-gray-500 dark:text-gray-400">
                Tailus Blocks &copy; <span id="year"></span>
              </span>
              <span className="flex justify-between text-gray-600 dark:text-white">
                <a href="#" className="font-medium">
                  Terms of Use
                </a>
                <a href="#" className="font-medium">
                  Privacy Policy
                </a>
              </span>
              <span className="block text-gray-500 dark:text-gray-400">
                Need help?{" "}
                <a
                  href="#"
                  className="font-semibold text-gray-600 dark:text-white"
                >
                  Contact Us
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Componente funcional para el contenedor (Container)
function Container({ children }) {
  return <div className="container mx-auto px-4">{children}</div>;
}

export default Footer;
