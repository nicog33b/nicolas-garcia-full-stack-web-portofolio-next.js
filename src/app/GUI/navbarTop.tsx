"use client";
import React, { useState } from "react";
import {
  FaDownload,
  FaProjectDiagram,
  FaFlask,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="bg-gradient-to-b from-blue-500 to-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6 text-white text-lg">
          <li className="hover:text-gray-300 transition">
            <a href="/path-to-cv.pdf" download className="flex items-center">
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <a href="#projects" className="flex items-center">
              <FaProjectDiagram className="mr-2" />
              Projects
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <a href="#kubera-labs" className="flex items-center">
              <FaFlask className="mr-2" />
              Kubera Labs
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <button onClick={toggleDarkMode} className="flex items-center">
              {darkMode ? (
                <FaSun className="mr-2" />
              ) : (
                <FaMoon className="mr-2" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
