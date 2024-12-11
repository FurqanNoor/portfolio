import { Github, Linkedin } from "lucide-react";
import { FaSpotify, FaXTwitter } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <>
      <div className="bg-stone-950  text-zinc-400 pb-10">
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
          <div className="col-span-3">
            <Link
              href="https://github.com/FurqanNoor"
              rel="noopener noreferrer"
              target="_blank"
              className="relative h-full w-full group flex flex-col justify-between overflow-hidden rounded-xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95 bg-zinc-900"
            >
              <div className="flex items-center justify-center h-full">
                <Github size={34} />
              </div>
            </Link>
          </div>
          <div className="col-span-2">
            <Link
              href="https://open.spotify.com/user/31h3qdwa3okynhvy4xrywbmp4t2y?si=12ab841bc3044e64"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-green-600 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
            >
              <div className="flex items-center justify-center h-full">
                <FaSpotify size={34} />
              </div>
            </Link>
          </div>
          <Link
            className="bg-[#1c1d1f] h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
            href="https://x.com/furggoo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center justify-center h-full">
              <FaXTwitter size={34} />
            </div>
          </Link>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 pt-3 gap-2">
          <div className="">
            <Link
              href="https://www.linkedin.com/in/furqan-noor/"
              rel="noopener noreferrer"
              target="_blank"
              className="relative h-full w-full group flex flex-col justify-between items-center overflow-hidden rounded-xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95 bg-[#2867b2]"
            >
              <div className="flex items-center justify-center h-full">
                <Linkedin size={34} />
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href="https://buymeacoffee.com/furggo"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-yellow-400 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
            >
              <div className="flex items-center justify-center h-full text-zinc-950">
                <BiCoffeeTogo size={34} />
              </div>
            </Link>
          </div>
          <Link
            className="col-span-4 bg-zinc-900 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center justify-center h-full">
              <Github size={34} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Socials;
