import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 text-zinc-50 text-lg bg-stone-950 sticky top-0">
        <div className="flex gap-5 pt-10">
          <Link href="#">
            <p>home</p>
          </Link>
          <Link href="#">
            <p>about</p>
          </Link>
          <Link href="#">
            <p>projects</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
