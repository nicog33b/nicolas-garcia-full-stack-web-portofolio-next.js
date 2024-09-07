import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import ContactForm from './finalContact';

const ContactFormWithCharacter = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const response = await fetch('/animation/develop.json');
      const data = await response.json();
      setAnimationData(data);
    };

    loadAnimation();
  }, []);

  if (!animationData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animación Lottie */}
      <div className="absolute inset-0">
        <Lottie animationData={animationData} className="w-full h-full opacity-90" />
      </div>

      {/* Formulario */}
      <div className="relative w-11/12 md:w-full bg-transparent bg-opacity-90  rounded-lg p-8 shadow-lg z-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormWithCharacter;
