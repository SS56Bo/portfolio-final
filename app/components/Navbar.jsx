import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50">
        <a href="#top">
          <h1 className="w-28 cursor-pointer mr-12 font-extrabold text-2xl tracking-wide">
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
        <div>
          <a
            href="#contacts"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-600 rounded-full ml-4"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
