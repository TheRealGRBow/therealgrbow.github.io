import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/sections/Home"));

export default function Start() {
  return (
    <article className="bg-gradient-to-br from-blue-900 to-black h-screen">
      <section className="justify-center pt-16" id="home">
        <div>
        <Home />
        </div>
      </section>
    </article>
  );
}