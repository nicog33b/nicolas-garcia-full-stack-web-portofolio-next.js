import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información del portafolio */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-blue-500">Nicolás García</h3>
            <p className="text-sm">Desarrollador Web Full-Stack</p>
            <p className="text-sm">Montevideo, Uruguay</p>
          </div>

          {/* Links de navegación */}
          <div className="flex space-x-6">
            {['Perfil', 'Tecnologias', 'Proyectos', 'Curriculum', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-blue-500 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Redes sociales y descarga de CV */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://github.com/nicog33b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicog33dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="/english-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <HiDownload className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nicolás García. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
