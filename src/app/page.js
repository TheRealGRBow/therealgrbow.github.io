import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/sections/Home"));
const Socials = dynamic(() => import("../components/sections/Socials"));

export default function Start() {
  return (
    <article className="bg-gradient-to-br from-blue-800 to-rose-800 h-screen">
      <section className="pt-24" id="home">
        <div className="flex justify-center"><Home /></div>
      </section>
    </article>
  );
}