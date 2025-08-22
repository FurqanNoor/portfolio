"use client"

import type React from "react"
import Image from "next/image"

interface EducationItem {
  institution: string
  degree: string
  duration: string
  description: string
  logo?: string
}

interface CourseItem {
  platform: string
  course: string
  duration: string
  description: string
  logo?: string
}

const educationData: EducationItem[] = [
  {
    institution: "Turku University of Applied Sciences",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    duration: "2025 - Present",
    description:
      "Currently pursuing mechanical engineering while continuing to develop software development skills alongside my studies.",
    logo: "/turkuamk.png",
  },
  {
    institution: "Turku Vocational Institute",
    degree: "Information and Communication Technology",
    duration: "2020 - 2023",
    description: "Completed vocational studies in ICT with focus on software development and web technologies.",
    logo: "/tai.png",
  },
]

const coursesData: CourseItem[] = [
  {
    platform: "Codecademy",
    course: "Learn JavaScript",
    duration: "2023/05",
    description:
      "Completed basic JavaScript course covering fundamental programming concepts, variables, functions, and core JavaScript syntax.",
    logo: "/codecademy.png",
  },
]

const Education: React.FC = () => {
  return (
    <section id="education" className="pt-12 pb-8">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-6">Education</h2>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`pb-6 ${index === educationData.length - 1 ? "border-b border-gray-200 dark:border-zinc-800" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {edu.logo && (
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-black dark:text-zinc-50 break-words">
                      {edu.institution === "Turku University of Applied Sciences" ? (
                        <>
                          <span className="md:hidden">Turku UAS</span>
                          <span className="hidden md:inline">Turku University of Applied Sciences</span>
                        </>
                      ) : (
                        edu.institution
                      )}
                    </p>
                    <p className="text-base text-gray-700 dark:text-zinc-300 break-words">
                      {edu.degree === "Bachelor of Engineering, Mechanical Engineering" ? (
                        <>
                          <span className="md:hidden">Bachelors of Mech Engineering</span>
                          <span className="hidden md:inline">Bachelor of Engineering, Mechanical Engineering</span>
                        </>
                      ) : edu.degree === "Information and Communication Technology" ? (
                        <>
                          <span className="md:hidden">ICT</span>
                          <span className="hidden md:inline">Information and Communication Technology</span>
                        </>
                      ) : (
                        edu.degree
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2">{edu.description}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-zinc-500 sm:text-right whitespace-nowrap sm:mt-0 mt-2">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}

        <div className="pt-6">
          <h3 className="text-lg font-medium text-black dark:text-zinc-50 mb-4">Courses & Certifications</h3>

          <div className="space-y-4">
            {coursesData.map((course, index) => (
              <div key={index} className="pb-4 border-b border-gray-200 dark:border-zinc-800 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {course.logo && (
                        <div className="w-10 h-10 flex items-center justify-center">
                          <Image
                            src={course.logo || "/placeholder.svg"}
                            alt={`${course.platform} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-black dark:text-zinc-50 break-words">
                          {course.platform}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-zinc-300 break-words">{course.course}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2">{course.description}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-zinc-500 sm:text-right whitespace-nowrap sm:mt-0 mt-2">
                    {course.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
