import { BiCoffeeTogo } from "react-icons/bi";
import Link from "next/link";

const CoffeeBlock = () => {
  return (
    <div className="col-span-1">
      <Link
        href="https://buymeacoffee.com/furggo"
        rel="noopener noreferrer"
        target="_blank"
        className="bg-yellow-400 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu focus:outline-none focus:ring-0"
      >
        <div className="flex items-center justify-center h-full text-zinc-950">
          <BiCoffeeTogo size={34} />
        </div>
      </Link>
    </div>
  );
};

export default CoffeeBlock;
