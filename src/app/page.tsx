"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//components
import ProfileSection from "./components/profileSection/profileSection";
import TechIconsSection from "./components/technologiesProfile/technologies";
import Resume from "./components/resume/resume";
import Welcome from "./components/welcome/welcome";
import Projects from "./components/projects/projects";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Duración de la animación
      easing: "ease-in-out", // Efecto de suavizado
      once: false, // Si la animación debe ocurrir solo una vez
    });
  }, []);

  return (
    <div className="text-white">
      <div className="my-2 items-center">
        <section
          id="profile"
          className="container mx-auto py-12 px-4 md:py-20 md:px-8 lg:py-32"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center gap-8 lg:gap-16">
            <ProfileSection />
            <div className="w-full px-9">
              <TechIconsSection />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="flex justify-center py-3"
          data-aos="fade-right"
        >
          <div className="w-full p-8 rounded-lg">
            <Projects></Projects>
          </div>
        </section>

        <section
          id="resume"
          className="flex justify-center py-3"
          data-aos="fade-left"
        >
          <div className="container w-full p-8 rounded-lg">
            <Resume />
          </div>
        </section>
      </div>
    </div>
  );
}
