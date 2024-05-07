import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <div className="mb-20 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Nuestras autoridades
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonio 1 */}
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Ricardo Clemente Quintela
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                GOBERNADOR DE LA PROV. DE LA RIOJA
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Image
              className="rounded-full"
              src="/images/ricardo_quintela.jpg"
              width={200}
              height={200}
              alt="Ricardo Quintela"
            />
          </p>
        </div>
        {/* Testimonio 2 */}
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Federico Bazan
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                MINISTRO DE TRABAJO, EMPLEO E INDUSTRIA
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Image
              className="rounded-full"
              src="/images/federico_bazan.jpg"
              width={200}
              height={200}
              alt="Federico Bazan"
            />
          </p>
        </div>
        {/* Testimonio 3 */}
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Hugo Vera
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                SECRETARIO DE CIENCIA Y TECNOLOGÍA
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Image
              className="rounded-full"
              src="/images/hugo_vera.jpg"
              width={200}
              height={200}
              alt="Federico Bazan"
            />
          </p>
        </div>
        {/* Testimonio 4 */}
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Cristian Oliva
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                DIRECTOR GRAL. DE ECONOMÍA DEL CONOCIMIENTO
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Image
              className="rounded-full"
              src="/images/cristian_oliva.jpg"
              width={200}
              height={200}
              alt="Federico Bazan"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
