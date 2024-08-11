import Image from "next/image";
import Home from "@/components/sections/Home";
import Socials from "@/components/sections/Socials";

export const metadata = {
  title: "TheRealGRBow | About",
  description: "About TheRealGRBow.",
};

export default function About({ pageSearchParams }) {
  return (
    <article className="m-0 p-3 pt-20 bg-gradient-to-br from-blue-800 to-rose-800 h-screen">
      <section id="home">
        <div className="flex justify-center text-2xl pt-12">
          <p>About Me</p>
        </div>
        <div className="grid grid-flow-col items-center gap-6 pl-8 pr-8 pt-2">
          <ul>
            <p>
              Hello, my name is TheRealGRBow! I'm a casual speedrunner, and
              streamer on Twitch! When I actually sit down and do speedruns,
              you'll see me playing Super Metroid or A Link to the Past. I also
              dabble in moderating and organization of speedrunning marathons!
              Notably, I am currently one of two oraganizers for No Glitches
              Allowed & No Holidays Allowed. I moderate and do behind the scenes
              work on Completithon, and Fastest Place on Earth.
            </p>
            <p className="pt-3">
              Other random stuff about me I guess. I'm First Aid/AED/CPR
              certified through the American Red Cross, I could probably... save
              your life. I have plans on getting back to college once the
              finances are right, and I love to bake. Feel free to explore the
              rest of the website, and check out those charity events I help
              with!
            </p>
          </ul>
        </div>
      </section>
      <section className="m-6" id="Socials">
        <div className="flex justify-center">
          <p className="text-2xl">Social Media & Other Platforms</p>
        </div>
        <div>
          <Socials />
        </div>
      </section>
    </article>
  );
}
