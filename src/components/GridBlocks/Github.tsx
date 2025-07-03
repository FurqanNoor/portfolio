import { Github } from "lucide-react";
import Link from "next/link";

const GitHubBlock = () => {
  return (
    <Link
      className="sm:col-span-4 col-span-1 bg-zinc-900 h-24 text-white rounded-xl flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      href="https://github.com/FurqanNoor"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className="absolute inset-0 bg-cover bg-left opacity-70 transition-all duration-500 transform scale-105 hover:scale-110"
        style={{
          backgroundImage: `url('/bg.jpg')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      <div className="flex items-center justify-center h-full relative z-10">
        <Github
          size={34}
          className="transition-all duration-500"
        />
      </div>
    </Link>
  );
};

export default GitHubBlock;
