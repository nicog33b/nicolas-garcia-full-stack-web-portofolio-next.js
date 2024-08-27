import React, { useEffect, useRef, useState } from "react";
import { tns } from "tiny-slider";
import ProjectCard from "./projectCard";
import "tiny-slider/dist/tiny-slider.css";
import { montserrat, roboto } from "@/app/fonts/fonts";
import "./projects.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

//objeto con todos los proyectos.
import { dataProject } from "@/app/services/dataProject";



export default function Projects() {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null); // Nuevo estado
  const [projects, setProjects] = useState(dataProject)


  useEffect(() => {
    if (sliderRef.current) {
      const slider = tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 1,
        mode: "carousel",
        controls: false,
        nav: false,
        arrowKeys: true,
        autoplay: false,
        responsive: {
          640: {
            items: 1,
          },
          900: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
      setSliderInstance(slider); // Guardar la instancia del slider
    }
  }, []);

  return (
    <section
      id="projects"
      className="w-full mx-auto md:p-24 rounded-lg shadow-lg transition-opacity duration-1000 projects-section"
      data-aos="fade-right"
    >
      <h2
        className={`${roboto.className} text-5xl font-bold text-[#2d2d2d] leading-tight mb-8 text-center`}
      >
        Some things I've worked on
      </h2>
      <h2
        className={`${montserrat.className} text-4xl md:text-5xl  text-[#ffcba8] relative projects-title cursor-pointer text-center mb-12`}
      >
        Proyectos
      </h2>
      <div
        ref={sliderRef}
        className="my-slider flex gap-4 justify-center py-24"
      >
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-1/3">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => sliderInstance.goTo("prev")} // Usar la instancia del slider
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
        >
          <AiOutlineLeft size={36} className="mr-2" />{" "}
          {/* Icono de flecha izquierda */}
        </button>
        <button
          onClick={() => sliderInstance.goTo("next")} // Usar la instancia del slider
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
        >
          <AiOutlineRight size={36} className="ml-2" />{" "}
          {/* Icono de flecha derecha */}
        </button>
      </div>
    </section>
  );
}
