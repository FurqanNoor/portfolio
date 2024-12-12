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
  },
  {
    name: "Enolan Autopesu",
    date: "2024/10",
    description:
      "A website for a local car wash company providing details about their services.",
    link: "https://www.enolanautopesu.com/",
    status: "Finished",
  },
  {
    name: "Rhodos Fast Food",
    date: "2024/05",
    description:
      "A website for a local fast-food place showcasing their menu and special offers.",
    link: "https://rhodoskebab.com/",
    status: "Finished",
  },
  {
    name: "2D-Topdown game",
    date: "2023/04",
    description:
      "A game made with unity using public assets. this was a project i did in school",
    link: "https://github.com/FurqanNoor/2D-Topdown",
    status: "Finished",
  },
  {
    name: "Mosque-Medina",
    date: "2023/02",
    description:
      "A website for a local mosque showcasing their information.",
    link: "https://mosque-medina.vercel.app//",
    status: "Finished",
  },
];

const workExperiences = [
  {
    role: "Junior Programmer",
    company: "Finnish Defence Forces",
    duration: "2023/08 - 2024/03",
    description:
      "Developed and integrated simulation tools and training scenarios for military applications. Contributed to projects such as a bouncing mine, trenching spade, and Steel Eagle drone in VBS4. Provided technical support, maintained virtual training systems, and trained others in simulator technologies.",
  },
  {
    role: "Sales Assistant, Internship",
    company: "Flying Tiger Copenhagen",
    duration: "2021/02 - 2021/03",
    description:
      "On-the-job learning, the topic of the training was customer service. I was at the cash register, shelving products and doing warehouse work.",
  },
];

const ProjectsSection = () => (
  <div className="bg-stone-950 pt-5 pb-5">
    <h1 className="mb-5 text-base text-zinc-50 flex gap-2">
      My projects
      <MoveDownLeft size={24} color="white" />
    </h1>

    <div className="space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-zinc-800 pb-6 last:border-0"
        >
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-zinc-50">{project.name}</h2>
              <span className="text-sm text-zinc-500">{project.date}</span>
            </div>
            <p className="text-zinc-400">{project.description}</p>
            <p className="text-sm text-zinc-500 mt-1">Status: {project.status}</p>
          </div>
          <Link
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="ml-4 flex items-center gap-1 text-zinc-400 hover:text-zinc-50"
          >
            Link
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const WorkSection = () => (
  <div id="work">
  <div  className="bg-stone-950 pt-5 pb-5">
    <h1 className="mb-5 text-base text-zinc-50 flex gap-2">
      Work Experience
      <MoveDownLeft size={24} color="white" />
    </h1>

    <div className="space-y-6">
      {workExperiences.map((work, index) => (
        <div
          key={index}
          className="border-b border-zinc-800 pb-6 last:border-0"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-zinc-50">{work.role}</h2>
            <span className="text-sm text-zinc-500">{work.company}</span>
          </div>
          <p className="text-zinc-400">{work.duration}</p>
          <p className="text-zinc-400 mt-1">{work.description}</p>
        </div>
      ))}
    </div>
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
