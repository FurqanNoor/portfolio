import { Linkedin } from "lucide-react";
import Link from "next/link";

const LinkedInBlock = () => {
  return (
    <div className="col-span-1">
      <Link
        href="https://www.linkedin.com/in/furqan-noor/"
        rel="noopener noreferrer"
        target="_blank"
        className="relative h-full w-full group flex flex-col justify-between items-center overflow-hidden rounded-xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95 bg-[#2867b2] focus:outline-none focus:ring-0"
      >
        <div className="flex items-center justify-center h-full">
          <Linkedin size={34} />
        </div>
      </Link>
    </div>
  );
};

export default LinkedInBlock;
