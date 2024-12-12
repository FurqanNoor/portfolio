import React from "react";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-zinc-50 py-5 border-t border-zinc-700">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/FurqanNoor"
            target="_blank"
            className="flex items-center space-x-1 hover:text-zinc-400 transition"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
          <Link
            href="mailto:furqannoor311@gmail.com"
            className="flex items-center space-x-1 hover:text-zinc-400 transition"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>
        <div className="mt-4 sm:mt-0">
          <p className="text-zinc-300">
            Last updated: {siteConfig.lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
