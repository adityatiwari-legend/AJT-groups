"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, MessageSquare } from "lucide-react";
import { recruitmentDestinations } from "@/data/recruitmentDestinations";
import { studyAbroadDestinations } from "@/data/studyAbroadDestinations";

export default function Countries() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "study">("recruitment");

  const recruitmentList = recruitmentDestinations;
  const studyList = studyAbroadDestinations;

  const currentCountries = activeTab === "recruitment" ? recruitmentList : studyList;

  const whatsappRecruitment = "https://wa.me/919990998229?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20International%20Recruitment";
  const whatsappStudy = "https://wa.me/918595433005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20Study%20Abroad";

  const currentWhatsapp = activeTab === "recruitment" ? whatsappRecruitment : whatsappStudy;
  const currentPhone = activeTab === "recruitment" ? "+91-9990998229" : "+91-8595433005";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-3 block">
              Global Footprint ({recruitmentList.length}+ Recruitment &amp; {studyList.length}+ Study Hubs)
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight">
              Top Destinations We Connect You With
            </h2>
          </div>

          {/* Premium Tab Selector & WhatsApp Counselling Callout */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex bg-slate-100 p-1.5 rounded-xl border border-borders h-fit">
              <button
                onClick={() => setActiveTab("recruitment")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === "recruitment"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-custom hover:text-primary"
                }`}
              >
                Recruitment ({recruitmentList.length})
              </button>
              <button
                onClick={() => setActiveTab("study")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === "study"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-custom hover:text-primary"
                }`}
              >
                Study Abroad ({studyList.length})
              </button>
            </div>

            <a
              href={currentWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-3 rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Counselling Session</span>
            </a>
          </div>
        </div>

        {/* Countries Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentCountries.slice(0, 9).map((country) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-slate-50 border border-borders rounded-2xl p-6 hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Flag & Name Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-7 rounded border border-slate-200 overflow-hidden shadow-2xs">
                        <img
                          src={`https://flagcdn.com/${country.code}.svg`}
                          alt={`${country.name} Flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-base" role="img" aria-label={country.name}>{country.flag}</span>
                    </div>
                    <Globe className="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" />
                  </div>

                  {/* Country Name */}
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {country.name}
                  </h3>

                  {/* Description / Region */}
                  <p className="text-[13px] text-muted-custom leading-relaxed mb-5">
                    {"description" in country && country.description 
                      ? (country as any).description 
                      : `Premium ${activeTab === "recruitment" ? "recruitment & employment" : "study & university"} opportunities in ${country.region}.`}
                  </p>

                  {/* Pill Attributes */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeTab === "recruitment" 
                      ? (country as any).sectors?.map((sec: string, sIdx: number) => (
                          <span key={sIdx} className="text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-secondary px-2.5 py-1 rounded-md">
                            {sec}
                          </span>
                        ))
                      : (country as any).popularDegrees?.map((feat: string, fIdx: number) => (
                          <span key={fIdx} className="text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-accent px-2.5 py-1 rounded-md">
                            {feat}
                          </span>
                        ))
                    }
                  </div>
                </div>

                {/* Explore button & WhatsApp Counselling */}
                <div className="pt-4 border-t border-borders flex items-center justify-between gap-3">
                  <Link
                    href={activeTab === "recruitment" ? "/services/international-recruitment" : "/services/study-abroad"}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-primary hover:text-secondary transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={currentWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 fill-current" />
                    Book Counselling
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Banner */}
        <div className="mt-12 bg-slate-50 border border-borders rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-primary">
              Explore All {recruitmentList.length} International Recruitment Destinations &amp; {studyList.length} Study Hubs
            </h4>
            <p className="text-xs text-muted-custom mt-1">
              Direct WhatsApp guidance: <strong className="text-slate-700">{currentPhone}</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={currentWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Counselling Session</span>
            </a>
            <Link
              href={activeTab === "recruitment" ? "/services/international-recruitment" : "/services/study-abroad"}
              className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              View Full Destinations List
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
