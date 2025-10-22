import React from "react";
import ezinne from "../assets/ezinne.jpeg";

function About() {
  return (
    <section id="about" className="py-20 bg-white text-[#2a1f0f] px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={ezinne}
          alt="Ezinne Goodness"
          className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
        />
        <div>
          <h2 className="text-4xl font-bold text-[#8b4513] mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-[#3b2f2f]">
            I’m <span className="font-semibold text-[#8b0000]">Madu Ezinne Goodness</span>,
            a passionate storyteller who weaves emotion into every line. My goal is to
            turn ideas into words that breathe — creating connections that linger long
            after the last full stop.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#4a2c2a]">
            From brand copy to heartfelt essays, my words are where thought meets
            rhythm. Every sentence I craft carries my soul, refined by tradition yet
            driven by timeless creativity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
