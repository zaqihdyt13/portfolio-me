import React from "react";
import { FiExternalLink } from "react-icons/fi";

export const Redirect = () => {
  return (
    <>
      <div className="mt-40 h-screen">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white font-bold">
            Sorry the project is private, see this demo video instead!
          </h1>
          <a
            className="flex-1 bg-rose-500 text-gray-200 sm:text-md text-sm text-center font-bold py-3 px-4 border border-rose-500 rounded-md mt-6 hover:bg-rose-400 transition-all cursor-pointer z-10 animate__animated animate__fadeIn animate__delay-1s"
            href="https://www.loom.com/share/dc8a8e5362494454b8e2940818e3c9f4"
          >
            Demo Video
          </a>
        </div>
      </div>
    </>
  );
};
