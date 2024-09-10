import { HiDownload } from "react-icons/hi"
import { useState } from "react"

export default function Component() {
  const [openSection, setOpenSection] = useState('experience')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section)
  }

  const SectionHeader = ({ title, isOpen, onClick }: { title: string, isOpen: boolean, onClick: () => void }) => (
    <div
      className="flex items-center justify-between text-2xl font-bold mb-6 cursor-pointer group"
      onClick={onClick}
    >
      <span className="text-orange-500 group-hover:text-orange-700 transition-colors duration-200">
        {isOpen ? "▾" : "▸"} {title}
      </span>
      <div
        className={`w-16 h-1 bg-orange-500 rounded-full transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 w-0"
        }`}
      ></div>
    </div>
  )

  const ExperienceItem = ({ title, company, period, description }: { title: string, company: string, period: string, description: string }) => (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{company} | {period}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  )

  const EducationItem = ({ title, institution, location }: { title: string, institution: string, location: string }) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{institution}, {location}</p>
    </div>
  )

  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8 mb-8">
        <h2 className="text-5xl font-bold mb-12 text-gray-800 border-b-4 border-orange-500 pb-4">
          Resumen
        </h2>

        <section className="mb-12">
          <SectionHeader
            title="Experiencia"
            isOpen={openSection === 'experience'}
            onClick={() => toggleSection('experience')}
          />
          {openSection === 'experience' && (
            <div className="space-y-6">
              <ExperienceItem
                title="Full-Stack Developer"
                company="Kuberalabs.com"
                period="01/24 - Actualidad"
                description="Desarrollo y gestiono proyectos como parte de Kuberalabs.com, donde lidero la implementación de soluciones Full-Stack que optimizan procesos y mejoran la experiencia del usuario."
              />
              <ExperienceItem
                title="Analista - Slotting y Sistemas"
                company="Tata S.A"
                period="02/22 - 02/23"
                description="Me encargué de la optimización del slotting en el almacén, asignando productos a ubicaciones estratégicas para mejorar la eficiencia en la preparación de pedidos y reducir tiempos de operación."
              />
              <ExperienceItem
                title="Desarrollador Web Freelance"
                company="Autónomo"
                period="07/22 - Actualidad"
                description="Me dedico a crear soluciones web a medida para clientes, adaptándome a sus necesidades específicas y utilizando tecnologías modernas para asegurar un resultado de alta calidad."
              />
            </div>
          )}
        </section>

        <section className="mb-12">
          <SectionHeader
            title="Educación"
            isOpen={openSection === 'education'}
            onClick={() => toggleSection('education')}
          />
          {openSection === 'education' && (
            <div className="space-y-4">
              <EducationItem
                title="Bachillerato en Informática"
                institution="UTU"
                location="Montevideo, Uruguay"
              />
              <EducationItem
                title="Fines Redes y IT"
                institution="UTU"
                location="Montevideo, Uruguay"
              />
              <EducationItem
                title="Certificación en Desarrollo Web"
                institution="Plan Ceibal - 400hrs"
                location="Online"
              />
            </div>
          )}
        </section>

        <section className="mb-12">
          <SectionHeader
            title="Cursos"
            isOpen={openSection === 'courses'}
            onClick={() => toggleSection('courses')}
          />
          {openSection === 'courses' && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>React Native: Aplicaciones nativas para IOS y Android - Fernando Herrera</li>
              <li>Cómo implementar un embudo de ventas en tu marca personal - DonWeb</li>
              <li>Tailwind CSS: El curso definitivo de diseño web moderno - Udemy</li>
              <li>Introduction to C# Programming and Unity - Coursera</li>
              <li>CCNA: Introduction to Networks - Cisco</li>
              <li>IT Essentials - Cisco</li>
              <li>Building a Complete MEAN Stack Application - Coursera</li>
              <li>Aspectos básicos del diseño de la experiencia del usuario - Google</li>
              <li>Excel Essentials for Data Analytics - Coursera</li>
              <li>Front-End JavaScript Frameworks: Angular - Coursera</li>
            </ul>
          )}
        </section>
        <div className="text-center mt-12">
        <a
                href="/english-cv.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
              >
                <HiDownload className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                Descargar CV
              </a>
        </div>
      </div>
    </div>
  )
}