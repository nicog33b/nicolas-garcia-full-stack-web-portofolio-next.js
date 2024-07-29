import React from "react";
import { FaCode } from "react-icons/fa"; // Puedes cambiar este ícono por el que prefieras

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-yellow-300 md:px-12 px-6 py-3 md:py-6 flex justify-between items-center border-b border-white rounded-b-lg">
      <div className="flex items-center space-x-3">
        <FaCode className="text-white" size={30} />
        <div>
          <h1 className="text-2xl font-semibold">Nicolás García</h1>
          <p className="text-sm">Fullstack Developer</p>
        </div>
      </div>
      <ul className="flex space-x-6 text-lg">
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
    </nav>
  );
};

export default Navbar;
