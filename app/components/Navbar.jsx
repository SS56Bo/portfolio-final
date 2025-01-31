"use client";

import React, { useRef } from "react";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Navbar() {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
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
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resumes">Resume</a>
          </li>
        </ul>
        <div className="flex items-center">
          <a
            href="#contacts"
            className="hidden lg:flex items-center gap-3 px-5 py-2.5 border border-gray-800 rounded-md ml-4"
          >
            Get in Touch
          </a>
          <button className="block md:hidden ml-4" onClick={openMenu}>
            <FiAlignRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-800 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <FiX className="w-5 h-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#resumes" onClick={closeMenu}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={closeMenu}>
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
