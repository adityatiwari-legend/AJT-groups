"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Search, Sparkles, MessageSquare } from "lucide-react";
import { studyAbroadDestinations, StudyDestination } from "@/data/studyAbroadDestinations";

type RegionFilter = "All" | "Europe" | "Asia-Pacific" | "Americas" | "Middle East";

export default function StudyAbroadDestinations() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const regions: RegionFilter[] = ["All", "Europe", "Asia-Pacific", "Americas", "Middle East"];

  const whatsappStudy = "https://wa.me/919625903005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20Study%20Abroad";

  const filteredDestinations = useMemo(() => {
    return studyAbroadDestinations.filter((item) => {
      const matchesRegion = activeRegion === "All" || item.region === activeRegion;
      const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, searchQuery]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-secondary" />
              <span className="text-[12px] font-bold text-secondary tracking-widest uppercase">
                Global Education Hubs ({studyAbroadDestinations.length} Countries)
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-primary tracking-tight leading-tight">
              Study Abroad Destinations
            </h2>
            <p className="text-sm md:text-base text-muted-custom leading-relaxed mt-3">
              Explore higher education opportunities across the world&apos;s leading destinations with expert counseling.
            </p>
          </div>

          {/* Search & WhatsApp Counselling Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-muted-custom absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-borders rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-primary placeholder:text-muted-custom focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all shadow-sm"
              />
            </div>

            {/* Direct WhatsApp Counselling Button */}
            <a
              href={whatsappStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Counselling (+91-9625903005)</span>
            </a>
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {regions.map((region) => {
            const count = region === "All" 
              ? studyAbroadDestinations.length 
              : studyAbroadDestinations.filter(d => d.region === region).length;
            
            const isActive = activeRegion === region;
            
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                    : "bg-white text-muted-custom border border-borders hover:border-secondary/30 hover:text-primary"
                }`}
              >
                {region}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: 4-6 on desktop, 2-3 on tablet, 1-2 on mobile */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="/services/study-abroad"
                  className="group relative bg-white/90 backdrop-blur-md border border-borders hover:border-secondary/40 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 flex items-center gap-3.5 h-full overflow-hidden block"
                >
                  {/* Subtle hover accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

                  {/* Flag Container & Emoji */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative p-1 shadow-xs">
                    <img 
                      src={`https://flagcdn.com/${dest.code}.svg`}
                      alt={`${dest.name} Flag`}
                      className="w-full h-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Country Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors truncate">
                        {dest.name}
                      </h3>
                      <span className="text-xs flex-shrink-0" role="img" aria-label={dest.name}>{dest.flag}</span>
                    </div>
                    <p className="text-[11px] font-medium text-muted-custom truncate mt-0.5">
                      {dest.popularDegrees?.[0] || dest.region}
                    </p>
                  </div>

                  {/* Hover Arrow Icon */}
                  <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-secondary group-hover:text-white text-slate-400 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if search returns nothing */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-white border border-dashed border-borders rounded-2xl">
            <Sparkles className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-bold text-primary">No destinations found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveRegion("All"); }}
              className="mt-4 text-xs font-bold text-secondary hover:underline cursor-pointer"
            >
              Clear filters and view all {studyAbroadDestinations.length} destinations
            </button>
          </div>
        )}

        {/* Footer Summary / CTA banner */}
        <div className="mt-14 pt-8 border-t border-borders/60 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-borders">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-accent flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-primary">
                Planning to study in one of these {studyAbroadDestinations.length} destinations?
              </h4>
              <p className="text-xs text-muted-custom mt-0.5">
                Connect on WhatsApp (+91-9625903005). Our academic counselors will evaluate your profile and guide you.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Counselling Session</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
