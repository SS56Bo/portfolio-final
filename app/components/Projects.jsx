"use client";
import React, { useState } from "react";
import Card from "./Card";
import Image from "next/image";

const categories = ["Web Dev", "Web3", "ML & LLMs", "Games", "Others"];

const projects = [
  {
    title: "Web Based Wallet",
    description:
      "A digital wallet accessible through a web browser, enabling users to securely store, send, and receive cryptocurrencies or digital assets.",
    gLink: "https://github.com/SS56Bo/web3-wallet",
    src: "/wallet.jpg",
    status: "Finished",
    category: "Web3",
  },
  {
    title: "2D Platformer",
    description: "A 2D Platformer made using Brackey's assets",
    gLink: "https://github.com/SS56Bo/Godot-Tutorial",
    src: "/gameA.png",
    status: "Ongoing",
    category: "Games",
  },
  {
    title: "NoteFlow",
    description:
      "A web-based note taking app, can be navigated via keybindings.",
    gLink: "https://github.com/SS56Bo",
    src: "/noteflow.jpg",
    status: "Ongoing",
    category: "Web Dev",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("Web Dev");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <div
      id="projects"
      className="w-full px-4 sm:px-6 md:px-[10%] py-16 scroll-mt-20"
    >
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        My Projects
      </h1>

      {/* Tab System */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 border-b-2 border-gray-300 pb-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative text-sm sm:text-base md:text-lg font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md 
              ${
                activeTab === category
                  ? "bg-blue-600 text-white font-semibold shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card key={index} {...project} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;
