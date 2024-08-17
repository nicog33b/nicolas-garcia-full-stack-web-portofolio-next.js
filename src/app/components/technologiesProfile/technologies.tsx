import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiDotnet,
  SiFigma,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

interface TechIconProps {
  name: string;
  Icon: React.ElementType;
}

const techIcons: TechIconProps[] = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Angular", Icon: FaAngular },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Java", Icon: FaJava },
  { name: "GitHub", Icon: FaGithub },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: ".NET", Icon: SiDotnet },
  { name: "Figma", Icon: SiFigma },
  { name: "React native", Icon: TbBrandReactNative },
  // ... más íconos de tecnologías
];

const TechIconsSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-1 mt-8 cursor-pointer">
      {techIcons.map((icon) => (
        <div
          key={icon.name}
          className="relative group p-2 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <icon.Icon
            size={48}
            className="text-gray-500 group-hover:text-gray-900"
          />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechIconsSection;
