"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, MoveDownLeft } from "lucide-react";

const projects = [
  {
    name: "EditingRsc",
    date: "2024/08",
    description:
      "A full-stack website offering a comprehensive collection of resources related to editing.",
    link: "https://www.editingrsc.com/",
    status: "Currently Working On",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Enolan Autopesu",
    date: "2024/10",
    description:
      "A website for a local car wash company providing details about their services.",
    link: "https://www.enolanautopesu.com/",
    status: "Finished",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Vercel"],
  },
  {
    name: "Rhodos Fast Food",
    date: "2024/05",
    description:
      "A website for a local fast-food place showcasing their menu and special offers.",
    link: "https://rhodoskebab.com/",
    status: "Finished",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Vercel"],
  },
  {
    name: "2D-Topdown game",
    date: "2023/04",
    description:
      "A game made with unity using public assets. This was a project I did in school.",
    link: "https://github.com/FurqanNoor/2D-Topdown",
    status: "Finished",
    technologies: ["Unity", "C#", "GitHub"],
  },
  {
    name: "Mosque-Medina",
    date: "2023/02",
    description: "A website for a local mosque showcasing their information.",
    link: "https://mosque-medina.vercel.app/",
    status: "Finished",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

const workExperiences = [
  {
    role: "Software Developer",
    company: "Finnish Defence Forces",
    duration: "2023/08 - 2024/03",
    description:
      "I completed mandatory military service as a software developer in a virtual training environment, creating add-ons and training scenarios for Bohemia Interactive Simulations' VBS4 platform, while maintaining systems and training users.",
  },
  {
    role: "Sales Assistant, Internship",
    company: "Flying Tiger",
    duration: "2021/02 - 2021/03",
    description:
      "On-the-job learning, the topic of the training was customer service. I was at the cash register, shelving products and doing warehouse work.",
  },
];

const ProjectsSection = () => (
  <div className="pt-5 pb-5">
    <h1 className="mb-5 text-base text-black dark:text-zinc-50 flex gap-2">
      My projects
      <MoveDownLeft size={24} className="text-black dark:text-white" />
    </h1>

    <div className="space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col pb-6 border-b border-gray-300 dark:border-zinc-800 last:border-0 rounded-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-black dark:text-zinc-50">{project.name}</h2>
                <span className="text-sm text-gray-500 dark:text-zinc-500">
                  {project.date}
                </span>
              </div>
              <p className="text-gray-700 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-zinc-500 mt-1">
                Status: {project.status}
              </p>
            </div>
            <Link
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
              className="ml-4 flex items-center gap-1 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50"
            >
              Link
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs rounded-sm bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WorkSection = () => (
  <div id="work" className="pt-5 pb-5">
    <h1 className="mb-5 text-base text-black dark:text-zinc-50 flex gap-2">
      Work Experience
      <MoveDownLeft size={24} className="text-black dark:text-white" />
    </h1>

    <div className="space-y-6">
      {workExperiences.map((work, index) => (
        <div
          key={index}
          className="pb-6 border-b border-gray-300 dark:border-zinc-800 last:border-0 rounded-sm"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-black dark:text-zinc-50">{work.role}</h2>
            <span className="text-sm text-gray-500 dark:text-zinc-500">
              {work.company}
            </span>
          </div>
          <p className="text-gray-700 dark:text-zinc-400">{work.duration}</p>
          <p className="text-gray-700 dark:text-zinc-400 mt-1">
            {work.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <div>
        <Navbar />
        <ProjectsSection />
        <WorkSection />
        <Footer />
      </div>
    </>
  );
};

export default Page;
