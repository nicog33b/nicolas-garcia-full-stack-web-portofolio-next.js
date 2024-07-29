"use client";
import React from "react";

const NameHeader: React.FC = () => {
  return (
    <div className="relative cursor-pointer w-full flex justify-center items-center bg-transparent py-12">
      <h1 className=" text-2xl justify-center align-middle  whitespace-nowrap md:text-6xl text-primario select-none press-start-2p-regular md:hover:text-7xl hover:duration-500 p-2 rounded-lg hover:scale-105 hover:text-black">
        NICOLÁS GARCÍA
      </h1>
    </div>
  );
};

export default NameHeader;
