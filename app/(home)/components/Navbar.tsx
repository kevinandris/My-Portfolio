import { FaGithub } from "react-icons/fa";
import { link } from "fs";
import React from "react";
import { SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";

const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedIn.com/in/kevinandris/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://www.linkedIn.com/in/kevinandris/",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://www.linkedIn.com/in/kevinandris/",
      label: "x",
      Icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Kevin Pudihang 🧑🏻
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
