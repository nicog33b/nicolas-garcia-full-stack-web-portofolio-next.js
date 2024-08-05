import ProjectCard from "../projects/projectCard";

const projects = [
  {
    title: "Mi Proyecto Web",
    description: "Descripción del proyecto...",
    image: "/images/project1.jpg",
    demo: "https://miproyecto.com",
    github: "https://github.com/usuario/miproyecto",
  },
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
