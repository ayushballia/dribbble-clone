// import Image from "next/image";
import { teamMembers } from "./data/teamMembers";
import TeamCard from "./components/TeamCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Marque from "./components/Marquee.jsx";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="text-center pt-20 md:px-60">
        <a
          href="/"
          className="font-serif text-lg inline-flex items-center rounded-full bg-purple-50 px-4 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-purple-700/100"
        >
          Over 3 million ready-to-work creatives!
        </a>
        <h1 className="text-4xl md:text-7xl py-12 font-serif">
          The world’s destination for design
        </h1>
        <p className="text-lg font-medium mb-10">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <a href="/" className="px-5 py-4 bg-black text-white rounded-full">
          Get started
        </a>
      </section>

      <div className="flex relative overflow-x-hidden">
        <div className="py-24 whitespace-nowrap">
          <div className="flex p-4">
            <Marque>
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  skills={member.skills}
                />
              ))}
            </Marque>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-center text-5xl pb-12">
          Explore inspiring designs
        </h2>
      </section>
    </div>
  );
}
