"use client";
import React, { useState, useEffect } from "react";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiEnvelope,
  BiMoon,
  BiSun,
  BiGlobe,
} from "react-icons/bi";

const TopBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-gray-800 text-gray-300 dark:bg-gray-900 dark:text-gray-400">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <BiLogoGithub />
          </a>
          <a
            href="mailto:example@example.com"
            className="text-2xl hover:text-red-400"
          >
            <BiEnvelope />
          </a>
        </div>

        {/* Language and Dark Mode Switcher */}
        <div className="flex space-x-4 items-center">
          {/* Language Switch */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <BiGlobe className="text-2xl" />
            <select className="bg-gray-800 text-gray-300 dark:bg-gray-900 dark:text-gray-400 border-none outline-none">
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Dark Mode Switch */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <>
                <BiSun className="text-2xl" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <BiMoon className="text-2xl" />
                <span>Dark Mode</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
