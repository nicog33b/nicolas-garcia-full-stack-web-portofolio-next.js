import React from "react";
import { FaCode } from "react-icons/fa"; // Puedes cambiar este ícono por el que prefieras

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-yellow-300 md:px-12 px-6 py-3 md:py-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <FaCode size={30} />
        <div>
          <h1 className="text-2xl font-semibold">Nicolás García</h1>
          <p className="text-sm">Fullstack Developer</p>
        </div>
      </div>
      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-yellow-500 transition">
          <a href="#proyectos">Proyectos</a>
        </li>
        <li className="hover:text-yellow-500 transition">
          <a href="#experiencia-laboral">Experiencia Laboral</a>
        </li>
        <li className="hover:text-yellow-500 transition">
          <a href="#sobre-mi">Sobre mi</a>
        </li>
        <li className="hover:text-yellow-500 transition">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
