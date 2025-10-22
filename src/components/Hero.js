import React from "react";
import profile from "../assets/ezinne.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${profile})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold">
          Words That <span className="text-red-400">Connect</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Passionate writer and editor helping individuals and businesses bring their ideas to life through engaging, professional content.
        </p>

        <div className="mt-6 flex space-x-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Start Your Project
          </a>
          <a
            href="#samples"
            className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
