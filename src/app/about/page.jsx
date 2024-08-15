import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { FaDiscord } from "react-icons/fa6";
import { IoLogoTwitch } from "react-icons/io";
import EmailIcon from "@mui/icons-material/Email";

export const metadata = {
  title: "TheRealGRBow | About",
  description: "About TheRealGRBow.",
};

export default function About({ pageSearchParams }) {
  return (
    <article className="m-0 p-3 pt-20 bg-gradient-to-br from-blue-800 to-rose-800 h-full">
      <section
        className="pt-6 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black"
        id="home"
      >
        <p className="text-2xl">About Me</p>
        <p className="pt-1">
          Hello, my name is TheRealGRBow! I'm a casual speedrunner, and streamer
          on Twitch! When I actually sit down and do speedruns, you'll see me
          playing Super Metroid or A Link to the Past. I also dabble in
          moderating and organization of speedrunning marathons! Notably, I am
          currently one of two oraganizers for No Glitches Allowed & No Holidays
          Allowed. I moderate and do behind the scenes work on Completithon, and
          Fastest Place on Earth.
        </p>
        <p className="pt-2">
          Other random stuff about me I guess. I'm First Aid/AED/CPR certified
          through the American Red Cross, I could probably... save your life. I
          have plans on getting back to college once the finances are right, and
          I love to bake. Feel free to explore the rest of the website, and
          check out those charity events I help with!
        </p>
      </section>
      <section
        className="pt-6 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black"
        id="socials"
      >
        <p className="text-2xl">Social Media & Other Platforms</p>
        <p className="pt-1">
          Check out all of my places on the internet! All of the icons are
          clickable!
        </p>
        <ul className="pt-6">
          <p className="text-2xl">
            Twitch
            <a
              href="https://twitch.tv/therealgrbow"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <IoLogoTwitch className="inline-block" />
            </a>
          </p>
          <p className="pt-2">
            Hey! I stream occasionally on Twitch. When I do go live, it's
            probably a speedrun, maybe a randomizer, or just my friends and I
            messing around on stream, havin a good time. I got affiliate in
            2023, I've been making the most of it since (not really {">"}.{"<"}
            ). Come follow or subscribe to me on Twitch if you're interested.
          </p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            YouTube
            <a
              href="https://www.youtube.com/@therealgrbowvods"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <YouTubeIcon />
            </a>
          </p>
          <p className="pt-2">
            My YouTube page, and YouTube VODs page are where all of those funny
            moments and long livestreams go once I get around to editing! If
            you're interested in more beyond the Twitch page, the YouTube is the
            right place for you!
          </p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Discord
            <a
              href="https://discord.gg/zsQjdv427n"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <FaDiscord className="inline-block" />
            </a>
          </p>
          <p className="pt-2">
            Discord, the place where the memes, and all the fun happens once the
            stream is over, and the videos are uploaded. You'll find me hanging
            out there in a voice channel most of the time! Just pop on by and
            say hi! Maybe we'll play a randomizer together, or laugh over memes
            till midnight!
          </p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Twitter
            <a
              href="https://twitter.com/TheRealGRBow"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <TwitterIcon />
            </a>
          </p>
          <p className="pt-2">
            I'll never call it X. I post occasional updates about my channel,
            and speedrun events. Sadly it's mostly unused. Elon left a bad taste
            in my mouth.
          </p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Speedrun PBs
            <a
              href="https://www.speedrun.com/users/TheRealGRBow"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <EmojiEventsIcon />
            </a>
          </p>
          <p className="pt-2">
            Any and all of my speedrunnin personal bests will be at the link
            there. I don't have any world records, nor am I a good contender for
            any. Just there to submit my times and gave a good time too!
          </p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Contact Me
            <a
              href="mailto:therealgrbow@gmail.com"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <EmailIcon />
            </a>
          </p>
          <p className="pt-2">
            If you ever have any questions, comments, or concerns, please
            contact me by clicking the above icon, or by clicking "Contact Me"
            on the Nav Bar! I'll do my best to answer within 24-72 hours!
          </p>
        </ul>
      </section>
    </article>
  );
}
