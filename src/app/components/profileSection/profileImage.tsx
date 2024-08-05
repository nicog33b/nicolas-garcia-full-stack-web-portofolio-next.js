"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProfileImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex flex-col items-center duration-300 object-fill w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/me.png" // Asegúrate de poner la ruta correcta a tu imagen
        alt="Nicolás"
        width={600}
        height={800}
        className="md:rounded-xl object-cover rounded-full hover:border-2 hover:border-green-800 hover:border-opacity-90 bg-gray-200 bg-opacity-90 hover:bg-opacity-80 h-3/6 w-5/6 md:h-[33rem] md:w-[33rem] hover:duration-1000 z-20 transition-transform duration-500 cursor-pointer"
        priority
      />
      {isHovered && (
        <div className="absolute bottom-0 pt-8 translate-y-1/2 bg-green-800 bg-opacity-90  border-2 hover:border-green-800 hover:border-opacity-90  text-white leading-none cursor-pointer text-pretty font-serif rounded-full transition-opacity duration-500 px-4 py-2">
          Disponible
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
