"use client";
import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider";
import ProjectCard from "./projectCard";
import "tiny-slider/dist/tiny-slider.css";
import { montserrat, roboto } from "@/app/fonts/fonts";
import "./projects.css";

const projects = [
  {
    id: 1,
    title: "Join",
    description: "Group management tool to optimize workflows.",
    image: "/path/to/image1.jpg", // Reemplaza con la ruta de la imagen
    demo: "https://example.com/join",
    github: "https://github.com/your-repo/join",
    tags: ["JavaScript", "Backend", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Pokedex",
    description: "A collection and description of all 898 Pokémon.",
    image: "/path/to/image2.jpg",
    demo: "https://example.com/pokedex",
    github: "https://github.com/your-repo/pokedex",
    tags: ["JavaScript", "API", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Sharkie",
    description: "JavaScript based jump-and-run game.",
    image: "/path/to/image3.jpg",
    demo: "https://example.com/sharkie",
    github: "https://github.com/your-repo/sharkie",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Portfolio 2022",
    description: "My portfolio website, you're probably looking at right now.",
    image: "/path/to/image4.jpg",
    demo: "https://example.com/portfolio-2022",
    github: "https://github.com/your-repo/portfolio-2022",
    tags: ["WebGL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Jelly Battle",
    description:
      "Play as Jelly and fight against three other Jellys in a multiplayer free-for-all game.",
    image: "/path/to/image5.jpg",
    demo: "https://example.com/jelly-battle",
    github: "https://github.com/your-repo/jelly-battle",
    tags: ["WebGL", "JavaScript", "Socket.IO", "HTML", "CSS"],
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      tns({
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
      <div ref={sliderRef} className="my-slider flex gap-8 justify-center">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-1/3">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
          &#8592;
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
          &#8594;
        </button>
      </div>
    </section>
  );
}
