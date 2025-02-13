"use client";

import React, { useState } from "react";
import { FaPython, FaJava, FaLinux } from "react-icons/fa";
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
        icon: <FaPython className="text-yellow-400 text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-3xl" />,
      },
      { name: "Golang", icon: <FaGolang className="text-sky-500 text-3xl" /> },
      { name: "Linux", icon: <FaLinux className="text-black text-3xl" /> },
    ],
  };

  return (
    <div
      id="resumes"
      className="flex flex-col items-center justify-center min-h-screen p-4"
    >
      {/* Resume Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Resume
      </h1>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-row md:flex-col gap-2 p-2 md:p-4 bg-gray-50 w-full md:w-60 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-2 rounded-lg transition whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{activeTab}</h2>
          {activeTab === "Skills" ? (
            <div className="flex flex-wrap gap-4">
              {sections[activeTab].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  {skill.icon}{" "}
                  <span className="text-base md:text-lg">{skill.name}</span>
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
    </div>
  );
}

export default Resume;
