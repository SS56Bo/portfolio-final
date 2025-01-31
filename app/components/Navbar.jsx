import React from "react";
import { FiAlignRight } from "react-icons/fi";

function Navbar() {
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
          <button className="block md:hidden ml-4">
            <FiAlignRight className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
