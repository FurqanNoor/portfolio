"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, MapPin, MoveDownLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  const education = [
    {
      name: "Turku vocational institute",
      date: "2023/05",
      description: "Undergraduate degree, computer software engineering",
      link: "https://www.turkuai.fi/turun-ammatti-instituutti/koulutukset/ammatilliset-tutkinnot/tieto-ja-viestintatekniikka",
    },
    {
      name: "Codecademy",
      date: "2023/05",
      description: "Learn JavaScript course",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pb-10 text-gray-800 dark:text-zinc-400">
        <div>
          <p className="pt-5 text-base text-black dark:text-zinc-50">
            Furqan Noor
          </p>
        </div>
        <div className="text-base pt-1">
          <p className="text-base flex items-center text-gray-700 dark:text-zinc-400">
            <MapPin className="w-4 h-4 mr-1" />
            Turku, Finland
          </p>
        </div>
        <div className="pt-5 text-gray-700 dark:text-zinc-400">
          i&apos;m a 20-year-old software engineering student based in finland,
          where i have lived since 2011. i am fluent in finnish, english, and
          urdu.
        </div>
        <div className="pt-5 text-gray-700 dark:text-zinc-400">
          i&apos;m passionate about becoming a full-stack developer, but right
          now, i&apos;m immersed in the front-end. i&apos;m working with
          technologies like react, next.js, typescript, tailwind css, and framer
          motion to create intuitive and dynamic user experiences. as i continue
          sharpening my skills, my goal is to transition into full-stack
          development and broaden my expertise across the entire development
          process.
        </div>
        <div className="pt-5 text-gray-700 dark:text-zinc-400">
          i also enjoy new experiences and want to learn things that will
          improve my work skills.
        </div>

        <div className="pt-5 text-gray-700 dark:text-zinc-400">
          check out some of my work at{" "}
          <Link
            href={"https://github.com/FurqanNoor"}
            rel="noopener noreferrer"
            target="_blank"
            className="underline underline-offset-8 text-black dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400"
          >
            github
          </Link>{" "}
          or{" "}
          <Link
            href="/projects-work"
            rel="noopener noreferrer"
            target="_blank"
            className="underline underline-offset-8 text-black dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400"
          >
            projects.
          </Link>
        </div>

        <div className="pt-10 ">
          <h1 className="mb-5 text-base text-black dark:text-zinc-50 flex gap-2">
            Education / Certificates{" "}
            <MoveDownLeft size={24} className="text-black dark:text-white" />
          </h1>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-300 dark:border-zinc-800 pb-6 last:border-0"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="text-black dark:text-zinc-50">
                      {item.name}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-zinc-500">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-4 pt-6 flex items-center gap-1 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50"
                >
                  Link
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
