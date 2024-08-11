import Image from "next/image";

export const metadata = {
  title: "No Glitches Allowed | Code of Conduct",
  description:
    "Code of Conduct for No Glitches Allowed, presenting charity video game inspired marathons, in support of funding Go Rescue Pet Adoption Center!",
};

export default function CodeOfConduct({ pageSearchParams }) {
  return (
    <article className="m-0 p-3 pt-20 bg-gradient-to-br from-blue-900 to-black h-full">
      <div className="drop-shadow-[1px_2px_var(--tw-shadow-color)] shadow-black">
        <section id="last-updated">
          <div className="flex flex-col items-center pt-7">
            <h2 className="text-2xl pb-2">
              No Glitches Allowed Code of Conduct
            </h2>
            <p>Version 1.3 – Updated August 10, 2024</p>
            <p>
              <Image
                src="/images/noga_logo.png"
                alt="NoGA Logo"
                height="256"
                width="589"
              />
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
