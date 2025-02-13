"use client";

import React, { useState } from "react";
import { FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const tabs = ["About Me", "Education", "Certifications", "Skills"];

function Resume() {
  const [activeTab, setActiveTab] = useState("About Me");

  // Data
  const sections = {
    "About Me": [
      { fieldName: "Name", fieldValue: "Soham Sarkar" },
      { fieldName: "Phone", fieldValue: "+91-6296197485" },
      { fieldName: "Email", fieldValue: "sohamsarkar560@gmail.com" },
      { fieldName: "Alt. Email", fieldValue: "sohamsarkar345@gmail.com" },
      { fieldName: "Nationality", fieldValue: "Indian" },
      { fieldName: "Languages Known", fieldValue: "English" },
    ],
    Education: [
      {
        title: "Bachelor of Technology",
        institution: "Academy of Technology",
        duration: "October 2021 - June 2025",
      },
    ],
    Certifications: [
      {
        title: "Machine Learning Specialization",
        institute: "Coursera",
        duration: "August 2025 - November 2025",
      },
    ],
    Skills: [
      { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
      { name: "Java", icon: <FaJava className="text-orange-600 text-3xl" /> },
      {
        name: "Python",
        icon: <FaPython className="text-yellow-600 text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-3xl" />,
      },
      { name: "Golang", icon: <FaGolang className="text-sky-500 text-3xl" /> },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Resume
      </h1>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold border-2 rounded-lg transition 
              ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 text-left">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        {activeTab === "Skills" ? (
          <div className="flex flex-wrap gap-6">
            {sections[activeTab].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                {skill.icon} <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {sections[activeTab].map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.fieldName ? (
                  <strong>{item.fieldName}:</strong>
                ) : (
                  <strong>
                    {item.title} - {item.institution || item.institute}
                  </strong>
                )}
                <br />
                {item.fieldValue || item.duration}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Resume;
