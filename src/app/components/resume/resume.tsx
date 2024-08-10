import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="w-full bg-[#f3f3ea] shadow-lg rounded-lg p-8 mb-8 text-gray-800">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Nicolás García</h1>
        <p className="text-gray-600">Full Stack Developer</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+1234567890"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/yourprofile"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </header>

      {/* Sections */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Job Title - Company Name</h3>
            <p className="text-gray-600">Location | Dates</p>
            <ul className="list-disc list-inside mt-2">
              <li>Responsibility or achievement</li>
              <li>Responsibility or achievement</li>
              <li>Responsibility or achievement</li>
            </ul>
          </div>
          {/* Add more experiences as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Degree - Institution Name</h3>
            <p className="text-gray-600">Location | Dates</p>
            <p className="mt-2">Description or achievements</p>
          </div>
          {/* Add more education entries as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 1</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 2</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">Skill 3</span>
          {/* Add more skills as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600">
              Description of the project and what technologies were used.
            </p>
            <a
              href="https://example.com/project-link"
              className="text-blue-600 hover:text-blue-800"
            >
              Project Link
            </a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    </div>
  );
};

export default Resume;
