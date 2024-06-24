"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiAwslambda,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "React.js",
      Icon: SiReact,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "MySQL",
      Icon: SiMysql,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "GitHub",
      Icon: SiGithub,
    },
    {
      text: "Sass",
      Icon: SiSass,
    },
    {
      text: "MaterialUI",
      Icon: SiMui,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
  ];
  return (
    <div
      data-testid="skill"
      className="max-w-7xl mx-auto px-8 sm: animate-move-down"
    >
      <Title
        text="Expertise ⚡"
        className="flex flex-col items-center justify-center -rotate-3"
      />

      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
