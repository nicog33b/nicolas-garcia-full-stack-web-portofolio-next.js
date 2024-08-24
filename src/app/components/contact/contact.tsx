import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:max-w-3xl w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <div className="bg-transparent text-white text-center p-6">
            <h2 className="text-3xl font-extrabold mb-2 text-zinc-900  ">Contactame</h2>
            <p className="text-zinc-600 font-bold">¿Tienes una idea en mente? Hablemos y hagámosla realidad.</p>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div className="flex items-center border-b-2 border-blue-600 py-2">
                <FaUser className="text-blue-600 mr-2" />
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-blue-600 py-2">
                <FaEnvelope className="text-blue-600 mr-2" />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-blue-600 py-2">
                <FaPhone className="text-blue-600 mr-2" />
                <input
                  type="text"
                  placeholder="Número de Teléfono"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-blue-600 py-2">
                <MdMessage className="text-blue-600 mr-2" />
                <textarea
                  placeholder="Tu Mensaje"
                  className="w-full px-3 py-2 outline-none h-24 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center">
          <Image
          width={900}
          height={900}
            src="/contactimage.jpg" 
            alt="Contact Us"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
