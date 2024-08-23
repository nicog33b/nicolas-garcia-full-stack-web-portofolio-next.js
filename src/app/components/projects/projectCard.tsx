import Image from "next/image";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState(0);

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

  return (
    <div
      className="bg-[#f5f5f5] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${tilt}deg)`,
        transition: "transform 0.1s",
      }}
    >
      <div className="relative w-full h-56">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
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
        <div className="flex space-x-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Live View
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
