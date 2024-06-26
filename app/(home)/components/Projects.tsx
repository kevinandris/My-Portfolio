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
  SiRedux,
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
      id: 1,
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
      githubLink: "https://github.com/kevinandris/Keipy_Hub",
      cover: "/study.jpg",
      background: "bg-orange-200",
    },
    {
      id: 2,
      title: "Book Store App",
      tech: [SiReact, SiRedux, SiExpress, SiNodedotjs, SiMongodb, SiMongoose],
      githubLink: "https://github.com/kevinandris/Bookstore_app",
      link: "https://keipy.vercel.app",
      cover: "/library.jpg",
      background: "bg-purple-300",
    },
    {
      id: 3,
      title: "Movie Trailer App",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiMongoose],
      githubLink: "https://github.com/kevinandris/Movie_trailers_app",
      link: "https://keipix.vercel.app",
      cover: "/movie.jpg",
      background: "bg-red-300",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 animate-move-down">
      <Title
        text="My Projects 🛠️"
        className="flex flex-col items-center justify-center rotate-3 "
      />

      <div
        data-testid="project-item"
        className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5"
      >
        {projects.map((project, index) => {
          return (
            <div className="justify-center items-center flex flex-col">
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
              <Link href={project.githubLink} key={index} target="_blank">
                <button className="bg-emerald-600 text-white-300 w-[10rem] rounded-md py-2 mt-4 hover:bg-emerald-700 transition-all duration-500">
                  Source Code
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
