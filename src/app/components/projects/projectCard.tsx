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
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
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
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Live View
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
