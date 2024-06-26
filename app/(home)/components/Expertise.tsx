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
  SiMongoose,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import ThemeToggler from "@/components/ThemeToggler";

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
      text: "HTML5",
      Icon: SiHtml5,
    },
    {
      text: "CSS3",
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
    {
      text: "Mongoose",
      Icon: SiMongoose,
    },
    {
      text: "Trello",
      Icon: SiTrello,
    },
    {
      text: "AWS",
      Icon: SiAwslambda,
    },
  ];
  return (
    <div
      data-testid="skill"
      className="max-w-7xl mx-auto animate-move-down sm:max-w-full"
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
