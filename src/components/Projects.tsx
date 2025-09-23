"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  name: string
  date: string
  description: string
  link: string
  status: string
  technologies: string[]
  logo?: string
}

const projects: Project[] = [
  {
    name: "EditingRsc",
    date: "2024/08",
    description: "A full-stack website offering a comprehensive collection of resources related to editing.",
    link: "https://editingsrc.vercel.app/",
    status: "Currently Working On",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Vercel", "Supabase", "Drizzle ORM"],
    logo: "/editingrsc.png",
  },
  {
    name: "Enolan Autopesu",
    date: "2024/10",
    description: "A website for a local car wash company providing details about their services.",
    link: "https://www.enolanautopesu.com/",
    status: "Finished",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Vercel", "React Email"],
    logo: "/enola-autopesu.png",
  },
  {
    name: "Rhodos Fast Food",
    date: "2024/05",
    description: "A website for a local fast-food place showcasing their menu and special offers.",
    link: "https://rhodoskebab.com/",
    status: "Finished",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Vercel"],
    logo: "/rhodos.png",
  },
  {
    name: "2D-Topdown game",
    date: "2023/04",
    description: "A game made with unity using public assets. This was a project I did in school.",
    link: "https://github.com/FurqanNoor/2D-Topdown",
    status: "Finished",
    technologies: ["Unity", "C#", "GitHub"],
    logo: "/unity.png",
  },
  {
    name: "Mosque-Medina",
    date: "2023/02",
    description: "A website for a local mosque showcasing their information.",
    link: "https://mosque-medina.vercel.app/",
    status: "Finished",
    technologies: ["HTML", "CSS", "Javascript"],
    logo: "/mosque.png",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-8">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-6">Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="pb-6 border-b border-gray-200 dark:border-zinc-800 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {project.logo && (
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.name} logo`}
                        width={40}
                        height={40}
                        className={`w-full h-full object-contain ${project.name === "EditingRsc" || project.name === "Enolan Autopesu" ? "rounded" : ""}`}
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-black dark:text-zinc-50">{project.name}</h3>
                  <Link
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 dark:bg-zinc-800/50 text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-zinc-50 transition-all duration-200 text-sm"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    <span className="text-xs">View</span>
                  </Link>
                </div>
                <p className="text-base text-gray-700 dark:text-zinc-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-zinc-500 mb-3">Status: {project.status}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-zinc-500 sm:text-right whitespace-nowrap">
                {project.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
