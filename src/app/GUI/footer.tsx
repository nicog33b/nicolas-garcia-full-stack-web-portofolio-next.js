import React from "react";

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
            <a
              href="#about"
              className="text-sm hover:text-blue-500 transition duration-300"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-blue-500 transition duration-300"
            >
              Proyectos
            </a>
            <a
              href="#services"
              className="text-sm hover:text-blue-500 transition duration-300"
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-blue-500 transition duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://github.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.75.08-.73.08-.73 1.23.09 1.88 1.26 1.88 1.26 1.1 1.88 2.89 1.34 3.6 1.02.11-.8.43-1.34.78-1.65-2.66-.3-5.46-1.33-5.46-5.91 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.21a11.51 11.51 0 016 0c2.28-1.53 3.29-1.21 3.29-1.21.65 1.64.24 2.86.12 3.16.76.83 1.22 1.9 1.22 3.19 0 4.59-2.8 5.61-5.47 5.91.44.38.83 1.1.83 2.22v3.3c0 .31.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.71c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.71h-3v-5.59c0-3.45-4-3.19-4 0v5.59h-3v-10h3v1.34c1.4-2.59 7-2.78 7 2.47v6.19z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.954-2.173-1.55-3.591-1.55-2.72 0-4.925 2.205-4.925 4.924 0 .386.043.762.127 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.724-.666 1.561-.666 2.457 0 1.695.862 3.192 2.175 4.07-.801-.025-1.554-.246-2.211-.614v.062c0 2.366 1.682 4.343 3.918 4.789-.41.111-.843.171-1.287.171-.315 0-.621-.031-.921-.089.622 1.943 2.428 3.355 4.565 3.394-1.674 1.31-3.781 2.092-6.073 2.092-.394 0-.779-.023-1.159-.067 2.168 1.392 4.742 2.207 7.513 2.207 9.013 0 13.936-7.467 13.936-13.936 0-.213-.005-.425-.015-.636.956-.69 1.785-1.56 2.441-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nicolás García. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
