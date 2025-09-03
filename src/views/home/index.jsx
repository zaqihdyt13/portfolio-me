import React, { useState } from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { Projects } from "./Projects";
import { About } from "./About";
import { Expertise } from "./Expertise";
import { Contact } from "../../components/Contact";

export const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="relative w-full lg:h-110 sm:h-120 h-140 bg-gray-900">
        <div className="h-full bg-[url(/images/bg-image.jpg)] bg-clip-content bg-fixed bg-top bg-no-repeat bg-cover bg-blend-overlay bg-gray-700">
          <div className="absolute top-0 left-0 inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl sm:text-4xl text-3xl text-gray-200 font-extrabold">
              Hi there, I'm Zaqi Hidayat
            </h1>
            <h3 className="sm:text-2xl text-xl text-rose-500 font-light mt-3 mb-6">
              Welcome to my personal portfolio
            </h3>
            <div className="flex justify-center items-center gap-6">
              <a href="" className="z-10 cursor-pointer">
                <BsLinkedin className="text-2xl text-gray-200" />
              </a>
              <a href="" className="z-10 cursor-pointer">
                <BsInstagram className="text-2xl text-gray-200" />
              </a>
              <a href="" className="z-10 cursor-pointer">
                <BsGithub className="text-2xl text-gray-200" />
              </a>
              <a href="" className="z-10 cursor-pointer">
                <SiFreelancer className="text-2xl text-gray-200" />
              </a>
            </div>
            <div className="sm:w-80 w-60 flex flex-wrap justify-center items-center gap-4">
              <a
                onClick={() => setContactOpen(true)}
                className="flex-1 bg-rose-500 text-gray-200 text-md text-center font-bold py-3 border border-rose-500 rounded-md mt-6 hover:bg-rose-400 transition-all cursor-pointer z-10"
              >
                Contact me
              </a>
              <a className="flex-1 bg-gray-900 text-rose-500 text-md text-center font-bold py-3 border border-rose-500 rounded-md mt-6 hover:bg-gray-800 transition-all cursor-pointer z-10">
                Resume
              </a>
              <Contact
                contactOpen={contactOpen}
                setContactOpen={setContactOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Expertise />
      <Projects />
    </>
  );
};
