import PetsIcon from "@mui/icons-material/Pets";
import { FaDiscord } from "react-icons/fa6";
import GamesIcon from "@mui/icons-material/Games";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { CiRainbow } from "react-icons/ci";
import { IoLogoTwitch } from "react-icons/io";

export const metadata = {
  title: "TheRealGRBow | Charity Links",
  description: "TheRealGRBow Charity Event Links",
};

export default function Charity({ pageSearchParams }) {
  return (
    <article className="m-0 p-3 pt-20 bg-gradient-to-br from-blue-800 to-rose-800 h-full">
      <section
        className="drop-shadow-[1px_2px_var(--tw-shadow-color)] shadow-black"
        id="when"
      >
        <h2 className="text-3xl pt-9">Charity</h2>
        <p className="pt-1">
          Welcome to the charity hub on the website! These are all the charity
          speedrunning events that are close to my heart! I either volunteer,
          work as staff, or organize some of these events!
        </p>
      </section>
      <section
        className="drop-shadow-[1px_2px_var(--tw-shadow-color)] shadow-black"
        id="Events"
      >
        <ul className="pt-6">
          <p className="text-2xl">
            No Glitches Allowed & No Holidays Allowed
            <a
              href="https://discord.gg/WfcvgPv"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <FaDiscord className="inline-block" />
            </a>
            <a
              href="https://twitch.tv/noglitchesallowed"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <IoLogoTwitch className="inline-block" />
            </a>
            <a
              href="https://gorescuedogs.com"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <PetsIcon className="inline-block" />
            </a>
            <a
              href="https://noglitchesallowed.org"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <InsertLinkIcon className="inline-block" />
            </a>
          </p>
          <p className="pt-2">
            No Glitches Allowed was organized by SloaTheDemon in 2018 in order
            to raise money for Go Rescue Pet Adoption Cener located in Norfolk,
            VA. No Glitches Allowed (NoGA) is an event dedicated to speedruns
            and showcases featuring very few glitches, or maybe even none at
            all.
          </p>
          <p className="pt-2">
            No Holidays Allowed was organized by SloaTheDemon in 2019 for the
            same purpose. No Holidays Allowed is typically held during "winter",
            and showcases a wide variety of games, speedruns, showcases, and
            anything with/without glitches. No Holidays Allowed supports the
            friendly doggos in Norfolk, VA at Go Rescue Pet Adoption Center. Go
            Rescue Pet Adoption Center is a no kill animal shelter PLEASE adopt
            a dog if you can {"<"}3.
          </p>
          <p className="pt-2">Current Organizers: TheRealGRBow & Ozmourn</p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Completithon
            <a
              href="https://discord.gg/9pn5A7kNDs"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <FaDiscord className="inline-block" />
            </a>
            <a
              href="https://www.twitch.tv/noglitchesallowed"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <IoLogoTwitch className="inline-block" />
            </a>
            <a
              href="https://www.girlsmakegames.com/"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <GamesIcon className="inline-block" />
            </a>
            <a
              href="https://www.noglitchesallowed.org"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <InsertLinkIcon className="inline-block" />
            </a>
          </p>
          <p className="pt-2">
            The Sister event to No Glitches Allowed, Completithon was founded in
            2018 by SloaTheDemon. Completithon typically occurs in the Summer.
            This event focuses on completionist/100% runs, and does allow
            glitches so long as the run fits the completionist theme. This event
            is in support of Girls Make Games. An organization that puts on a
            series of summer camps, workshops and game jams designed to inspire
            the next generation of women/girl designers, creators, and
            engineers.
          </p>
          <p className="pt-2">Current Organizers: Ozmourn & Genesis</p>
        </ul>
        <ul className="pt-6">
          <p className="text-2xl">
            Fastest Place on Earth
            <a
              href="https://discord.gg/vaKRp6Ks9B"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <FaDiscord className="inline-block" />
            </a>
            <a
              href="https://www.twitch.tv/fastestplaceonearth"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <IoLogoTwitch className="inline-block" />
            </a>
            <a
              href="https://www.prismfl.org/"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <CiRainbow className="inline-block" />
            </a>
            <a
              href="https://www.fastestplaceonearth.org/"
              className="hover:text-yellow-500 items-center pl-2"
            >
              <InsertLinkIcon className="inline-block" />
            </a>
          </p>
          <p className="pt-2">
            Fastest Place on Earth, the worlds first Disney only speedrunning
            marathon! First organized in 2023 by SteveTVOnline & echo_tree, the
            marathon puts on the most magical marathon on Twitch ever! Fastest
            Place on Earth is proud to support PrismFL, a charity that fights
            against the "Don't Say Gay Bill" in Florida, and raises money for
            LGBTQ youth in Florida.
          </p>
          <p className="pt-2">Current Organizers: SteveTVOnline & echo_tree</p>
        </ul>
      </section>
    </article>
  );
}
