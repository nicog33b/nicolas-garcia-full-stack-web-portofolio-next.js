import React from "react";
import { montserrat } from "@/app/fonts/fonts";

const Resume = () => {
  return (
    <div>
      <h2
        className={`${montserrat.className} text-4xl my-6 md:text-6xl font-extrabold text-white relative`}
      >
        Sobre mi
      </h2>

      <div className="w-full bg-[#f3f3ea] shadow-lg rounded-lg p-4 md:p-8 mb-8 text-gray-800">
        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Full-Stack Developer - Kuberalabs.com
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Remoto/Presencial/Híbrido | 01/24 - Actualidad
              </p>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>
                  Desarrollo y gestiono proyectos como parte de Kuberalabs.com,
                  donde lidero la implementación de soluciones Full-Stack que
                  optimizan procesos y mejoran la experiencia del usuario.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Analista - Slotting y Sistemas Tata S.A
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Remoto/Presencial/Híbrido | 02/22 - 02/23
              </p>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>
                  Me encargué de la optimización del slotting en el almacén,
                  asignando productos a ubicaciones estratégicas para mejorar la
                  eficiencia en la preparación de pedidos y reducir tiempos de
                  operación.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Desarrollador Web Freelance
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Remoto | 07/22 - Actualidad
              </p>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>
                  Me dedico a crear soluciones web a medida para clientes,
                  adaptándome a sus necesidades específicas y utilizando
                  tecnologías modernas para asegurar un resultado de alta
                  calidad.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Reparador de PC
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Presencial | 02/19 - 11/22
              </p>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>
                  Me encargo de la reparación y mantenimiento de hardware y
                  software, asegurando el buen funcionamiento de los sistemas y
                  la rápida resolución de problemas técnicos.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Bachillerato en Informática - UTU
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Montevideo, Uruguay
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Fines Redes y IT - UTU
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Montevideo, Uruguay
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Certificación en Desarrollo Web - Plan Ceibal - 400hrs
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Online</p>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>
                  <strong>
                    React Native: Aplicaciones nativas para IOS y Android
                  </strong>{" "}
                  - Fernando Herrera
                </li>
                <li>
                  <strong>
                    Cómo implementar un embudo de ventas en tu marca personal
                  </strong>{" "}
                  - DonWeb (Expedición: jun. 2024)
                </li>
                <li>
                  <strong>
                    Tailwind CSS: El curso definitivo de diseño web moderno
                  </strong>{" "}
                  - Udemy (Expedición: may. 2024)
                </li>
                <li>
                  <strong>Introduction to C# Programming and Unity</strong> -
                  Coursera (Expedición: ene. 2024)
                </li>
                <li>
                  <strong>CCNA: Introduction to Networks</strong> - Cisco
                  (Expedición: nov. 2023)
                </li>
                <li>
                  <strong>IT Essentials</strong> - Cisco (Expedición: nov. 2023)
                </li>
                <li>
                  <strong>Building a Complete MEAN Stack Application</strong> -
                  Coursera (Expedición: sept. 2023)
                </li>
                <li>
                  <strong>
                    Aspectos básicos del diseño de la experiencia del usuario
                  </strong>{" "}
                  - Google (Expedición: nov. 2022)
                </li>
                <li>
                  <strong>Excel Essentials for Data Analytics</strong> -
                  Coursera (Expedición: ago. 2022)
                </li>
                <li>
                  <strong>Front-End JavaScript Frameworks: Angular</strong> -
                  Coursera (Expedición: may. 2022)
                </li>
                <li>
                  <strong>Diseñando páginas web con Bootstrap 4</strong> -
                  Coursera (Expedición: nov. 2021)
                </li>
                <li>
                  <strong>
                    Introducción a la programación en Python I: Aprendiendo a
                    programar con Python
                  </strong>{" "}
                  - Coursera (Expedición: jul. 2020)
                </li>
                <li>
                  <strong>.Net Full Stack Foundation</strong> - Coursera
                </li>
                <li>
                  <strong>
                    Desarrollo full-stack Next.js - App routes y Side components
                  </strong>{" "}
                  - DonWeb
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
