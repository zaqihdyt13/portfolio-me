import React from "react";
import expertise from "../../data/expertise.json";

export const Expertise = () => {
  return (
    <>
      <div className="mt-40 sm:px-20 px-10">
        <h1 className="sm:text-4xl text-3xl text-gray-200 font-bold text-center">
          Technical Expertise
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-12">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {expertise.map((exp) => (
            <div
              key={exp.id}
              className="flex md:flex-nowrap flex-wrap justify-start items-center bg-transparent border border-gray-200 rounded-md p-2 gap-2"
            data-aos="fade-left" data-aos-duration="1000" data-aos-delay={exp.dad}
            >
              <img src={exp.img} alt={exp} className="h-14" />
              <div>
                <p className="text-gray-200">{exp.name}</p>
                <p className="text-gray-500">{exp.desc}</p>
              </div>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </>
  );
};
