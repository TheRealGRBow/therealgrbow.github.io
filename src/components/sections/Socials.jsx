"use client";

import { useEffect } from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Socials() {
  return (
    <div className="flex grid-cols-3 gap-20 justify-center pt-3">
      <p>
        <a
          href="/#home"
          className="hover:text-yellow-500 flex flex-col items-center"
        >
          Twitch
          <VideocamIcon />
        </a>
      </p>
      <p>
        <a
          href="/#home"
          className="hover:text-yellow-500 flex flex-col items-center"
        >
          Youtube
          <YouTubeIcon />
        </a>
      </p>
      <p>
        <a
          href="/#home"
          className="hover:text-yellow-500 flex flex-col items-center"
        >
          Discord
          <EmojiEventsIcon />
        </a>
      </p>
    </div>
  );
}
