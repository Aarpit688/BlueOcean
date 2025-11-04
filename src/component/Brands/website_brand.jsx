import React from "react";

export default function WebsiteBrand() {
  return (
    <section className="w-full bg-blue-900 py-20 px-4 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
          Explore Our Full Collection
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 mb-12 text-balance">
          Discover more sustainable designs and shop our latest arrivals on our official website.
        </p>

        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
          VISIT OUR WEBSITE
        </button>
      </div>
    </section>
  );
}