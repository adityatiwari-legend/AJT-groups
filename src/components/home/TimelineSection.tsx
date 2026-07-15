"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSearch, 
  Users, 
  ClipboardCheck, 
  UserCheck, 
  FileText, 
  FileSignature, 
  Plane, 
  CheckCircle,
  HelpCircle,
  MessageSquare,
  BookOpen,
  GraduationCap,
  Sparkles,
  Home,
  Compass,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const recruitmentSteps = [
  { title: "Requirement Analysis", desc: "Collaborating with clients to map exact skill matrices, compliance limits, and salary metrics.", icon: FileSearch },
  { title: "Candidate Sourcing", desc: "Accessing our proprietary 500k+ database and carrying out localized talent sourcing campaigns.", icon: Users },
  { title: "Screening", desc: "Strict verification of credentials, qualifications, medical history, and pre-interviews.", icon: ClipboardCheck },
  { title: "Interview Selection", desc: "Coordination of virtual or physical interview panels including specialized trade testing.", icon: UserCheck },
  { title: "Documentation", desc: "Drafting employment agreements, salary structures, and checking statutory MEA compliance.", icon: FileText },
  { title: "Visa Processing", desc: "Embassy submission, attestation checks, and fast-track coordination for clearance.", icon: FileSignature },
  { title: "Travel Booking", desc: "Logistics routing, flights booking, and compiling pre-departure travel packets.", icon: Plane },
  { title: "Deployment", desc: "On-site arrivals, airport reception, and client-employer site handovers.", icon: CheckCircle },
  { title: "Post-Arrival Support", desc: "Regular contact checkpoints to ensure employee adaptation and client satisfaction.", icon: MessageSquare }
];

const studySteps = [
  { title: "Counselling", desc: "One-on-one sessions evaluating academic interests, aptitude, budget, and dreams.", icon: Compass },
  { title: "Course Selection", desc: "Assessing global course matrices to select programs aligned with long-term jobs.", icon: BookOpen },
  { title: "University Selection", desc: "Shortlisting tier-1 universities matching academic grades, scholarships, and locations.", icon: GraduationCap },
  { title: "Admission Curation", desc: "Curation of statement of purpose (SOP), recommendation letters, and filing admissions.", icon: Sparkles },
  { title: "Offer Letter", desc: "Receiving conditional/unconditional offers and managing university deposits.", icon: FileText },
  { title: "Visa File Prep", desc: "Compiling financial evidence, academic records, and booking student visa interviews.", icon: FileSignature },
  { title: "Accommodation", desc: "Assisting in secure student housing block bookings close to campus.", icon: Home },
  { title: "Travel Coordination", desc: "Student group ticketing, packing guidelines, and forex money conversions.", icon: Plane },
  { title: "Orientation", desc: "Pre-departure briefings and initial city guidelines to smooth campus arrival.", icon: CheckCircle }
];

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "study">("recruitment");
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = activeTab === "recruitment" ? recruitmentSteps : studySteps;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header and Controller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
              Execution Pipelines
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight">
              Our Structured Processes for Guaranteed Success
            </h2>
          </div>

          {/* Toggle buttons & Scroll Navigation */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex bg-slate-100 p-1.5 rounded-xl border border-borders">
              <button
                onClick={() => setActiveTab("recruitment")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === "recruitment"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-custom hover:text-primary"
                }`}
              >
                Recruitment Flow
              </button>
              <button
                onClick={() => setActiveTab("study")}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === "study"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-custom hover:text-primary"
                }`}
              >
                Study Abroad Journey
              </button>
            </div>

            {/* Scroll buttons */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-11 h-11 rounded-lg border border-borders flex items-center justify-center bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4 text-primary" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-11 h-11 rounded-lg border border-borders flex items-center justify-center bg-white hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Horizontal Scrollable List */}
        <div className="relative">
          {/* Faded edges indicators */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Timeline track line */}
          <div className="absolute top-[52px] left-10 right-10 h-[1.5px] bg-slate-100 -z-10" />

          <div 
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar flex gap-8 pb-8 pt-4 px-6 relative"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <AnimatePresence mode="wait">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={`${activeTab}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="w-[280px] md:w-[320px] flex-shrink-0 select-none"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    {/* Circle Node on Timeline */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm shadow-md border-4 border-white relative z-10">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="text-[11px] font-bold text-accent tracking-widest uppercase">
                        Step {idx + 1}
                      </div>
                    </div>

                    {/* Step Card Details */}
                    <div className="bg-slate-50 border border-borders rounded-2xl p-6 min-h-[220px] hover:border-secondary/20 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-secondary/5 text-secondary flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-[16px] font-bold text-primary mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-custom leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
