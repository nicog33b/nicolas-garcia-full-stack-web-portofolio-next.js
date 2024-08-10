import Image from "next/image";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState(0);

  const handleMouseMove = (e) => {
    const { offsetX, target } = e.nativeEvent;
    const width = target.clientWidth;
    const percentage = (offsetX / width) * 2 - 1; // -1 a 1
    const tiltAmount = percentage * 30; // Ajusta la cantidad de inclinación
    setTilt(tiltAmount);
  };

  const handleMouseLeave = () => {
    setTilt(0); // Resetear la inclinación cuando el mouse sale del área
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${tilt}deg)`,
        transition: "transform 0.1s",
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
