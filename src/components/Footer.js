import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-10">
      <h3 className="text-white text-xl font-semibold mb-2">
        Ezinne Goodness Madu
      </h3>
      <p className="mb-4 text-sm">
        Professional writer and editor dedicated to creating content that
        inspires, informs, and connects with your audience.
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <a href="mailto:madugoodness16@gmail.com" className="hover:text-white">📧</a>
        <a href="tel:+2348106499671" className="hover:text-white">📞</a>
        <a
          href="https://fiverr.com/ezinne_goodness"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          💼
        </a>
      </div>
    </footer>
  );
}

export default Footer;
