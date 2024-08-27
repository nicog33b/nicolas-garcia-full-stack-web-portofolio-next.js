import { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl relative">
        <button
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex flex-col md:flex-row">
          {/* Carrusel de imágenes */}
          <div className="relative w-full md:w-1/2 h-80 bg-gray-200">
            <Image
              src={project.images[currentImageIndex]}
              alt={`Project Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              onClick={prevImage}
            >
              <AiOutlineLeft size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              onClick={nextImage}
            >
              <AiOutlineRight size={24} />
            </button>
          </div>
          {/* Información del proyecto */}
          <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>
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
              <p className="text-gray-700 mb-6">{project.additionalInfo}</p>
            </div>
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
      </div>
    </div>
  );
};

export default ProjectModal;
