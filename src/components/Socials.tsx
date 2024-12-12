"use client";

import MapBlock from "./GridBlocks/MapBlock";
import SpotifyBlock from "./GridBlocks/Spotify";
import TwitterBlock from "./GridBlocks/Twitter";
import LinkedInBlock from "./GridBlocks/LinkedIn";
import CoffeeBlock from "./GridBlocks/Coffee";
import GitHubBlock from "./GridBlocks/Github";

const Socials = () => {
  return (
    <div className="pb-5 text-gray-800 dark:text-zinc-400">
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
        <MapBlock />
        <SpotifyBlock />
        <TwitterBlock />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 pt-3 gap-2">
        <LinkedInBlock />
        <CoffeeBlock />
        <GitHubBlock />
      </div>
    </div>
  );
};

export default Socials;
