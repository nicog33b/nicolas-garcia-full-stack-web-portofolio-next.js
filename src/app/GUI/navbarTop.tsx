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

    checkMobile(); // Verifica inicialmente

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav className="bg-opacity-50 sticky top-0 bg-gray-700 text-yellow-100 md:px-12 px-6 py-3 md:py-6 flex justify-between items-center border-b border-white rounded-b-lg z-50">
      <div className=" columns-1 items-center space-x-3">
        <h1
          style={{
            fontFamily: "Cinzel",
            fontSize: "2.5rem",
            color: "#f0f0f0",
            textAlign: "center",
            textShadow: "0 0 10px #007bff",
            letterSpacing: 2,
          }}
          className="hover:scale-105 cursor-pointer transition hover:text-opacity-90 hover:shadow-md hover:shadow-white p-2  delay-300"
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
