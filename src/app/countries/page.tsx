"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

const countriesList = [
  { name: "Romania", flag: "🇷🇴", type: "recruitment", slug: "romania", desc: "A key European market with growing demands in manufacturing, logistics, and hospitality." },
  { name: "Poland", flag: "🇵🇱", type: "recruitment", slug: "poland", desc: "One of Central Europe's largest economies, hiring engineers, truck drivers, and builders." },
  { name: "Croatia", flag: "🇭🇷", type: "recruitment", slug: "croatia", desc: "A popular EU tourist nation with opportunities in tourism, building, and retail." },
  { name: "United Arab Emirates", flag: "🇦🇪", type: "recruitment", slug: "uae", desc: "A top destination in the Gulf, offering tax-free roles in construction, hospitality, and IT." },
  { name: "Saudi Arabia", flag: "🇸🇦", type: "recruitment", slug: "saudi-arabia", desc: "A growing market with large-scale projects hiring engineers, technicians, and project managers." },
  { name: "Qatar", flag: "🇶🇦", type: "recruitment", slug: "qatar", desc: "An energy-rich country seeking expertise in oil & gas, construction, and corporate services." },
  
  { name: "United Kingdom", flag: "🇬🇧", type: "study", slug: "united-kingdom", desc: "Home to world-class academic institutions with flexible post-study work permit rights." },
  { name: "Canada", flag: "🇨🇦", type: "study", slug: "canada", desc: "A top choice for students, offering excellent paths to permanent residency after graduation." },
  { name: "Germany", flag: "🇩🇪", type: "study", slug: "germany", desc: "Highly regarded for tuition-free public universities and strong industrial growth." },
  { name: "Australia", flag: "🇦🇺", type: "study", slug: "australia", desc: "Offers a high standard of living, prestigious universities, and post-study work options." },
  { name: "Ireland", flag: "🇮🇪", type: "study", slug: "ireland", desc: "A tech hub in Europe, providing career opportunities for graduates." },
  { name: "United States", flag: "🇺🇸", type: "study", slug: "usa", desc: "Renowned for academic research and career opportunities in STEM fields." }
];

export default function CountriesPage() {
  const [filter, setFilter] = useState<"all" | "recruitment" | "study">("all");

  const filteredCountries = countriesList.filter(
    (c) => filter === "all" || c.type === filter
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Global Network</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Our Destinations</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We connect you with leading global recruitment markets and top study destinations around the world.
          </p>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12">
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "recruitment", "study"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                filter === f
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-muted-custom border border-borders hover:text-primary"
              }`}
            >
              {f === "all" ? "All Countries" : f === "recruitment" ? "Recruitment" : "Study Destinations"}
            </button>
          ))}
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country, idx) => (
            <div
              key={country.slug}
              className="bg-white border border-borders rounded-2xl p-6 hover:shadow-xl hover:border-secondary/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl filter drop-shadow-sm select-none">{country.flag}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-muted-custom px-2.5 py-1 rounded">
                    {country.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{country.name}</h3>
                <p className="text-xs text-muted-custom leading-relaxed mb-6">{country.desc}</p>
              </div>

              <div className="border-t border-slate-50 pt-4">
                <Link
                  href={`/countries/${country.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-secondary hover:text-accent group transition-colors"
                >
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
