import React from "react";
import projects from "../../data/projects.json";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  return (
    <>
      <div className="mt-40" id="projects">
        <div>
          <h1
            className="sm:text-4xl text-3xl text-gray-200 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Featured Projects
          </h1>
          <p
            className="text-gray-500 text-center mt-2 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A showcase of my best work, demonstrating practical application of
            modern web development technologies and innovative solutions.
          </p>
          <div className="lg:px-20 md:px-16 sm:px-10 px-4">
            <div
              className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  Ghaza Store Clothing Web App{" "}
                  <a
                    href="https://www.ghazastore.shop"
                    className="text-blue-600"
                  >
                    <FiExternalLink />
                  </a>
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  A progressive web app (PWA) e-commerce platform delivering a
                  modern shopping experience with product browsing, secure
                  checkout, and recommendations for popular and related
                  products.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">Tech Stack</h3>
                    <li className="ms-4">React.js with Vite</li>
                    <li className="ms-4">Tailwind CSS</li>
                    <li className="ms-4">Node.js</li>
                    <li className="ms-4">Express.js</li>
                    <li className="ms-4">MySQL</li>
                    <li className="ms-4">JWT</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project1.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                />
                <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
                <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
              </div>
            </div>

            <div
              className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  Cleaning Service We App{" "}
                  <a
                    href="https://moviemania-chi.vercel.app"
                    className="text-blue-600"
                  >
                    <FiExternalLink />
                  </a>
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  A web-based cleaning service management system that helps
                  organizations manage cleaning operations efficiently. Features
                  include task scheduling, area inspections, staff assignments,
                  attendance tracking, reporting, and real-time monitoring
                  through an intuitive and responsive interface.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">Tech Stack</h3>
                    <li className="ms-4">Laravel</li>
                    <li className="ms-4">Vue</li>
                    <li className="ms-4">Inertia.js</li>
                    <li className="ms-4">Vuetify</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project2.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                />
                <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
                <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-gray-800 via-transparent to-transparent lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"></div>
              </div>
            </div>

            <div
              className="bg-gray-800 w-full mb-10 rounded-2xl flex lg:flex-nowrap flex-wrap-reverse justify-between items-start shadow-2xl shadow-rose-700/20"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="xl:flex-1 flex-auto py-10 ps-6">
                <h1 className="text-gray-200 font-bold text-2xl">
                  ByteAcademy MOOC Web App{" "}
                  <a
                    href="https://final-project-b2-fejs1.vercel.app"
                    className="text-blue-600"
                  >
                    <FiExternalLink />
                  </a>
                </h1>
                <h2 className="text-gray-400 my-4 pe-4">
                  MOOC ByteAcademy is a web-based learning platform developed by
                  my team and me to provide accessible and interactive online
                  education for students and professionals. The platform offers
                  various online courses covering topics in technology,
                  programming, and personal development.
                </h2>
                <div>
                  <ul className="text-gray-400 list-disc">
                    <h3 className="text-rose-500 font-bold">Tech Stack</h3>
                    <li className="ms-4">React.js with Vite</li>
                    <li className="ms-4">Tailwind CSS</li>
                    <li className="ms-4">Spring Boot</li>
                    <li className="ms-4">PostgreSQL</li>
                    <li className="ms-4">JWT</li>
                    <li className="ms-4">Cloudinary</li>
                    <li className="ms-4">OAuth Google</li>
                  </ul>
                </div>
              </div>

              <div className="relative xl:flex-1 lg:flex-auto w-full py-0 lg:px-0">
                <img
                  src="/images/project4.png"
                  alt=""
                  className="h-126 w-full object-cover lg:rounded-r-2xl lg:rounded-t-none rounded-t-2xl border-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
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
          <h1
            className="text-gray-200 sm:text-4xl text-3xl font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Additional Projects
          </h1>
          <p
            className="text-gray-500 text-center mt-2 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Additional projects and experiments that showcase my versatility and
            continuous learning in web development.
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:px-20 md:px-16 sm:px-10 px-4">
            {projects.map((project) => (
              <div
                className="bg-gray-800 p-4 rounded-lg shadow-2xl shadow-rose-700/20"
                key={project.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={project.dad}
              >
                <div className="h-40 p-0">
                  <img
                    src={project.img}
                    alt="project"
                    className="bg-cover h-full"
                  />
                </div>
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
                    href="https://github.com/zaqihdyt13?tab=repositories"
                    className="bg-rose-500 text-gray-200 font-medium py-1 px-2 rounded-md block w-full text-center hover:bg-rose-400 hover:scale-[0.98] transition-all"
                  >
                    Source Code
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
