"use client";

import { ArrowUpRight, MoveDownLeft } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  date: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "EditingRsc",
    date: "2024/08",
    description:
      "A full-stack website offering a comprehensive collection of resources related to editing.",
    link: "https://www.editingrsc.com/",
  },
  {
    name: "Enolan Autopesu",
    date: "2024/10",
    description:
      "A website for a local car wash company providing details about their services.",
    link: "https://www.enolanautopesu.com/",
  },
  {
    name: "Rhodos Fast Food",
    date: "2024/05",
    description:
      "A website for a local fast-food place showcasing their menu and special offers.",
    link: "https://rhodoskebab.com/",
  },
];

const Projects = () => {
  return (
    <div className="pt-5 pb-5">
      <h1 className="mb-5 text-base flex gap-2 text-black dark:text-zinc-50">
        Some of my projects below
        <MoveDownLeft size={24} className="text-black dark:text-white" />
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between pb-6 border-b border-gray-300 dark:border-zinc-800 last:border-0"
          >
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
