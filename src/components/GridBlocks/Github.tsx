import { Github } from "lucide-react";
import Link from "next/link";

const GitHubBlock = () => {
  return (
    <Link
      className="sm:col-span-4 col-span-1 bg-zinc-900 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu focus:outline-none focus:ring-0"
      href="/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-center justify-center h-full">
        <Github size={34} />
      </div>
    </Link>
  );
};

export default GitHubBlock;
