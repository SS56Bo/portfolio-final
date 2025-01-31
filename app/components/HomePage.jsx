import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import img from "./../../assets/img/optimus.jpg";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Image Section */}
      <div className="mb-6">
        <Image
          src={img}
          alt="Optimus Prime"
          className="w-40 h-36 rounded-full"
        />
      </div>

      {/* Introduction */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I am Soham 👋
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Ovo font-bold leading-tight">
        I build stuff for fun!
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 font-Ovo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo,
        ducimus vero cum fuga magni?
      </p>

      {/* Buttons Section */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="#contacts"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
        <button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Download Resume
          <FiDownload className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
