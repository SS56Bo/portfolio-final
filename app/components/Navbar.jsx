"use client";

import React, { useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiSun,
  FiAlignRight,
  FiMoon,
  FiHome,
  FiFolder,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Navbar() {
  const sideMenuRef = useRef();
  const [activeLink, setActiveLink] = useState("");

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50">
        <a href="#top">
          <h1 className="w-28 cursor-pointer mr-12 font-extrabold text-4xl tracking-wide">
            SOHAM<span className="text-red-800 text-3xl opacity-80">.</span>
          </h1>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a
              href="#top"
              className={`text-gray-800 font-semibold transition-all duration-300 ease-in-out relative group ${
                activeLink === "top" ? "text-black" : ""
              }`}
              onClick={() => handleClick("top")}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5  bg-blue-500 scale-x-0 ${
                  activeLink === "top"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                } transition-all duration-300 ease-in-out`}
              ></span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`text-gray-800 font-semibold transition-all duration-300 ease-in-out relative group ${
                activeLink === "projects" ? "text-black" : ""
              }`}
              onClick={() => handleClick("projects")}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5  bg-blue-500 scale-x-0 ${
                  activeLink === "projects"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                } transition-all duration-300 ease-in-out`}
              ></span>
            </a>
          </li>

          <li>
            <a
              href="#resume"
              className={`text-gray-800 font-semibold transition-all duration-300 ease-in-out relative group ${
                activeLink === "resume" ? "text-black" : ""
              }`}
              onClick={() => handleClick("resume")}
            >
              Resume
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 ${
                  activeLink === "resume"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                } transition-all duration-300 ease-in-out`}
              ></span>
            </a>
          </li>
        </ul>

        {/* THE GET IN TOUCH BUTTON  */}
        <div className="flex items-center">
          <FiMoon className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
          <a
            href="#contacts"
            className="hidden lg:flex items-center gap-3 px-5 py-2.5 border-2 font-semibold border-blue-500 text-blue-600 rounded-md ml-4 hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            Get in Touch
            <FiArrowUpRight />
          </a>
          <button className="block md:hidden ml-4" onClick={openMenu}>
            <FiAlignRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-24 px-12 fixed -right-64 top-0 bottom-0 w-72 z-50 h-screen bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg rounded-l-2xl transition-transform duration-500 ease-in-out"
        >
          {/* Close Button */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <FiX className="w-6 h-6 text-white cursor-pointer hover:rotate-90 transition-transform duration-300 ease-in-out" />
          </div>

          {/* Menu Items */}
          <li>
            <a
              href="#top"
              className="text-white text-lg font-semibold tracking-wide flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-8 transition-all duration-300"
              onClick={closeMenu}
            >
              <FiHome className="w-5 h-5" /> Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white text-lg font-semibold tracking-wide flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-8 transition-all duration-300"
              onClick={closeMenu}
            >
              <FiFolder className="w-5 h-5" /> Projects
            </a>
          </li>
          <li>
            <a
              href="#resumes"
              className="text-white text-lg font-semibold tracking-wide flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-8 transition-all duration-300"
              onClick={closeMenu}
            >
              <FiFileText className="w-5 h-5" /> Resume
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="text-white text-lg font-semibold tracking-wide flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-8 transition-all duration-300"
              onClick={closeMenu}
            >
              <FiMail className="w-5 h-5" /> Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
