"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiDotnet,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface TechIconProps {
  name: string;
  Icon: React.ElementType;
}

const techIcons: TechIconProps[] = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Angular", Icon: FaAngular },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Java", Icon: FaJava },
  { name: "GitHub", Icon: FaGithub },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: ".NET", Icon: SiDotnet },
  { name: "Figma", Icon: SiFigma },
  { name: "React Native", Icon: TbBrandReactNative },
  // ... más íconos de tecnologías
];

const TechCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000, // Ajustado para que no sea tan rápido
    cssEase: "linear",
    pauseOnHover: false, // Pausa el carrusel cuando pasas el mouse
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 400,
        },
      },
    ],
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Ajusta este valor según tus necesidades
    };

    checkIsMobile(); // Verifica inmediatamente
    window.addEventListener("resize", checkIsMobile);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="w-full mx-auto my-0 py-2">
      <Slider {...settings}>
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="flex justify-center items-center focus:outline-none transform transition-transform duration-500 hover:scale-110"
          >
            <div className="relative group">
              <icon.Icon
                size={isMobile ? "69" : "96"}
                className="cursor-pointer text-gray-500 group-hover:text-white hover:shadow-sm shadow-zinc-400 p-2 transition-colors duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechCarousel;
