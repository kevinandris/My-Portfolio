import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Projects = () => {
  const projects = [
    {
      title: "Educational Course App",
      tech: [
        SiNextdotjs,
        SiTypescript,
        SiPrisma,
        SiMysql,
        SiTailwindcss,
        SiNodedotjs,
      ],
      link: "https://www.keipyhub.com",
      cover: "/study.jpg",
      background: "bg-orange-200",
    },
    {
      title: "Book Store App",
      tech: [SiReact, SiExpress, SiNodedotjs, SiMongodb, SiMongoose],
      link: "https://keipy.vercel.app",
      cover: "/library.jpg",
      background: "bg-purple-300",
    },
    {
      title: "Movie Trailer App",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiMongoose],
      link: "https://keipix.vercel.app",
      cover: "/movie.jpg",
      background: "bg-red-300",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🛠️"
        className="flex flex-col items-center justify-center rotate-3"
      />

      <div
        data-testid="project-item"
        className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5"
      >
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-50 space-y-5 cursor-grab"
                >
                  <div className="space-y-5">
                    <h1
                      data-testid="project-title"
                      className="text-2xl font-semibold"
                    >
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
