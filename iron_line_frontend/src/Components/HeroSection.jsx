import React from "react";
import bg from "../assets/Images/bg.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[650px] flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Oil & Gas Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 text-white">
        <div className="max-w-3xl text-left">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            When Safety Matters, Strength Matters
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Leading Energy & Infrastructure Solutions
          </p>

          {/* Short Blurb */}
          {/* <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Iron Line Contracting delivers safe, high-quality pipeline and
            construction services with precision and integrity.
          </p>

          <p className="font-semibold text-white mb-6">
            Built strong. Built to last.
          </p> */}

          {/* Long Blurb */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
            Iron Line Contracting is a leading provider of pipeline, civil, and
            construction services for the oil & gas and infrastructure sectors.
            Our skilled teams and modern equipment ensure safe, efficient, and
            precise project execution—from pipeline installation to utilities,
            excavation, and structural concrete. Backed by a strong safety
            culture and unwavering commitment to quality, Iron Line
            Contracting delivers results that endure.
          </p>

          {/* Button */}
          <Link
            to="/services"
            className="inline-block bg-[#173E73] hover:bg-white hover:text-[#0F2A44] transition-all duration-300 px-8 py-3 rounded-md font-medium"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;