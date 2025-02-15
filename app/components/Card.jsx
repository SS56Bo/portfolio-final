import React from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

function Card({ title, description, gLink, websiteLink, src, status }) {
  // Normalize status to lowercase for matching
  const normalizedStatus = status ? status.toLowerCase() : "unknown";

  // Status color mapping
  const statusMap = {
    ongoing: { color: "bg-red-500", label: "Ongoing", icon: <FiXCircle /> },
    finished: {
      color: "bg-green-500",
      label: "Finished",
      icon: <FiCheckCircle />,
    },
    pending: { color: "bg-yellow-500", label: "Pending", icon: <FiClock /> },
    unknown: { color: "bg-gray-500", label: "Unknown", icon: <FiClock /> },
  };

  const currentStatus = statusMap[normalizedStatus] || statusMap.unknown;

  return (
    <div className="p-4">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        {/* Image */}
        <img className="w-full h-48 object-cover" src={src} alt={title} />

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm mb-4">{description}</p>

          {/* Status Badge (Fix applied) */}
          <div
            className={`inline-flex items-center gap-2 text-white px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.color}`}
          >
            {currentStatus.icon} {currentStatus.label}
          </div>
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
              <FiGithub /> GitHub <FiArrowUpRight />
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
