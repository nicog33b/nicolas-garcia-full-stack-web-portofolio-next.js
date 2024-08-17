"use client";
import React, { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav className="bg-opacity-30 sticky top-0 bg-gray-700 text-yellow-100 md:px-12 px-6 py-3 md:py-6 flex justify-between items-center border-b border-white rounded-b-lg z-50">
      <div className="flex items-center space-x-3">
        <h1
          style={{
            backgroundColor: "black",
            fontFamily: "Cinzel",
            color: "#c3cc21",
            fontSize: "2.5rem",
            textAlign: "center",
            textShadow: "0 0 15px #007bff, 0 0 25px #007bff, 0 0 35px #007bff",
            letterSpacing: 2,
            background: "linear-gradient(135deg, #007bff 25%, #f0f0f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderRadius: "10px",
            padding: "5px 10px",
            boxShadow: "0px 0px 10px 2px rgba(0, 123, 255, 0.5)",
          }}
          className="hover:scale-110 cursor-pointer transition-all duration-300 hover:text-opacity-90 p-2 delay-300 bg-black bg-opacity-80"
        >
          NG DEV
        </h1>
      </div>
      {isMobile ? (
        <>
          <FaBars
            className="text-white"
            size={30}
            onClick={() => setMenuOpen(true)}
          />
          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
              <FaTimes
                className="absolute top-4 right-4 text-white"
                size={30}
                onClick={() => setMenuOpen(false)}
              />
              <ul className="text-center space-y-6 text-2xl font-bold">
                <li className="relative group">
                  <a
                    href="#proyectos"
                    className="hover:text-yellow-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Proyectos
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#experiencia-laboral"
                    className="hover:text-yellow-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Experiencia Laboral
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#sobre-mi"
                    className="hover:text-yellow-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sobre mi
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#contacto"
                    className="hover:text-yellow-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="flex space-x-6 text-xl font-bold">
          <li className="relative group">
            <a href="#proyectos" className="hover:text-yellow-500 transition">
              Proyectos
            </a>
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </li>
          <li className="relative group">
            <a
              href="#experiencia-laboral"
              className="hover:text-yellow-500 transition"
            >
              Experiencia Laboral
            </a>
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </li>
          <li className="relative group">
            <a href="#sobre-mi" className="hover:text-yellow-500 transition">
              Sobre mi
            </a>
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </li>
          <li className="relative group">
            <a href="#contacto" className="hover:text-yellow-500 transition">
              Contacto
            </a>
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
