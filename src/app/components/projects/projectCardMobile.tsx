import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai'; // Importa el ícono de GitHub

const ProjectCardMobile = ({ project, imageIndex }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <div className="relative w-full h-40">
        <Image
          src={project.images[imageIndex] || ''} // Usa el índice de imagen para mostrar la imagen correspondiente
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{project.title}</h3>
      <p className="text-sm text-gray-600 text-center">{project.description}</p>
      <div className="flex space-x-2">
        {project.github && (
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300" />
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default ProjectCardMobile;
