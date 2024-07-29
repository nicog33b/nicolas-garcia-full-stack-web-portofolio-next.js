"use client";
import React from "react";
import Image from "next/image";
import NameHeader from "./nameHeader";

interface ProfileImageProps {
  progress?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ progress = 100 }) => {
  return (
    <div className="relative w-full flex flex-col items-center p-4 rounded-2xl duration-300">
      <div
        className="relative z-10"
        style={{
          clipPath: `polygon(
            0 0, 
            ${progress}% 0, 
            ${progress}% 100%, 
            0 100%,
            0 ${100 - progress}%, 
            100% ${100 - progress}%
          )`,
        }}
      >
        <Image
          src="/me.png"
          alt="Nicolás"
          width={900}
          height={900}
          className="bg-white bg-opacity-50 h-[22rem] w-[22rem] md:h-[30rem] md:w-[30rem] hover:duration-1000 z-20 rounded-full transition-transform duration-500 cursor-pointer"
          style={{
            opacity: (progress / 100) * 0.9,
            transform: `scale(${1.5 - (progress / 100) * 0.5})`,
          }}
          priority
        />
      </div>
    </div>
  );
};

export default ProfileImage;
