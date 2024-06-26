import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi there, <br />{" "}
          <span className="underline underline-offset-8 decoration-red-600">
            I am Kevin the Web Developer ✨
          </span>
        </h1>

        <p className="md:w-96 text-lg text-gray-300">
          Fresh Software Engineer from Auckland University of Technology,
          passionate to be a Fullstack Developer.
        </p>

        <Link
          href={"mailto:kevinandris27@gmail.com"}
          className="inline-block group md:h-40"
        >
          <Title text="Email Me 📩" />
        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] mb-40">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-full bg-cyan-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-pink-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-yellow-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 mb-20 animate-bounce">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p> 💻 Looking for an internship or graduate programme </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
