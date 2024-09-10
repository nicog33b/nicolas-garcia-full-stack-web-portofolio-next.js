import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function ProfileSection() {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const messages = ["Nicolás García", "Full-stack Developer"];

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
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [activeMessageIndex]);

  return (
    <div className="container mx-auto px-4 py-2 md:py-6 max-w-4xl">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <div className="aspect-square">
              <Image
                src="/me.png"
                alt="Nicolás García"
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl md:rounded-l-3xl bg-gray-200 md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </h1>
       
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
             Desarrollador Full-Stack con más de 3+ años de experiencia, 
              combinando creatividad y técnica para proyectos de alto impacto. 
              Enfocado en soluciones innovadoras y eficiencia operativa.
            </p>
            <div className="flex flex-wrap gap-4">
              <SocialLink 
                href="https://www.linkedin.com/in/nicog33dev/" 
                icon={<FaLinkedin />} 
                label="LinkedIn" 
                bgColor="bg-blue-600" 
                hoverColor="hover:bg-blue-700" 
              />
              <SocialLink 
                href="https://github.com/nicog33b" 
                icon={<FaGithub />} 
                label="GitHub" 
                bgColor="bg-gray-700" 
                hoverColor="hover:bg-gray-600" 
              />
              <a
                href="/english-cv.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
              >
                <HiDownload className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label, bgColor, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white ${bgColor} ${hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out`}
    >
      {React.cloneElement(icon, { className: "mr-2 -ml-1 h-5 w-5" })}
      {label}
    </a>
  );
}