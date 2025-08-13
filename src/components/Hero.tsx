"use client";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pb-10  text-gray-800 dark:text-zinc-400 transition-colors">
      <div>
        <p className="pt-5 text-base text-black dark:text-zinc-50">
          Furqan Noor
        </p>
      </div>
      <div className="text-base pt-1">
        <p>20yo Software Engineer</p>
        <p className="text-base flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          Turku, Finland
        </p>
      </div>
      <div className="pt-5">
        {/*}hi, i&#39;m currently taking the next step in my journey by applying for
        a bachelor&#39;s degree in information technology. my interests include
        full-stack development and understanding how technology impacts everyday
        applications.*/}
        hi, i am currently a freshman at a university of applied sciences,
        pursuing a bachelor&#39;s degree in mechanical engineering. my interests
        include full-stack development and understanding how technology impacts
        everyday applications.
      </div>
      <div className="pt-5">
        beyond my studies, i enjoy listening to music, playing videogames and
        working on various side projects (i&#39;ve got plenty of them :p).
      </div>
      <div className="pt-5">
        feel free to reach out to me at{" "}
        <Link
          href="https://www.linkedin.com/in/furqan-noor/"
          className="underline underline-offset-8 text-black dark:text-zinc-50 dark:hover:text-zinc-500 hover:text-zinc-600"
        >
          linkedIn
        </Link>{" "}
        or drop an{" "}
        <Link
          href="mailto:furqannoor311@gmail.com"
          className="underline underline-offset-8 text-black dark:text-zinc-50 dark:hover:text-zinc-500 hover:text-zinc-600"
        >
          email.
        </Link>
      </div>
    </div>
  );
};

export default Hero;
