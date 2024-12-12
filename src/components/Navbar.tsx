"use client";

import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="z-40 max-w-2xl h-20 bg-zinc-50 dark:bg-stone-950 text-black dark:text-zinc-50 sticky top-0 transition-colors">
      <div className="flex gap-7 pt-5">
        <Link href="/">
          <p className="hover:text-gray-500 dark:hover:text-zinc-500">home</p>
        </Link>
        <Link href="/about">
          <p className="hover:text-gray-500 dark:hover:text-zinc-500">about</p>
        </Link>
        <Link href="/projects-work">
          <p className="hover:text-gray-500 dark:hover:text-zinc-500">
            projects
          </p>
        </Link>
        <Link href="/projects-work#work">
          <p className="hover:text-gray-500 dark:hover:text-zinc-500">work</p>
        </Link>
        <div className="sm:pl-80 pl-9 pt-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="w-5 h-5 text-black dark:text-zinc-50"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
