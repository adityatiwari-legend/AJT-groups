"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Structural Engineer",
    country: "Romania 🇷🇴",
    text: "AJT Overseas guided me through the entire European recruitment process. From the trade testing to the visa embassy clearance in Delhi, everything was managed with absolute integrity. I am now happily deployed in Romania.",
    rating: 5
  },
  {
    name: "Ananya Deshmukh",
    role: "M.Sc. Data Science Student",
    country: "Germany 🇩🇪",
    text: "My dream was to study in Germany. The academic advisors at AJT helped me draft my SOP, apply to public universities, secure admission, and prepare for my visa interview. I recommend them for study consultancy.",
    rating: 5
  },
  {
    name: "Joseph Fernandes",
    role: "CNC Operator",
    country: "Poland 🇵🇱",
    text: "I was looking for manufacturing jobs in Poland. The recruitment consultants at AJT matched me with a tier-1 auto components manufacturer, handled my work permits, and supported my pre-departure orientation. Excellent service.",
    rating: 5
  },
  {
    name: "Dr. Sandeep Nair",
    role: "Senior Consultant Surgeon",
    country: "Saudi Arabia 🇸🇦",
    text: "For healthcare recruitment, AJT Overseas is top-tier. They processed my credential verification, coordinates the interviews, and expedited my work visa clearance with the ministry. A highly professional corporate outfit.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            Client &amp; Candidate Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
            Testimonials From Global Placements
          </h2>
          <p className="text-[17px] text-muted-custom leading-relaxed">
            Read stories of professionals and students who transitioned their careers and academic journeys through AJT Overseas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[32px] p-8 md:p-12 shadow-xl border border-borders relative flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 -z-10" />

              {/* Left Profile Area */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left min-w-[200px]">
                {/* Avatar Icon */}
                <div className="w-20 h-20 rounded-full bg-secondary text-white font-extrabold text-2xl flex items-center justify-center mb-4 border-4 border-slate-50 shadow-md">
                  {testimonials[activeIndex].name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs text-muted-custom mb-3 font-semibold">
                  {testimonials[activeIndex].role}
                </p>
                <span className="text-[11px] font-bold bg-secondary/5 text-secondary px-3 py-1.5 rounded-full border border-secondary/10">
                  {testimonials[activeIndex].country}
                </span>
              </div>

              {/* Right Review Content */}
              <div className="flex-grow flex flex-col justify-center">
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-5 justify-center md:justify-start">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[16px] md:text-lg text-primary leading-relaxed italic text-center md:text-left">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl border border-borders bg-white hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl border border-borders bg-white hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx ? "bg-secondary w-6" : "bg-slate-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
