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
import Contact from "./components/contact/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1100, // Duración de la animación
      easing: "ease-in-out", // Efecto de suavizado
      once: false, // Si la animación debe ocurrir solo una vez
    });
  }, []);

  return (
    <div className="">
      <div className="my-2 items-center">
        <section
          id="profile"
          className="container mx-auto py-12 px-4 md:py-20 md:px-8 lg:py-32"
          data-aos="fade-up"
        >
          <div className="w-full flex flex-col items-center justify-center gap-8 lg:gap-16">
            <ProfileSection />
          </div>
        </section>

        <section id="technologies" className="w-full px-9">
          <TechIconsSection />
        </section>

        <section
          id="projects"
          className="flex justify-center  py-36"
          data-aos="fade-right"
        >
          <div className="w-full rounded-lg">
            <Projects></Projects>
          </div>
        </section>

        <section
          id="resume"
          className="flex justify-center py-3"
          data-aos="fade-left"
        >
          <div className="container w-full px-2 rounded-lg">
            <Resume />
          </div>
        </section>

        <section id="contact"
            data-aos="fade-right"
            >
          <Contact></Contact>
        </section>
      </div>
    </div>
  );
}
