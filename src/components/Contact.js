import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
        <p className="text-gray-700 mb-10">
          Ready to bring your ideas to life? Fill out the form below and Ezinne will respond shortly.
        </p>

        <form
          action="https://formspree.io/f/mrbyvbzl"  // ✅ your actual Formspree link
          method="POST"
          className="space-y-4 text-left bg-white shadow-lg p-8 rounded-xl"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
