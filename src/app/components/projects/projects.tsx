"use client";
import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider";
import ProjectCard from "./projectCard";
import "tiny-slider/dist/tiny-slider.css";
import { montserrat, roboto } from "@/app/fonts/fonts";
import "./animation-bounce-letter.css";
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a description of project one.",
    image: "/path/to/image1.jpg", // Añade la ruta de la imagen
    demo: "https://example.com/project-one",
    github: "https://github.com/your-repo/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a description of project two.",
    image: "/path/to/image2.jpg",
    demo: "https://example.com/project-two",
    github: "https://github.com/your-repo/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a description of project three.",
    image: "/path/to/image3.jpg",
    demo: "https://example.com/project-three",
    github: "https://github.com/your-repo/project-three",
  },
  {
    id: 4,
    title: "Project One",
    description: "This is a description of project one.",
    image: "/path/to/image1.jpg", // Añade la ruta de la imagen
    demo: "https://example.com/project-one",
    github: "https://github.com/your-repo/project-one",
  },
  {
    id: 5,
    title: "Project Two",
    description: "This is a description of project two.",
    image: "/path/to/image2.jpg",
    demo: "https://example.com/project-two",
    github: "https://github.com/your-repo/project-two",
  },
  {
    id: 6,
    title: "Project Three",
    description: "This is a description of project three.",
    image: "/path/to/image3.jpg",
    demo: "https://example.com/project-three",
    github: "https://github.com/your-repo/project-three",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      tns({
        container: sliderRef.current,
        items: 3,
        slideBy: 1,
        mode: "carousel",
        controls: false,
        arrowKeys: true,
        animateIn: "tns-fadeIn",

        responsive: {
          640: {
            items: 2,
          },
          900: {
            items: 3,
          },
        },
      });
    }
  }, []);

  return (
    <section
      id="projects"
      className="w-full mx-auto my-6 p-4 md:p-8 rounded-lg shadow-lg transition-opacity duration-1000"
      data-aos="fade-right"
    >
      <h2
        className={`${montserrat.className} text-5xl md:text-6xl font-extrabold text-white relative`}
      >
        <span className="animate-bounce-letters">P</span>
        <span className="animate-bounce-letters">r</span>
        <span className="animate-bounce-letters">o</span>
        <span className="animate-bounce-letters">y</span>
        <span className="animate-bounce-letters">e</span>
        <span className="animate-bounce-letters">c</span>
        <span className="animate-bounce-letters">t</span>
        <span className="animate-bounce-letters">o</span>
        <span className="animate-bounce-letters">s</span>
      </h2>

      <div ref={sliderRef} className="my-slider">
        {projects.map((project) => (
          <div key={project.id} className="p-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
