import React from "react";
import landing from "../../app/landing.css";
const Blog = () => {
  return (
    <div>
      <div id="blog">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-black-800 md:text-4xl dark:text-black">
            Latest Articles
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl"></div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque!
                Temporibus...
              </p>
              <a href="#" className="inline-block">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl"></div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque!
                Temporibus...
              </p>
              <a href="#" className="inline-block">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl"></div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque!
                Temporibus...
              </p>
              <a href="#" className="inline-block">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
