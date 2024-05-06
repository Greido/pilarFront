import React from "react";

function Testimonial() {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <div className="mb-20 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          We have some fans.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Daniella Doe
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Mobile dev
              </p>
            </div>
          </div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
            libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
            cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
            harum et rerum.
          </p>
        </div>
        {/* Agrega más testimonios aquí */}
      </div>
    </div>
  );
}

export default Testimonial;
