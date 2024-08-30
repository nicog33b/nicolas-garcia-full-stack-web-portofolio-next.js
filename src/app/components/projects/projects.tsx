import React, { useEffect, useRef, useState } from 'react';
import { tns } from 'tiny-slider';
import ProjectCard from './projectCard';
import ProjectCardMobile from './projectCardMobile'; // Importa el componente para móviles
import 'tiny-slider/dist/tiny-slider.css';
import { montserrat, roboto } from '@/app/fonts/fonts';
import './projects.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { dataProject } from '@/app/services/dataProject';

export default function Projects() {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const [projects, setProjects] = useState(dataProject);
  const [imageIndexes, setImageIndexes] = useState(
    projects.map(() => 0) // Inicializa un índice de imagen para cada proyecto
  );
  const [delayIfMobile, setDelayIfMobile] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 1,
        mode: 'carousel',
        controls: false,
        nav: false,
        arrowKeys: true,
        autoplay: false,
        loop: false,
        rewind: false,
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
      setSliderInstance(slider);
    }
  }, []);

        // Detecta si es móvil usando un ancho de pantalla máximo
        const isMobile = window.innerWidth <= 640;

  useEffect(()=>{
  if(!isMobile){
    setDelayIfMobile(3000);
  }else{
    setDelayIfMobile(2000);
  }

  },[isMobile])

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, delayIfMobile);

    return () => clearInterval(intervalId);
  }, [projects, delayIfMobile]);



  return (
    <section
      id="projects"
      className="w-full mx-auto md:py-24 rounded-lg shadow-lg transition-opacity duration-1000 projects-section"
      data-aos="fade-right"
    >
      <h2
        className={`${roboto.className} text-5xl font-bold text-[#2d2d2d] leading-tight mb-8 text-center`}
      >
        Some things I've worked on
      </h2>
      <h2
        className={`${montserrat.className} text-4xl md:text-5xl text-[#ffcba8] relative projects-title cursor-pointer text-center mb-12`}
      >
        Proyectos
      </h2>
      <div
        ref={sliderRef}
        className="my-slider flex gap-4 justify-center  md:py-24"
      >
        {projects.map((project, i) => (
          <div key={project.id} className="w-full md:w-1/3">
            {isMobile ? (
              <ProjectCardMobile project={project} imageIndex={imageIndexes[i]} />
            ) : (
              <ProjectCard project={project} imageIndex={imageIndexes[i]} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 space-x-4">
        <button
          onClick={() => sliderInstance.goTo('prev')}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
        >
          <AiOutlineLeft size={36} className="mr-2" />
        </button>
        <button
          onClick={() => sliderInstance.goTo('next')}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
        >
          <AiOutlineRight size={36} className="ml-2" />
        </button>
      </div>
    </section>
  );
}
