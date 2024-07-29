"use client";
import React, { useEffect, useState } from "react";
import ProfileImage from "./components/home/profileImage";
import Loading from "./components/home/loading";
import NameHeader from "./components/home/nameHeader";
import SocialIcons from "./GUI/socialIcons";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center">
        <ProfileImage progress={progress} />
        {!isLoading && (
          <div className="text-center mt-12">
            <p className="text-lg md:text-xl leading-relaxed mb-1 select-none cursor-crosshair text-primario">
              Desarrollador Full-Stack apasionado por crear experiencias
              digitales únicas y soluciones tecnológicas innovadoras.
            </p>
          </div>
        )}
      </div>

      {isLoading && <Loading setProgress={setProgress} />}
    </div>
  );
}
