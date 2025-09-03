import React from "react";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <>
      <div className="mt-40">
        <div>
          <h1 className="sm:text-4xl text-3xl text-gray-200 font-bold text-center">
            Featured Projects
          </h1>
          <p className="text-gray-500 text-center mt-2 mb-12">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="lg:px-20 md:px-16 sm:px-10 px-4">
            <div className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20">
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  E-Commerce Clothing Store
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  A progressive web app (PWA) e-commerce platform delivering a
                  modern shopping experience with product browsing, secure
                  checkout, and recommendations for popular and related
                  products.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">
                      Frontend Features
                    </h3>
                    <li className="ms-4">React.js with Vite</li>
                    <li className="ms-4">Responsive UI with Tailwind CSS</li>
                    <li className="ms-4">Real-time Cart & Checkout</li>
                    <li className="ms-4">
                      Progressive Web App (PWA) Features (Offline Access &
                      Installable)
                    </li>
                  </ul>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">Backend Systems</h3>
                    <li className="ms-4">Node.js + Express REST API</li>
                    <li className="ms-4">MySQL Database</li>
                    <li className="ms-4">
                      Recommendation System (Popularity-Based & Rule-Based)
                    </li>
                    <li className="ms-4">JWT Authentication & Authorization</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project1.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                />
                <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
                <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
              </div>
            </div>

            <div className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20">
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  Movie List Web App
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  A responsive movie discovery web application powered by TMDB
                  API, featuring Google OAuth login, movie browsing, detailed
                  information, and personalized experience with a modern UI.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">
                      Frontend Features
                    </h3>
                    <li className="ms-4">Built with React.js</li>
                    <li className="ms-4">Responsive UI with Bootstrap</li>
                    <li className="ms-4">Movie browsing using TMDB API</li>
                    <li className="ms-4">Detailed pages for each movie</li>
                    <li className="ms-4">
                      Watch trailers directly from movie detail page
                    </li>
                    <li className="ms-4">
                      Search & Category filter functionality
                    </li>
                  </ul>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">Authentication</h3>
                    <li className="ms-4">Google OAuth 2.0 Login</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project2.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                />
                <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
                <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
              </div>
            </div>

            <div className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20">
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  Spotify Clone
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  A Spotify Clone web app that utilizes the Spotify API to
                  search for tracks and play 30-second song previews, providing
                  a simple and interactive music listening experience.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">
                      Frontend Features
                    </h3>
                    <li className="ms-4">React.js with Vite</li>
                    <li className="ms-4">Using Spotify API</li>
                    <li className="ms-4">UI Styling with Tailwind CSS</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project3.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                />
                <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
                <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 mb-26">
        <div className="">
          <h1 className="text-gray-200 sm:text-4xl text-3xl font-bold text-center">
            Other Projects
          </h1>
          <p className="text-gray-500 text-center mt-2 mb-12">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:px-20 md:px-16 sm:px-10 px-4">
            {projects.map((project) => (
              <div
                className="bg-gray-800 p-4 rounded-lg shadow-2xl shadow-rose-700/20"
                key={project.id}
              >
                <img src={project.img} alt="" />
                <h2 className="text-gray-200 text-xl font-bold mt-4">
                  {project.name}
                </h2>
                <p className="text-gray-200 text-sm/loose mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="bg-gray-600 text-sm py-1 px-2 gap-2 text-gray-200 border border-gray-200 rounded-md"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href=""
                    className="bg-rose-500 text-gray-200 font-medium py-1 px-2 rounded-md block w-full text-center hover:bg-rose-400 hover:scale-[0.98] transition-all"
                  >
                    Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
