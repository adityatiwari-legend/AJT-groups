"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Search, MessageSquare } from "lucide-react";
import { recruitmentDestinations } from "@/data/recruitmentDestinations";
import { studyAbroadDestinations } from "@/data/studyAbroadDestinations";

export default function CountriesPage() {
  const [filter, setFilter] = useState<"all" | "recruitment" | "study">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const whatsappRecruitment = "https://wa.me/919990998229?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20International%20Recruitment";
  const whatsappStudy = "https://wa.me/918595433005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20Study%20Abroad";

  const allCountries = useMemo(() => {
    const rec = recruitmentDestinations.map(r => ({
      name: r.name,
      flag: r.flag,
      code: r.code,
      type: "recruitment" as const,
      slug: r.slug,
      desc: `International recruitment market for ${r.sectors?.slice(0, 3).join(", ") || r.region}.`,
      region: r.region
    }));

    const std = studyAbroadDestinations.map(s => ({
      name: s.name,
      flag: s.flag,
      code: s.code,
      type: "study" as const,
      slug: s.slug,
      desc: `Top study destination offering ${s.popularDegrees?.slice(0, 3).join(", ") || s.region} programs.`,
      region: s.region
    }));

    return [...rec, ...std];
  }, []);

  const filteredCountries = useMemo(() => {
    return allCountries.filter(c => {
      const matchesType = filter === "all" || c.type === filter;
      const matchesQuery = c.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [allCountries, filter, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Global Footprint</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Our Destinations</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            We connect candidates and students with {recruitmentDestinations.length} international recruitment markets and top global study destinations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappRecruitment}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="font-bold">Recruitment Counselling (+91-9990998229)</span>
            </a>
            <a
              href={whatsappStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 text-xs md:text-sm font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-amber-600 fill-current" />
              <span className="font-bold">Study Abroad Counselling (+91-8595433005)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex justify-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: `All Destinations (${allCountries.length})` },
              { id: "recruitment", label: `Recruitment (${recruitmentDestinations.length})` },
              { id: "study", label: `Study Abroad (${studyAbroadDestinations.length})` }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  filter === f.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-muted-custom border border-borders hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px] w-full md:w-auto">
            <Search className="w-4 h-4 text-muted-custom absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-borders rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-primary placeholder:text-muted-custom focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country, idx) => {
            const waLink = country.type === "recruitment" ? whatsappRecruitment : whatsappStudy;
            
            return (
              <div
                key={`${country.slug}-${country.type}-${idx}`}
                className="bg-white border border-borders rounded-2xl p-5 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-6 rounded border border-slate-200 overflow-hidden shadow-2xs">
                        <img
                          src={`https://flagcdn.com/${country.code}.svg`}
                          alt={`${country.name} Flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm" role="img" aria-label={country.name}>{country.flag}</span>
                    </div>

                    <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded ${
                      country.type === "recruitment" 
                        ? "bg-blue-50 text-secondary" 
                        : "bg-amber-50 text-accent"
                    }`}>
                      {country.type === "recruitment" ? "Recruitment" : "Study"}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-primary mb-1">{country.name}</h3>
                  <p className="text-xs text-muted-custom leading-relaxed mb-4">{country.desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
                  <Link
                    href={country.type === "recruitment" ? "/services/international-recruitment" : "/services/study-abroad"}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 fill-current" />
                    Book Session
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
