"use client";
import React, { useEffect, useState } from "react";
import Loading from "./components/home/loading";
import ProfileImage from "./components/home/profileImage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden p-2">
      <div className="flex flex-col md:flex-row items-center  w-full  px-6">
        <div className="w-full md:w-auto md:flex-shrink-0 md:mr-8">
          <ProfileImage progress={progress} />
        </div>
        <div className="w-full md:w-auto text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Nicolás García
          </h1>
          <p className="text-sm md:text-xl leading-relaxed text-gray-700 mb-4">
            Desarrollador Full-Stack con experiencia en HTML, CSS, JavaScript, y
            frameworks como Next.js, Vue, Angular. Software Skills: c#, java,
            vb.net Familiarizado con bases de datos SQL y NoSQL, y proyectos
            freelance. Actualmente enfocado en el desarrollo de aplicaciones
            móviles con React Native. Apasionado por la tecnología, la
            naturaleza y el arte.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/path/to/cv.pdf"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              download
            >
              Descargar mi CV
            </a>

            <a
              href="mailto:example@example.com"
              className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Contacto
            </a>

            <a
              href="https://www.linkedin.com/in/israel-herrera/"
              className="inline-block bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita mi LinkedIn
            </a>
          </div>
        </div>
      </div>
      {isLoading && <Loading setProgress={setProgress} />}
    </div>
  );
}
