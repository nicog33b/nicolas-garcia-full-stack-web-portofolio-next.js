import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  AiFillGithub } from "react-icons/ai"; // Importa el ícono de lupa

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState(0);
  const [index, setIndex] = useState(0)

  const handleMouseMove = (e) => {
    const { offsetX, target } = e.nativeEvent;
    const width = target.clientWidth;
    const percentage = (offsetX / width) * 2 - 1;
    const tiltAmount = percentage * 10;
    setTilt(tiltAmount);
  };

  const handleMouseLeave = () => {
    setTilt(0);
  };

   useEffect(()=>{
    if(index >= project.images.length){
      setIndex(0);
    }
    setTimeout(() => {
      setIndex(index+1)
    }, 4000);
   },[index, project.images.length])

  return (
    <div
      className="bg-[#f5f5f5] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${tilt}deg)`,
        transition: "transform 0.1s",
        height: '100%', // Establece la altura del contenedor
      }}
    >
      <div className="relative w-full h-64 md:h-52 lg:h-80"> {/* Ajusta la altura de la imagen */}
        <Image
          src={project.images[index]}
          alt={project.title}
          layout="fill" // Hace que la imagen ocupe todo el contenedor
          objectFit="cover" // Asegura que la imagen mantenga su proporción y cubra todo el espacio
          className="rounded-t-xl cursor-pointer"
        />


        
        {/*
        <div className="absolute bottom-2 right-2  rounded-full p-1 shadow-md cursor-pointer">
          <Link href=''>
          <AiFillGithub  className=" rounded-full border bg-white text-gray-800 hover:bg-gray-300" size={33} />
          </Link>
        </div>
    {project.demo === "" && <>
        <div className="absolute bottom-14 right-2   rounded-full p-1 shadow-md cursor-pointer">
          <Link href=''>
          <AiFillGithub  className=" rounded-full border bg-white text-gray-800 hover:bg-gray-300" size={33} />
          </Link>
        </div>
        </>}
        */}

      </div>
      <div className="p-6 flex flex-col justify-between h-full"> {/* Asegura que el contenido ocupe el espacio restante */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-300 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-6">{project.description}</p>
        </div>
    
      </div>
    </div>
  );
};

export default ProjectCard;
