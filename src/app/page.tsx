"use client";
import React, { useEffect, useState } from "react";
import Loading from "./components/home/loading";
import ProfileSection from "./components/profileSection/profileSection";
import ProjectCard from "./components/projects/projectCard";

const projects = [
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },

  // ... más proyectos
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="todo">
      <section id="profile">
        <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
          <ProfileSection></ProfileSection>
          {isLoading && <Loading setProgress={setProgress} />}
        </div>
      </section>
      <section
        id="projects"
        className="my-6 p-1 rounded bg-gradient-radial from-blue-300   via-violet-950  to-blue-300"
      >
        <h1 className="flex text-center text-white font-bold text-2xl justify-center">
          PROYECTOS{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
}
