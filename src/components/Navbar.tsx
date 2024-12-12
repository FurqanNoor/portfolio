import { Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="z-40 max-w-2xl h-20 text-zinc-50 text-base bg-stone-950 sticky top-0">
        <div className="flex gap-7 pt-5">
          <Link href="/">
            <p className="hover:text-zinc-500">home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-zinc-500">about</p>
          </Link>
          <Link href="/projects-work">
            <p className="hover:text-zinc-500">projects</p>
          </Link>
          <Link href="/projects-work">
            <p className="hover:text-zinc-500">work</p>
          </Link>
          <div className="sm:pl-80 pl-24 pt-1">
            <Sun className="w-5 h-5"></Sun>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
