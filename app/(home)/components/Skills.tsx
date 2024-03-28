"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiAwslambda,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMatterdotjs,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Tailwindcss",
      Icon: SiTailwindcss,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
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
      text: "ReactJS",
      Icon: SiReact,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "ExpressJS",
      Icon: SiExpress,
    },
    {
      text: "NodeJs",
      Icon: SiNodedotjs,
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
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "GitHub",
      Icon: SiGithub,
    },
    {
      text: "MySQL",
      Icon: SiMysql,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Title
        text="Expertise ⚡"
        className="flex flex-col items-center justify-center -rotate-3"
      />

      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
