import React from "react";

export const About = () => {
  return (
    <>
      <div className="flex justify-between items-center sm:px-8 px-4 mt-6">
        <div className="sm:w-[60%] w-auto" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-gray-200 lg:text-5xl sm:text-4xl text-3xl">
            Who am i<span className="text-rose-500 font-bold italic">?</span>
          </h1>
          <h3 className="text-gray-200 lg:text-4xl sm:text-3xl text-2xl font-extralight mt-4">
            I'm <span className="font-bold">Zaqi Hidayat</span>, a{" "}
            <span className="text-rose-500 font-bold italic">
              Web Developer
            </span>
          </h3>
          <p className="text-gray-400 my-8">
            I am a Web Developer with a primary focus on frontend development,
            while also possessing solid understanding in backend development. As
            a Computer Science graduate, my passion for programming began in
            2020 when I was first captivated by the impressive nature of coding
            skills. This interest has continued to grow because I deeply enjoy
            the process of learning new things, especially in the technology
            industry that constantly evolves and provides opportunities to
            continuously sharpen and enhance my skills. My professional
            experience includes developing a web MOOC project as a frontend
            developer team member using ReactJS, where I was not only
            responsible for UI design slicing but also performed API integration
            provided by the backend team, ensuring optimal application
            functionality.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="text-gray-200 border-2 border-gray-800 rounded-md py-1 px-2 shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-all">
              Wed Design
            </button>
            <button className="text-gray-200 border-2 border-gray-800 rounded-md py-1 px-2 shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-all">
              Web Development
            </button>
            <button className="text-gray-200 border-2 border-gray-800 rounded-md py-1 px-2 shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-all">
              Graphic Design
            </button>
          </div>
        </div>
        <div className=" sm:w-[40%]">
          <img
            src="/images/code.png"
            alt=""
            className="sm:block hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </div>
      </div>
    </>
  );
};
