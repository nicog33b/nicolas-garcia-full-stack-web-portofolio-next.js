import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    emailjs.send(
      'service_5vdse79',  // Reemplaza con tu Service ID
      'template_zspgclp',  // Reemplaza con tu Template ID
      formState,
      'bzvpY5ZGwsqDu3T_3'       // Reemplaza con tu User ID
    )
    .then((result) => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, (error) => {
      setErrorMessage('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 bg-transparent text-white">
      <h2 className="text-3xl font-bold mb-8 text-left">Contáctame</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border text-blue-300 bg-gray-600 bg-opacity-45 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border text-blue-300 bg-gray-600 bg-opacity-45 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-300 bg-gray-600 bg-opacity-45 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formState.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-300 bg-gray-600 bg-opacity-45 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none"
            required
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md bg-gray-200 text-zinc-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </div>
        {isSubmitted && <p className="mt-4 text-green-500">Mensaje enviado con éxito.</p>}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
