import React, { useState } from "react";

const samples = [
  {
    id: 1,
    title: "The Power of Consistency",
    intro:
      "Success doesn’t come from one big effort—it comes from small, consistent steps that build credibility, skill, and results.",
    full: `Consistency is the bridge between goals and success. It’s not talent or luck that creates results—it’s the daily discipline to show up, even when motivation fades. 
In writing, consistency builds trust. Readers, clients, and audiences come to expect your voice and reliability. Over time, that steady rhythm becomes your identity.`,
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Why Storytelling Sells",
    intro:
      "People remember stories, not specs. Brands that use storytelling connect deeper with their audience and build trust.",
    full: `Storytelling transforms content from information to emotion.  
A good story draws people in—it humanizes your brand, gives life to your mission, and makes your audience feel something real. 
Every brand has a story; the art lies in telling it in a way that connects.`,
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "Creative Devotional Writing",
    intro:
      "God is the creator of everything! He made the world, the stars, the trees, the animals, and even you. He loves us deeply.",
    full: `Devotional writing is not just about words—it’s about the spirit behind them.  
Each piece should draw the reader closer to divine truth while keeping their attention engaged through vivid storytelling, emotion, and clarity.`,
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 4,
    title: "Editing Samples (Before & After)",
    intro:
      "Polishing content through structure, clarity, and tone makes all the difference.",
    full: `Before: Success are not easy. If you want to be a writer, you must keep writing everyday and never stop, because only practice makes perfect and that what makes you good.

After: Success is not easy. If you want to become a writer, you must keep writing every day and never stop. Consistent practice is what makes you better.`,
    image: "https://via.placeholder.com/400x250",
  },
];

export default function Samples() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="samples" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">Writing Samples</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Here are a few of my recent works — blending creativity, clarity, and
        professionalism.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <img
              src={sample.image}
              alt={sample.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
              <p className="text-gray-600 mb-4">{sample.intro}</p>
              <button
                onClick={() => setSelected(sample)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* iQuire.io button */}
      <div className="mt-12">
        <a
          href="https://iquire.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          View More on iQuire.io
        </a>
      </div>

      {/* Modal for full text */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selected.full}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
