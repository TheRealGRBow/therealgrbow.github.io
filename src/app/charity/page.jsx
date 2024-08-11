import Image from "next/image";

export const metadata = {
  title: "No Glitches Allowed | Code of Conduct",
  description:
    "Code of Conduct for No Glitches Allowed, presenting charity video game inspired marathons, in support of funding Go Rescue Pet Adoption Center!",
};

export default function Charity({ pageSearchParams }) {
  return (
    <article className="m-0 p-3 pt-20 bg-gradient-to-br from-blue-800 to-rose-800 h-screen">
      <section id="when">
        <h2 className="text-3xl pt-9">Charity</h2>
        <p className="pt-1">
          Welcome to the charity hub on the website! These are all the charity
          speedrunning events that are close to my heart! I either volunteer,
          work as staff, or organize some of these events!
        </p>
      </section>
      <section id="Events">
        <ul>
          <p className="text-2xl pt-6">
            No Glitches Allowed & No Holidays Allowed
          </p>
          <li className="pt-2 pl-6">
            No Glitches Allowed was organized by SloaTheDemon in 2018 in order
            to raise money for Go Rescue Pet Adoption Cener located in Norfolk,
            VA. No Glitches Allowed (NoGA) is an event dedicated to speedruns
            and showcases featuring very few glitches, or maybe even none at
            all.
          </li>
          <li className="pt-2 pl-6">
            No Holidays Allowed was organized by SloaTheDemon in 2019 for the
            same purpose. No Holidays Allowed is typically held during "winter",
            and showcases a wide variety of games, speedruns, showcases, and
            anything with/without glitches. No Holidays Allowed supports the
            friendly doggos in Norfolk, VA at Go Rescue Pet Adoption Center.
          </li>
        </ul>
        <p className="text-2xl pt-6">Completithon</p>
        <p className="pt-1">
          Our Sister event, Completithon typically occurs in the Summer. This
          event focuses on completionist/100% runs, and does allow glitches so
          long as the run fits the completionist theme. Completithon has some
          variances in staffing, but there’s lots of familiar faces. This event
          is in support of Girls Make Games.
        </p>
      </section>
    </article>
  );
}
