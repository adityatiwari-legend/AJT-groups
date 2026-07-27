"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowRight, ShieldCheck, Search, Sparkles, MessageSquare, Globe, Eye, Download, CheckCircle2 } from "lucide-react";
import { recruitmentDestinations } from "@/data/recruitmentDestinations";

type RegionFilter = "All" | "Middle East" | "Europe" | "Asia-Pacific" | "Americas" | "Africa";

export default function InternationalRecruitment() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPosterModal, setShowPosterModal] = useState(false);

  const regions: RegionFilter[] = ["All", "Middle East", "Europe", "Asia-Pacific", "Americas", "Africa"];

  const filteredDestinations = useMemo(() => {
    return recruitmentDestinations.filter((item) => {
      const matchesRegion = activeRegion === "All" || item.region === activeRegion;
      const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, searchQuery]);

  const whatsappUrl = "https://wa.me/919718573005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20book%20a%20counselling%20session%20for%20International%20Recruitment";

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">
                Service Verticals
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                International Recruitment
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Bridging talent supply with global corporate demand. Sourcing, screening, trade testing, and deploying qualified candidates across 60+ global destinations.
              </p>
            </div>
            
            {/* Direct WhatsApp Counselling Button */}
            <div className="flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold px-7 py-4 rounded-2xl inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Book Your Counselling Session</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Official Poster & Overview Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-[12px] font-bold text-secondary tracking-widest uppercase">
                Govt. Approved Manpower Agency
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight leading-tight">
              Your Talent. Global Opportunities.
            </h2>
            
            <p className="text-[16px] text-muted-custom leading-relaxed">
              AJT Overseas holds a valid recruitment licence issued by the Ministry of External Affairs, Govt of India, enabling us to legally process worker deployments worldwide.
            </p>
            
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We specialize in providing high-caliber labor pools and technical staff across Gulf countries, Europe, Asia-Pacific, Africa, and the Americas.
            </p>

            {/* Profiles We Hire For List */}
            <div className="bg-white border border-borders rounded-2xl p-6 shadow-xs">
              <h3 className="text-xs font-extrabold text-primary tracking-widest uppercase mb-4">
                We Hire For Various Profiles:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  "Engineers (All Disciplines)",
                  "Technicians & Mechanics",
                  "Construction Workers",
                  "Electricians & Plumbers",
                  "HVAC & Pipe Fitters",
                  "Welders & Fabricators",
                  "Nurses & Healthcare",
                  "Hotel Management",
                  "Chefs & Kitchen Staff",
                  "Drivers (Light & Heavy)",
                  "Machine Operators",
                  "General Helpers & Staff"
                ].map((prof, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span className="truncate">{prof}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-xl inline-flex items-center gap-2.5 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Counselling Session (+91-9718573005)</span>
              </a>
              
              <button
                onClick={() => setShowPosterModal(true)}
                className="bg-white border border-borders text-primary hover:bg-slate-50 text-xs md:text-sm font-bold px-5 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-secondary" />
                <span>View Official Poster</span>
              </button>
            </div>
          </div>

          {/* Right Official Poster Display Card */}
          <div className="lg:col-span-5">
            <div className="group relative bg-white border border-borders rounded-[32px] p-4 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src="/images/international-recruitment-poster.jpg"
                  alt="AJT Overseas International Recruitment Official Poster"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Overlay Action Button */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-xs p-6 text-center">
                  <button
                    onClick={() => setShowPosterModal(true)}
                    className="bg-white text-primary text-xs font-bold px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-2 hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-secondary" />
                    <span>Expand Poster</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-2 hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Apply via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-xs font-bold text-primary">AJT Overseas Official Recruitment Poster</p>
                <p className="text-[11px] text-muted-custom mt-0.5">Call / WhatsApp: +91-9718573005 | hr@ajtoverseas.com</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 61 International Recruitment Destinations Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="bg-white border border-borders rounded-[32px] p-8 md:p-12 shadow-xs">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="text-[12px] font-bold text-secondary tracking-widest uppercase">
                  Global Reach ({recruitmentDestinations.length} Countries)
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
                International Recruitment Destinations
              </h2>
              <p className="text-sm text-muted-custom leading-relaxed mt-2">
                Discover job opportunities and candidate deployment pipelines across our active hiring countries.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-muted-custom absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search recruitment country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-borders rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-primary placeholder:text-muted-custom focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
              />
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
            {regions.map((region) => {
              const count = region === "All"
                ? recruitmentDestinations.length
                : recruitmentDestinations.filter(d => d.region === region).length;
              
              const isActive = activeRegion === region;
              
              return (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-100 text-muted-custom hover:bg-slate-200 hover:text-primary"
                  }`}
                >
                  {region}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-slate-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 61 Countries Grid with Flags */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5"
          >
            <AnimatePresence mode="popLayout">
              {filteredDestinations.map((dest) => (
                <motion.div
                  key={dest.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-slate-50 hover:bg-white border border-borders hover:border-secondary/30 rounded-xl p-3.5 transition-all duration-300 hover:shadow-md flex items-center gap-3"
                >
                  {/* Flag image and Emoji */}
                  <div className="w-9 h-7 rounded border border-slate-200 overflow-hidden shadow-2xs flex-shrink-0 bg-white relative">
                    <img
                      src={`https://flagcdn.com/${dest.code}.svg`}
                      alt={`${dest.name} Flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-primary truncate group-hover:text-secondary transition-colors">
                        {dest.name}
                      </h4>
                      <span className="text-xs flex-shrink-0" role="img" aria-label={dest.name}>
                        {dest.flag}
                      </span>
                    </div>
                    <p className="text-[10px] font-medium text-muted-custom truncate mt-0.5">
                      {dest.sectors?.[0] || dest.region}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty Search State */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12 border border-dashed border-borders rounded-2xl">
              <Sparkles className="w-7 h-7 text-slate-300 mx-auto mb-2" />
              <p className="text-xs font-bold text-primary">No countries found for &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveRegion("All"); }}
                className="mt-3 text-xs font-bold text-secondary hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Bottom Counselling Callout banner */}
          <div className="mt-10 pt-6 border-t border-borders flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/50 p-6 rounded-2xl">
            <div className="text-left">
              <h4 className="text-sm font-bold text-primary">
                Planning to hire or work in one of these {recruitmentDestinations.length} destinations?
              </h4>
              <p className="text-xs text-muted-custom mt-1">
                Connect directly with our International Recruitment Desk on WhatsApp for immediate guidance.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 whitespace-nowrap transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Counselling Session</span>
            </a>
          </div>

        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16">
        <div className="bg-primary text-white rounded-[32px] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.4)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Are you looking to hire or seek employment?</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10">
            Book your counselling session now with our recruitment team via WhatsApp (+91-9718573005).
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Counselling Session</span>
            </a>
            <Link href="/employers" className="w-full sm:w-auto bg-accent hover:bg-hover-accent text-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-md">
              Hire Talent Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Poster Modal Lightbox */}
      {showPosterModal && (
        <div
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-borders">
              <h3 className="text-sm font-bold text-primary">AJT Overseas International Recruitment Poster</h3>
              <button
                onClick={() => setShowPosterModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="overflow-y-auto p-2 my-2 flex justify-center bg-slate-900 rounded-2xl">
              <img
                src="/images/international-recruitment-poster.jpg"
                alt="AJT Overseas Official International Recruitment Poster"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="pt-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-custom">Call / WhatsApp: +91-9718573005 | hr@ajtoverseas.com</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Counselling on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
