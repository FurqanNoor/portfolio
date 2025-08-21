"use client"

import { useTheme } from "@/hooks/useTheme"
import { Sun, Moon } from "lucide-react"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="z-40 max-w-2xl h-20 bg-zinc-50 dark:bg-stone-950 text-black dark:text-zinc-50 sticky top-0 transition-colors">
      <div className="flex justify-between items-center pt-5">
        <div className="flex gap-4 sm:gap-7">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-gray-500 dark:hover:text-zinc-500 transition-colors"
          >
            home
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="hover:text-gray-500 dark:hover:text-zinc-500 transition-colors"
          >
            <span className="sm:hidden">studies</span>
            <span className="hidden sm:inline">education</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-500 dark:hover:text-zinc-500 transition-colors"
          >
            projects
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-gray-500 dark:hover:text-zinc-500 transition-colors"
          >
            work
          </button>
        </div>
        <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="w-5 h-5 text-black dark:text-zinc-50">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
