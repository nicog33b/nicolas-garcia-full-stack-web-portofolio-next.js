import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const Welcome = () => {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const messages = [
    "Desarrollo Web Personalizado",
    "Soluciones Innovadoras",
    "Proyectos a Medida",
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
    <div className="relative flex items-center justify-center h-screen text-white overflow-hidden">
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
                distance: 400,
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
              distance: 22,
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
        className="relative text-center p-15 md:p-24 rounded-lg shadow-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg  max-w-7xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 text-blue-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
                  Bienvenidos />
                  
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-5xl font-medium text-blue-100"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        >
          {displayedText}
          {isTyping && <span className="animate-blink">|</span>}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Welcome;
