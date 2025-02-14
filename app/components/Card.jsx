import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function Card({ title, description, gLink, websiteLink, src }) {
  return (
    <div className="p-4">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        {/* Image */}
        <img className="w-full h-48 object-cover" src={src} alt="Project" />

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between px-6 pb-4">
          {gLink && (
            <a
              href={gLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition hover:bg-gray-900"
            >
              <FiGithub />
              GitHub <FiArrowUpRight />
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition hover:bg-blue-700"
            >
              Website <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
