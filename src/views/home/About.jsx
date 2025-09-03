import React from "react";

export const About = () => {
  return (
    <>
      <div className="flex justify-between items-center sm:px-8 px-4 mt-6">
        <div className="w-auto">
          <h1 className="text-gray-200 lg:text-5xl sm:text-4xl text-3xl">
            Who am i<span className="text-rose-500 font-bold italic">?</span>
          </h1>
          <h3 className="text-gray-200 lg:text-4xl sm:text-3xl text-2xl font-extralight mt-4">
            I'm <span className="font-bold">Zaqi Hidayat</span>, a{" "}
            <span className="text-rose-500 font-bold italic">
              Web Developer
            </span>
          </h3>
          <p className="text-gray-200 mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            ea consequatur rerum ullam obcaecati molestiae nemo quasi minus
            perspiciatis unde soluta, aut distinctio animi magni iure cum
            aspernatur perferendis qui commodi aliquam quam asperiores possimus.
            Esse minima architecto reprehenderit temporibus velit maiores cum
            laboriosam natus saepe incidunt adipisci, in voluptatum!
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
        <div>
          <img src="/images/code.png" alt="" className="sm:block hidden" />
        </div>
      </div>
    </>
  );
};
