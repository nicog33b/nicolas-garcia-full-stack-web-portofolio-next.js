import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project, imageIndex }:any) => {
  const [tilt, setTilt] = useState(0);

  const handleMouseMove = (e:any) => {
    const { offsetX, target } = e.nativeEvent;
    const width = target.clientWidth;
    const percentage = (offsetX / width) * 2 - 1;
    const tiltAmount = percentage * 10;
    setTilt(tiltAmount);
  };

  const handleMouseLeave = () => {
    setTilt(0);
  };

  return (
    <div
      className="bg-[#f5f5f5] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${tilt}deg)`,
        transition: "transform 0.1s",
        height: "100%",
      }}
    >
      <div className="relative h-full w-full md:h-52 lg:h-80">
        <Image
          src={project.images[imageIndex]} // Usa el índice de imagen pasado como prop
          alt={project.title}
          width={900}
          height={900}
          className="rounded-t-xl cursor-pointer w-full h-full object-contain"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag:any, index:any) => (
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

        {/* Sección de iconos en la parte inferior de la tarjeta */}
        <div className="flex justify-end mt-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 py-2 px-4 rounded-full shadow-md"
            >
              <AiFillGithub className="text-2xl text-gray-800 hover:text-gray-600 transition duration-300" />
              <span className="text-sm font-medium text-gray-800">
                Ver en GitHub
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
