import React from "react";
import ProfileImage from "./profileImage";

const ProfileSection = () => {
  return (
    <div
      id="div_imagen_data_profile"
      className="md:border md:border-white md:bg-gradient-to-r md:from-gray-700 md:via-blue-900 md:to-gray-800 bg-opacity-80 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-7xl"
    >
      <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-6">
        <ProfileImage />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-emerald-100 text-3xl md:text-5xl font-bold mb-4">
          Nicolás García
        </h1>
        <p className="text-lg md:text-4xl leading-tight text-slate-200 mb-6 pb-3">
          Experto en desarrollo Full-Stack, combinando creatividad y técnica
          para proyectos de alto impacto. Enfocado en soluciones innovadoras y
          eficiencia operativa. <br />
        </p>
        <p className="text-yellow-100 text-3xl font-bold py-3"></p>
      </div>
    </div>
  );
};

export default ProfileSection;
