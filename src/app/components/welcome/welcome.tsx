import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const Welcome = () => {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const messages = [
    "Proyectos a Medida",
    "Soluciones Innovadoras",
    "Desarrollo Web Personalizado",
    "Experiencia en React, Next.js y más",
  ];

  useEffect(() => {
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < messages[activeMessageIndex].length) {
        setDisplayedText(
          messages[activeMessageIndex].substring(0, charIndex + 1)
        );
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayedText("");
          setActiveMessageIndex((prevIndex) =>
            prevIndex === messages.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Pausa antes de pasar al siguiente mensaje
      }
    }, 100); // Velocidad de escritura

    return () => clearInterval(typeInterval);
  }, [activeMessageIndex]);

  return (
    <div className="relative flex items-center justify-center rounded-lg h-screen text-white overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <motion.div
        className="relative text-center p-10 md:rounded-lg shadow-2xl bg-opacity-90 backdrop-blur-md md:bg-[#162447] max-w-4xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold  mb-4 text-yellow-100"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          Hello, I'm Nicolás
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-gray-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        >
          {displayedText}
          {isTyping && <span className="animate-blink">|</span>}
        </motion.h2>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/nicog33dev"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/nicog33dev"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <div className="mt-6 flex justify-center space-x-4 ">
          <a
            href="#contact"
            className="px-6 py-2 bg-yellow-100 text-black font-bold rounded-full hover:bg-yellow-200 transition duration-300"
          >
            Hire me!
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-yellow-100 text-white hover:text-black font-bold rounded-full hover:bg-yellow-200 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
