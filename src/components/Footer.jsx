import React from "react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "./Contact";

export const Footer = ({ contactOpen, setContactOpen }) => {
  return (
    <div className="w-full pt-8 pb-4 px-4 bg-gray-800">
      <div className="flex md:flex-row flex-col md:justify-around items-center lg:gap-90 gap-8">
        <img
          src="/images/logo.png"
          alt="Zaqi Hidayat"
          className="h-16 self-start"
        />
        <div className="lg:w-full flex flex-wrap sm:justify-between justify-center items-center gap-6">
          <div className="text-gray-200 flex flex-col gap-2">
            <a
              href=""
              className="flex items-center hover:text-gray-400 transition-all"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                  <path d=""></path>
                </svg>
              </span>
              Home
            </a>
            <a
              href=""
              className="flex items-center hover:text-gray-400 transition-al"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"></path>
                  <path d=""></path>
                </svg>
              </span>
              Projects
            </a>
            <a
              onClick={() => setContactOpen(true)}
              className="flex items-center hover:text-gray-400 transition-al cursor-pointer"
            >
              <span className="mr-2">
                <BsPhone className="text-lg" />
              </span>
              Contact
            </a>
            <Contact
              contactOpen={contactOpen}
              setContactOpen={setContactOpen}
            />
          </div>
          <div className="text-gray-200  flex flex-col gap-2">
            <p className="flex items-center">
              <span className="mr-2">
                <HiOutlineLocationMarker className="text-lg" />
              </span>
              Bekasi, Indonesia
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <CgMail className="text-lg" />
              </span>
              sakiihdyt13@gmail.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                <FaWhatsapp className="text-lg" />
              </span>
              +62 812 9732 9737
            </p>
          </div>
        </div>
      </div>

      <div className="text-start text-gray-700 mt-12">
        <p>Copyright 2025 zaqiihdyt. All rights reserved.</p>
      </div>
    </div>
  );
};
