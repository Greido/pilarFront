function Features() {
  return (
    <div id="features">
      <div className="md:w-2/3 lg:w-1/2">
        <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          A technology-first approach to payments and finance
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
          minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
          magni adipisci.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <div className="w-12 bg-gray-400"></div>
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                4,692+
              </h5>
              <span className="font-bold">Registro RR.HH</span>
              <p className="text-gray-600 dark:text-gray-300">
                Registro de Recursos Humanos de Economía del Conocimiento.{" "}
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              {/* <span className="text-sm">Read more</span> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg> */}
            </a>
          </div>
        </div>
        {/* Repeat similar divs for other features */}
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <div className="w-12 bg-gray-400"></div>
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                13+
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Neque Dolor, fugiat non cum doloribus aperiam voluptates
                nostrum.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              {/* <span className="text-sm">Read more</span> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
