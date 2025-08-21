"use client"

import type React from "react"
import Image from "next/image"

const workExperiences = [
  {
    role: "Software Developer",
    company: "Finnish Defence Forces",
    duration: "2023/08 - 2024/03",
    description:
      "I completed mandatory military service as a software developer in a virtual training environment, creating add-ons and training scenarios for Bohemia Interactive Simulations' VBS4 platform, while maintaining systems and training users.",
    logo: "/puolustusvoimat.png",
  },
  {
    role: "Sales Assistant, Internship",
    company: "Flying Tiger",
    duration: "2021/02 - 2021/03",
    description:
      "On-the-job learning, the topic of the training was customer service. I was at the cash register, shelving products and doing warehouse work.",
    logo: "/tiger.png",
  },
]

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="pt-12 pb-8">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-6">Work Experience</h2>

      <div className="space-y-6">
        {workExperiences.map((work, index) => (
          <div key={index} className="pb-6 border-b border-gray-200 dark:border-zinc-800 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden dark:bg-white flex items-center justify-center p-1">
                    <Image
                      src={work.logo || "/placeholder.svg"}
                      alt={`${work.company} logo`}
                      width={40}
                      height={40}
                      className={`w-full h-full object-contain ${work.company === "Flying Tiger" ? "rounded" : ""}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-zinc-50">{work.role}</h3>
                    <p className="text-base text-gray-700 dark:text-zinc-300">{work.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2">{work.description}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-zinc-500 sm:text-right whitespace-nowrap">
                {work.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
