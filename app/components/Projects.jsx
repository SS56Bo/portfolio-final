"use client";
import React, { useState } from "react";
import Card from "./Card";

const categories = ["Web Dev", "Web3", "ML & LLMs", "Games", "Others"];

function Projects() {
  const [activeTab, setActiveTab] = useState("Web Dev");

  return (
    <div id="projects" className="w-full px-6 md:px-[12%] py-16 scroll-mt-20">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        My Projects
      </h1>

      {/* Tab System */}
      <div className="flex justify-center overflow-x-auto md:justify-center space-x-4 md:space-x-6 border-b-2 border-gray-300 pb-4 mb-6 no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative whitespace-nowrap text-base md:text-lg font-medium text-gray-700 px-3 md:px-4 py-2 transition-colors duration-300 
              ${
                activeTab === category
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500"
              }`}
          >
            {category}
            {/* Animated underline */}
            {activeTab === category && (
              <div className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-600 rounded-full transition-all duration-300"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-center text-gray-700"></div>
    </div>
  );
}

export default Projects;
