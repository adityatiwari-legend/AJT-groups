"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

const recruitmentCountries = [
  {
    name: "Romania",
    flag: "🇷🇴",
    description: "Emerging European hub offering extensive opportunities in manufacturing, construction, and hospitality.",
    slug: "romania",
    sectors: ["Manufacturing", "Construction", "Hospitality"]
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    description: "Rapidly expanding logistics, engineering, and tech sectors hiring global professionals.",
    slug: "poland",
    sectors: ["Logistics", "Engineering", "Production"]
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    description: "Booming tourism, construction, and service industries seeking skilled international workers.",
    slug: "croatia",
    sectors: ["Tourism", "Construction", "Services"]
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    description: "Global finance, construction, and healthcare capital with premium tax-free income packages.",
    slug: "uae",
    sectors: ["Healthcare", "Retail", "Engineering"]
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    description: "Mega-scale infrastructure projects driving energy, engineering, and heavy construction hiring.",
    slug: "saudi-arabia",
    sectors: ["Oil & Gas", "Infrastructure", "Engineering"]
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    description: "Energy-rich nation sourcing skilled talent in oil & gas, infrastructure, and luxury hospitality.",
    slug: "qatar",
    sectors: ["Oil & Gas", "Hospitality", "Operations"]
  }
];

const studyCountries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Home to world-class prestigious universities offering high post-study work permit rights.",
    slug: "united-kingdom",
    features: ["Top 100 Universities", "2-Year Post Study Work", "No IELTS Pathways"]
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    description: "Highly inclusive nation with premium pathways for permanent residency and part-time jobs.",
    slug: "canada",
    features: ["PGWP up to 3 Years", "PR Pathway options", "Top Student Cities"]
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    description: "Excellence in engineering, tuition-free public universities, and strong industrial career growth.",
    slug: "germany",
    features: ["Zero Tuition Public Uni", "18-Month Job Seek Visa", "Engineering Hub"]
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "Stunning lifestyle, highly ranked universities, and great post-study research opportunities.",
    slug: "australia",
    features: ["Post-Study Work Rights", "Stunning Student Life", "Scholarships up to 50%"]
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    description: "European headquarters of major tech & pharma companies offering high-paying graduate careers.",
    slug: "ireland",
    features: ["Tech & Pharma Capital", "2-Year Post Study Work", "English Speaking EU"]
  },
  {
    name: "United States",
    flag: "🇺🇸",
    description: "Pinnacle of research, venture capital, and career launches in science and business management.",
    slug: "usa",
    features: ["OPT up to 3 Years (STEM)", "Ivy League Education", "Global Headquarter Careers"]
  }
];

export default function Countries() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "study">("recruitment");

  const currentCountries = activeTab === "recruitment" ? recruitmentCountries : studyCountries;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
              Global Footprint
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight">
              Top Destinations We Connect You With
            </h2>
          </div>

          {/* Premium Tab Selector */}
          <div className="flex bg-slate-100 p-1.5 rounded-xl border border-borders h-fit">
            <button
              onClick={() => setActiveTab("recruitment")}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === "recruitment"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-custom hover:text-primary"
              }`}
            >
              Recruitment Countries
            </button>
            <button
              onClick={() => setActiveTab("study")}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === "study"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-custom hover:text-primary"
              }`}
            >
              Study Abroad
            </button>
          </div>
        </div>

        {/* Countries Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {currentCountries.map((country, idx) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-slate-50 border border-borders rounded-2xl p-7 hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Flag & Name Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl filter drop-shadow-sm select-none">{country.flag}</span>
                    <Globe className="w-5 h-5 text-slate-300 group-hover:text-secondary transition-colors" />
                  </div>

                  {/* Country Name */}
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                    {country.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-muted-custom leading-relaxed mb-6">
                    {country.description}
                  </p>

                  {/* Pill Attributes */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeTab === "recruitment" 
                      ? (country as typeof recruitmentCountries[0]).sectors.map((sec, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-secondary px-2.5 py-1 rounded-md">
                            {sec}
                          </span>
                        ))
                      : (country as typeof studyCountries[0]).features.map((feat, fIdx) => (
                          <span key={fIdx} className="text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-accent px-2.5 py-1 rounded-md">
                            {feat}
                          </span>
                        ))
                    }
                  </div>
                </div>

                {/* Explore button */}
                <div className="pt-5 border-t border-borders">
                  <Link
                    href={`/countries/${country.slug}`}
                    className="inline-flex items-center justify-between w-full text-[13px] font-bold text-primary hover:text-secondary group/btn transition-colors"
                  >
                    Explore Opportunities
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-muted-custom group-hover/btn:text-secondary" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See all footer */}
        <div className="text-center mt-14">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 bg-slate-50 border border-borders text-primary hover:bg-slate-100 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-sm hover:shadow"
          >
            Explore All 25+ Countries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
