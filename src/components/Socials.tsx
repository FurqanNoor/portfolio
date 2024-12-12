"use client";


import { Github, Linkedin } from "lucide-react";
import { FaSpotify, FaXTwitter } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Socials = () => {
  const [albumCover, setAlbumCover] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=furggoo&api_key=389b9ec76709746518da63f1f39989f6&format=json`
        );
        const data = await response.json();
        const recentTrack = data.recenttracks?.track?.[0];

        if (recentTrack?.image?.length > 0) {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          const largeImage = recentTrack.image.find((img: any) => img.size === "extralarge");
          setAlbumCover(largeImage?.["#text"] || null);
        }
      } catch (error) {
        console.error("Error fetching recent track:", error);
      }
    };

    fetchRecentTrack();
  }, []);

  return (
    <div className="bg-stone-950 text-zinc-400 pb-10">
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
        {/* GitHub Link */}
        <div className="col-span-3">
          <Link
            href="https://github.com/FurqanNoor"
            rel="noopener noreferrer"
            target="_blank"
            className="relative sm:h-full h-24 w-full group flex flex-col justify-between overflow-hidden rounded-xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95 bg-zinc-900"
          >
            <div className="flex items-center justify-center h-full">
              <Github size={34} />
            </div>
          </Link>
        </div>

        {/* Spotify Link */}
        <div className="col-span-2">
          <Link
            href="https://open.spotify.com/user/31h3qdwa3okynhvy4xrywbmp4t2y?si=12ab841bc3044e64"
            rel="noopener noreferrer"
            target="_blank"
            className="h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
            style={{
              backgroundImage: albumCover ? `url(${albumCover})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: albumCover ? "transparent" : "green",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <FaSpotify size={34} />
            </div>
          </Link>
        </div>

        {/* Twitter Link */}
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
        {/* LinkedIn Link */}
        <div className="col-span-1">
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

        {/* Buy Me a Coffee Link */}
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

        {/* Placeholder Link */}
        <Link
          className="sm:col-span-4 col-span-1 bg-zinc-900 h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
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
  );
};

export default Socials;
