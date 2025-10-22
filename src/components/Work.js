export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Portfolio Samples</h2>

        {/* Writing Samples */}
        <h3 className="text-2xl font-semibold mb-4">✍️ Writing Samples</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="font-bold">The Power of Consistency</h4>
            <p className="text-gray-600 mt-2">
              Success doesn’t come from one big effort—it comes from small, consistent steps that build credibility, skill, and results.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="font-bold">Why Storytelling Sells</h4>
            <p className="text-gray-600 mt-2">
              People remember stories, not specs. Brands that use storytelling connect deeper with their audience and build trust.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="font-bold">Creative Devotional Writing</h4>
            <p className="text-gray-600 mt-2">
              God is the creator of everything! He made the world, the stars, the trees, the animals, and even you. He loves us deeply.
            </p>
          </div>
        </div>

        {/* Editing Samples */}
        <h3 className="text-2xl font-semibold mb-4">📝 Editing Samples (Before & After)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="font-bold">Before</h4>
            <p className="text-gray-600 mt-2">
              Success are not easy. If you want to be a writer, you must keep writing everyday and never stop, because only practice makes perfect and that what makes you good.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h4 className="font-bold">After</h4>
            <p className="text-gray-600 mt-2">
              Success is not easy. If you want to become a writer, you must keep writing every day and never stop. Consistent practice is what makes you better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
