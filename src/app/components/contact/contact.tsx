import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="bg-beige min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        {/* Formulario de contacto */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-3xl font-bold text-navy mb-6">Contact me</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message :</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

                   
        <div className="hidden md:block md:w-1/2">
          <Image width={1200} height={1200} src="/path-to-your-image.jpg" alt="Contact Image" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
