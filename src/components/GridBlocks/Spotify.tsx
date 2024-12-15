import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa6";
import Link from "next/link";

// Define types for the album image data
interface Image {
  size: string;
  "#text": string;
}

const SpotifyBlock = () => {
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
          // Type the 'img' variable correctly
          const largeImage = recentTrack.image.find(
            (img: Image) => img.size === "extralarge"
          );
          setAlbumCover(largeImage?.["#text"] || null);
        }
      } catch (error) {
        console.error("Error fetching recent track:", error);
      }
    };

    fetchRecentTrack();
  }, []);

  return (
    <div className="col-span-2">
      <Link
        href="https://open.spotify.com/user/31h3qdwa3okynhvy4xrywbmp4t2y?si=12ab841bc3044e64"
        rel="noopener noreferrer"
        target="_blank"
        className="h-24 text-white rounded-xl items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu focus:outline-none focus:ring-0"
      >
        {albumCover && (
          <div
            className="absolute inset-0 opacity-95 dark:opacity-60"
            style={{
              backgroundImage: `url(${albumCover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {!albumCover && (
          <div className="absolute inset-0 bg-green-500 opacity-80" />
        )}
        <div className="flex items-center justify-center h-full relative z-10">
          <FaSpotify size={34} />
        </div>
      </Link>
    </div>
  );
};

export default SpotifyBlock;
