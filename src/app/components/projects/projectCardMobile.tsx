import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export default function ProjectCardMobile({ project, imageIndex }:any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4 border border-gray-100">
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={project.images[imageIndex] || ''}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800">{project.title}</h3>
      <p className="text-sm text-gray-600 text-center line-clamp-3">{project.description}</p>
      <div className="flex space-x-4">
        {project.github && (
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-3xl text-gray-800 hover:text-orange-500 transition duration-300" />
          </Link>
        )}
        {project.link && (
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <AiOutlineLink className="text-3xl text-gray-800 hover:text-orange-500 transition duration-300" />
          </Link>
        )}
      </div>
    </div>
  )
}