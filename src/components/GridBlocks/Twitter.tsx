import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const TwitterBlock = () => {
  return (
    <Link
      className="bg-[#1c1d1f] h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu focus:outline-none focus:ring-0"
      href="https://x.com/furggoo"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-center justify-center h-full">
        <FaXTwitter size={34} />
      </div>
    </Link>
  );
};

export default TwitterBlock;
