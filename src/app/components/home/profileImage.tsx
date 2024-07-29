"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoDiscord,
  BiEnvelope,
  BiLogoWhatsapp,
  BiLogoGithub,
} from "react-icons/bi";
import NameHeader from "./nameHeader";

interface ProfileImageProps {
  progress?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ progress = 100 }) => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center mb-12 p-2 rounded-2xl duration-300 mt-12">
      <NameHeader></NameHeader>
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
        {" "}
        <Image
          src="/me.png"
          alt="Nicolás"
          width={900}
          height={900}
          className="bg-white bg-opacity-50  h-[22rem] w-[22rem] md:h-[30rem] md:w-[30rem] hover:duration-1000 z-20 rounded-full transition-transform duration-500 cursor-pointer"
          style={{
            opacity: (progress / 100) * 0.9,
            transform: `scale(${1.5 - (progress / 100) * 0.5})`,
          }}
          priority
        />
      </div>
      {showIcons && (
        <div className="flex gap-2 text-xl mt-8 relative z-10 transition-opacity duration-1000 opacity-100">
          {[
            {
              href: "https://linkedin.com",
              color: "blue-600",
              icon: BiLogoLinkedin,
            },
            {
              href: "https://facebook.com",
              color: "blue-500",
              icon: BiLogoFacebook,
            },
            {
              href: "https://instagram.com",
              color: "pink-500",
              icon: BiLogoInstagram,
            },
            {
              href: "https://discord.com",
              color: "indigo-500",
              icon: BiLogoDiscord,
            },
            {
              href: "https://github.com",
              color: "indigo-500",
              icon: BiLogoGithub,
            },
            {
              href: "mailto:example@example.com",
              color: "red-500",
              icon: BiEnvelope,
            },
            {
              href: "https://wa.me/1234567890",
              color: "green-500",
              icon: BiLogoWhatsapp,
            },
          ].map(({ href, color, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-${color} hover:bg-indigo-500 hover:duration-300 hover:bg-opacity-85 text-white hover:scale-105 text-3xl bg-secundario  rounded-full p-2`}
            >
              <Icon />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
