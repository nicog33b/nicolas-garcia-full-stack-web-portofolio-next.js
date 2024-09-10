'use client'

import React, { useEffect, useRef, useState } from 'react'
import { tns } from 'tiny-slider'
import ProjectCard from './projectCard'
import ProjectCardMobile from './projectCardMobile'
import 'tiny-slider/dist/tiny-slider.css'
import { montserrat, roboto } from '@/app/fonts/fonts'
import './projects.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { dataProject } from '@/app/services/dataProject'

export default function Projects() {
  const sliderRef = useRef(null)
  const [sliderInstance, setSliderInstance] = useState(null)
  const [projects, setProjects] = useState(dataProject)
  const [imageIndexes, setImageIndexes] = useState(projects.map(() => 0))
  const [delayIfMobile, setDelayIfMobile] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Este efecto asegura que el código solo se ejecuta en el cliente
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && sliderRef.current) {
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
          640: { items: 1 },
          900: { items: 2 },
          1200: { items: 3 },
        },
      })
      setSliderInstance(slider)
    }
  }, [isClient])

  useEffect(() => {
    if (isClient) {
      const isMobile = window.innerWidth <= 640
      setDelayIfMobile(isMobile ? 2000 : 3000)
    }
  }, [isClient])

  useEffect(() => {
    if (isClient) {
      const intervalId = setInterval(() => {
        setImageIndexes((prevIndexes) =>
          prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
        )
      }, delayIfMobile)

      return () => clearInterval(intervalId)
    }
  }, [projects, delayIfMobile, isClient])

  return (
    <section
      id="projects"
      className="w-full mx-auto py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ease-in-out"
      data-aos="fade-right"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`${roboto.className} text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 text-center`}
        >
          Para ver más trabajos privados, contáctame.
        </h2>
        <h3
          className={`${montserrat.className} text-3xl md:text-4xl text-orange-400 relative projects-title cursor-pointer text-center mb-12 hover:text-orange-500 transition-colors duration-300`}
        >
          Proyectos
        </h3>
        <div
          ref={sliderRef}
          className="my-slider flex gap-6 justify-center py-8 md:py-12"
        >
          {projects.map((project, i) => (
            <div key={project.id} className="w-full md:w-1/3 px-2">
              {isClient && (window.innerWidth <= 640) ? (
                <ProjectCardMobile project={project} imageIndex={imageIndexes[i]} />
              ) : (
                <ProjectCard project={project} imageIndex={imageIndexes[i]} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-6">
          <button
            onClick={() => sliderInstance && sliderInstance.goTo('prev')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 flex items-center shadow-lg"
          >
            <AiOutlineLeft size={24} className="mr-2" />
            <span className="sr-only md:not-sr-only">Anterior</span>
          </button>
          <button
            onClick={() => sliderInstance && sliderInstance.goTo('next')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 flex items-center shadow-lg"
          >
            <span className="sr-only md:not-sr-only">Siguiente</span>
            <AiOutlineRight size={24} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
