"use client";
import React, { useEffect, useState, useRef } from "react";

//components
import ProfileSection from "./components/profileSection/profileSection";
import ProjectCard from "./components/projects/projectCard";

//libs

//icons
import { FaChevronDown } from "react-icons/fa";
import TechIconsSection from "./components/technologiesProfile/technologies";
import Resume from "./components/resume/resume";
import Welcome from "./components/welcome/welcome";

// Sample projects array
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a description of project one.",
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a description of project two.",
    link: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a description of project three.",
    link: "https://example.com/project-three",
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      <div className="my-8 items-center">
        <section id="welcome" className="w-full mx-2 px-2">
          <Welcome></Welcome>
        </section>

        <section
          id="projects"
          className={
            "container mx-auto my-6 p-4 md:p-8 rounded-lg bg-gray-700/80 shadow-lg transition-opacity duration-1000"
          }
        >
          <h2 className="text-center text-2xl font-bold mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="resume" className="flex justify-center py-12">
          <div className="container w-full p-8 rounded-lg">
            <Resume />
          </div>
        </section>

        <section
          id="profile"
          className="container mx-auto py-12 px-4 md:py-20 md:px-8 lg:py-32"
        >
          <div className="flex flex-col items-center justify-center gap-8 lg:gap-16">
            <ProfileSection />
            <div className="w-full px-9 ">
              <TechIconsSection />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
