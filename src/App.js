import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { PenTool, FileText, SpellCheck, Type } from "lucide-react";


function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>



{/* ===== SERVICES SECTION ===== */}
<section id="services" className="relative py-20 px-8 text-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
  {/* AI Glow Background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,0,0.05),_transparent_70%)] animate-pulse"></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-gray-900">Services I Offer</h2>
    <p className="max-w-3xl mx-auto text-gray-600 mb-12">
      As a writer and editor, I provide a range of services tailored to meet the needs of businesses, students, and individuals. Here’s what I can do for you:
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-left">
      {/* Writing Services */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Writing Services ✍️</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• Blog posts & articles</li>
          <li>• Website content (About, Services, Landing Pages)</li>
          <li>• Creative writing — stories, inspirational pieces, scripts</li>
          <li>• Business & technical writing — ads, reports, proposals</li>
        </ul>
      </div>

      {/* Editing Services */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Editing Services ✒️</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• Restructuring sentences for clarity and flow</li>
          <li>• Enhancing tone and style to fit your target audience</li>
          <li>• Correcting grammar, spelling, and punctuation errors</li>
        </ul>
      </div>

      {/* Proofreading Services */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100">
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Proofreading Services 📖</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• Final checks for accuracy and consistency</li>
          <li>• Correcting typos, formatting, and readability issues</li>
          <li>• Ensuring your content is polished and ready for publishing</li>
        </ul>
      </div>
    </div>
  </div>
</section>{/* ===== WRITING & EDITING SAMPLES ===== */}
<section id="samples" className="py-20 px-8 bg-white text-center relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.03),_transparent_70%)]"></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-gray-900">Writing & Editing Samples</h2>
    <p className="max-w-2xl mx-auto text-gray-600 mb-12">
      A complete showcase of my work — academic editing, UX & landing page copy, and creative devotional writing for children.
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-left">
      {/* SAMPLE 1 — ACADEMIC EDITING (Before & After) */}
      <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80"
          alt="Editing Sample"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition">
          Critical Writing Excerpt — “Frame to Page: Nollywood and the Literary Afterlife”
        </h3>

        <p className="text-gray-600 mb-4">
          A professional editing example showing how I refine academic tone, clarity, and flow. Below are the client’s original abstract and my edited version.
        </p>

        <details className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-700">
          <summary className="cursor-pointer font-semibold text-red-600">Read Full Before & After</summary>

          <div className="mt-3 space-y-3">
            <div>
              <h4 className="font-semibold">Before (Client Draft)</h4>
              <p className="text-sm text-gray-700">
                ABSTRACT 
                This essay, titled “Page to Frame: The Nigerian Movie Industry and Literary Afterlife”delves into the unexplored practice of reverse adaptation within Nollywood, Nigeria’s prolific film industry.
                Traditionally, adaptation studies has been more about transformation of literary works into films, but this essay looks through the opposite perspective; how films  are being reimagined to literary works. While adaptation from literature to film is globally recognized and well documented, reverse adaptation is rare particularly in Nigeria.
                Furthermore, this essay examines the cultural and economic challenges that hinder reverse adaptation in Nigeria. These barriers include, market constraints, funding issues, and creative control. Despite these barriers, this essay argues that reverse adaptation poses as a great potential that should be tapped by the Nigerian literary sphere.
                The analysis of potential case studies and emerging trends suggests strategies that could advance novelization, emphasizing the importance of authors’ interest in the Nigerian movie industry. Most importantly, this essay projects the value of reverse adaptation as a creative process that could enrich Nigeria’s literary scene, while presenting a new and broader perspective  of adaptation studies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">After (Edited Version)</h4>
              <p className="text-sm text-gray-700">
                ABSTRACT  
                This essay, titled “Frame to Page: Nollywood and the Literary Afterlife”, investigates the unexplored practice of reverse adaptation within Nollywood, Nigeria’s prolific film industry. Traditionally, adaptation studies have indulged in the transformation of literary works into films, overlooking how artists could also re-imagine films into literary works that will blossom more meaningfully.
                While adaptation from literature to film is a well-documented global phenomenon, reverse adaptation is rare, particularly in Nigeria. Drawing on adaptation theories from scholars like Linda Hutcheon and Robert Stam, this essay compares the scarcity of reverse adaptation, especially novelisation, in Nigeria, and by extension, Africa, to its prevalence in other regions of the world.
                Also, the essay examines cultural and economic challenges that hinder reverse adaptation in Nigeria, such as market constraints, funding issues, and creative control. Despite these barriers, the essay argues that reverse adaptation offers great potentials that should be tapped into by the Nigerian literary sphere.
                The analysis of potential case studies and emerging trends suggests strategies that could advance novelisation, emphasizing the importance of authors’ interest in the Nigerian movie industry. Most importantly, this essay projects the value of reverse adaptation as a creative process that could enrich Nigeria’s literary space, while presenting a new and broader perspective of adaptation studies.
              </p>

              <p className="mt-2 text-xs italic text-gray-500">
                Keywords: adaptation, reverse adaptation, novelisation, Nollywood, Hollywood.
              </p>
            </div>
          </div>
        </details>
      </div>

      {/* SAMPLE 2 — IQUIRE.CO UX & LANDING PAGE COPY */}
      <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
          alt="Iquire UX Writing"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition">
          UX & Landing Page Copy — iQuire.co
        </h3>

        <p className="text-gray-600 mb-3">
          I wrote the landing page and UI microcopy for iQuire — making the product’s promise clear, human, and action-driven.
        </p>

        <details className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-700">
          <summary className="cursor-pointer font-semibold text-red-600">Read Full Landing Page Copy</summary>

          <div className="mt-3 space-y-3 text-gray-700">
            <h4 className="font-semibold">Headline & Hero Section</h4>
            <p>
              <strong>Empowering Africa’s Future Leaders</strong><br />
              Launch Your Career with Confidence.<br />
              Master the real world skills employers want without breaking the bank. Join thousands of graduates, young professionals, and career changers gaining real-world skills, mentorship, and industry connections.
            </p>

            <div className="mt-2">
              <strong>Primary CTAs:</strong><br />
              [Create Your Free Account] [Join Our Community on WhatsApp]
            </div>

            <h4 className="font-semibold mt-3">Key UX lines & features (microcopy)</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Live Virtual, Hands-on, Practical, and Impactful classes.</li>
              <li>Live classes with supportive tutors.</li>
              <li>Well-crafted simplified slides and teaching style.</li>
              <li>Interactive and supportive classes — every class includes tasks and assessments.</li>
              <li>Regular group and individual presentations, tasks and hands-on projects.</li>
              <li>Supportive and empathetic tutors.</li>
              <li>CV, LinkedIn Optimization and Portfolio Projects for recruiters.</li>
            </ul>

            <p className="mt-3">
              (Completed Website interface) — copy this link to your browser to view:
            </p>
            <a href="https://www.iquire.co/" target="_blank" rel="noopener noreferrer" className="text-red-500 font-semibold hover:underline">
              https://www.iquire.co/
            </a>
          </div>
        </details>
      </div>

      {/* SAMPLE 3 — CREATIVE WRITING: DAILY DEVOTIONAL FOR CHILDREN */}
      <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=900&q=80"
          alt="Children's Devotional"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition">
          Creative Writing — Daily Devotional for Children (Ages 6–12)
        </h3>

        <p className="text-gray-600 mb-3">
          Beginner-level devotional lessons that teach biblical truths with warmth, a memory verse, a short activity and a prayer.
        </p>

        <details className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-700">
          <summary className="cursor-pointer font-semibold text-red-600">Read Full Devotional Samples</summary>

          <div className="mt-3 space-y-3 text-gray-700">
            <p className="font-semibold">BEGINNERS - LEVEL 1</p>

            <div>
              <p className="font-semibold">KNOWLEDGE OF THE TRINITY: THE INTEGRITY OF GOD</p>
              <p className="mt-1"><strong>Topic:</strong> Who is God?</p>
              <p className="mt-1 text-sm">
                <strong>Bible Text:</strong> Isaiah 44:24<br />
                <strong>Memory Verse:</strong> "In the beginning, God created the heavens and the earth." – Genesis 1:1
              </p>
              <p className="mt-2 text-sm">
                God is the creator of everything! He made the world, the stars, the trees, the animals, and even you. He loves us so much and wants us to know Him. God is always true, kind, and powerful.
              </p>
              <p className="mt-2"><strong>Activity:</strong> Look outside and name three things God created. Thank Him for them.</p>
              <p className="mt-2"><strong>Prayer:</strong> Father help me to know who you are.</p>
            </div>

            <div className="mt-3">
              <p className="font-semibold">Topic: The One True God in Three Persons</p>
              <p className="mt-1 text-sm">
                <strong>Memory Verse:</strong> "For there are three that bear witness in heaven: the Father, the Word, and the Holy Spirit; and these three are one." - 1 John 5:7
              </p>
              <p className="mt-2 text-sm">
                God is one, but He is also three persons – God the Father, God the Son (Jesus), and God the Holy Spirit. This is called the Trinity. It may be hard to understand, but it is true!
              </p>
              <p className="mt-2 text-sm">
                <strong>Activity:</strong> Imagine an egg. It has three parts; the shell, the white, and the yolk, but it is still one egg. This helps us understand the Trinity.
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>
{/* Tools Section */}
<section className="py-16 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Tools I Use</h2>
  <div className="flex justify-center gap-8 flex-wrap">
    <div className="flex flex-col items-center">
      <FileText className="text-red-500 w-8 h-8 mb-2" />
      <p>Microsoft Word</p>
    </div>
    <div className="flex flex-col items-center">
      <Type className="text-red-500 w-8 h-8 mb-2" />
      <p>Google Docs</p>
    </div>
    <div className="flex flex-col items-center">
      <SpellCheck className="text-red-500 w-8 h-8 mb-2" />
      <p>Grammarly</p>
    </div>
    <div className="flex flex-col items-center">
      <PenTool className="text-red-500 w-8 h-8 mb-2" />
      <p>Hemingway Editor</p>
    </div>
  </div>
</section>




      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-12">
          Let’s bring your words to life. Fill out the form below or email me directly—I’d love to hear from you.
        </p>

        <form
          action="https://formspree.io/f/mrbyvbzl"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* Footer Section */}
<footer className="bg-black text-gray-300 py-10 px-8 text-center">
  <div className="max-w-5xl mx-auto">
    <h3 className="text-2xl font-semibold text-white mb-4">
      Ezinne Goodness
    </h3>
    <p className="text-gray-400 mb-6">
      Professional Writer • Editor • UX Copy Specialist
    </p>

    <div className="flex justify-center space-x-6 mb-6">
      <a
        href="#home"
        className="hover:text-white transition"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:text-white transition"
      >
        About
      </a>
      <a
        href="#services"
        className="hover:text-white transition"
      >
        Services
      </a>
      <a
        href="#samples"
        className="hover:text-white transition"
      >
        Samples
      </a>
      <a
        href="#contact"
        className="hover:text-white transition"
      >
        Contact
      </a>
    </div>

    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Ezinne Goodness. All rights reserved.
    </p>

   </div>
</footer>

    </div>
  );
}

export default App;
