'use client';

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from 'framer-motion';

// Components
import SeccionPerfil from "./components/profileSection/profileSection";
import SeccionTecnologias from "./components/technologiesProfile/technologies";
import Curriculum from "./components/resume/resume";
import Proyectos from "./components/projects/projects";
import FormularioContactoConPersonaje from "./components/contact/contactWithAnimation";

// Icons
import { ChevronUpIcon } from 'lucide-react';
import ProjectsNoSSR from "./components/projects/projectNoSsr";
import ContactWithAnimationNoSsr from "./components/contact/contactWithAnimationNoSsr";

export default function Inicio() {
  const [seccionActiva, setSeccionActiva] = useState('perfil');
  const [mostrarScrollArriba, setMostrarScrollArriba] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null); // Tipo de la referencia

  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-in-out",
      once: false,
    });

    const manejarScroll = () => {
      if (scrollRef.current) {
        const posicionScroll = scrollRef.current.scrollTop;
        const alturaVentana = scrollRef.current.clientHeight;

        // Determinar sección activa
        const secciones = ['perfil', 'tecnologias', 'proyectos', 'curriculum', 'contacto'];
        for (const seccion of secciones) {
          const elemento = document.getElementById(seccion);
          if (elemento) {
            const { top, bottom } = elemento.getBoundingClientRect();
            if (top <= alturaVentana / 2 && bottom >= alturaVentana / 2) {
              setSeccionActiva(seccion);
              break;
            }
          }
        }

        // Mostrar/ocultar botón de scroll hacia arriba
        setMostrarScrollArriba(posicionScroll > alturaVentana / 2);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', manejarScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', manejarScroll);
      }
    };
  }, []);

  const scrollArriba = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollRef} className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen overflow-y-scroll">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm px-2 mx-1">
        <ul className="flex justify-center space-x-6 py-4">
          {['Perfil', 'Tecnologias', 'Proyectos', 'Curriculum', 'Contacto'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-blue-400 transition-colors ${
                  seccionActiva === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-16">
        <section
          id="perfil"
          className="container mx-auto py-20 px-4"
          data-aos="fade-up"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SeccionPerfil />
          </motion.div>
        </section>

        <section id="tecnologias" className="bg-gray-800 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SeccionTecnologias />
          </motion.div>
        </section>

        <section
          id="proyectos"
          className="container mx-auto py-20 px-4"
          data-aos="fade-right"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectsNoSSR/>
          </motion.div>
        </section>

        <section
          id="curriculum"
          className="bg-gray-800 py-20"
          data-aos="fade-left"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Curriculum />
          </motion.div>
        </section>

        <section
          id="contacto"
          className="container mx-auto py-20 px-4"
          data-aos="fade-right"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactWithAnimationNoSsr />
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {mostrarScrollArriba && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollArriba}
            className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
