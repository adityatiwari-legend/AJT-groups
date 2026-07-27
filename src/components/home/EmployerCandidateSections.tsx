"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Building2, 
  UserCheck, 
  GraduationCap, 
  FolderCheck,
  Search,
  Users,
  Compass,
  Coins,
  MessageSquare,
  Eye,
  CheckCircle2
} from "lucide-react";

export default function EmployerCandidateSections() {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const whatsappRecruitment = "https://wa.me/919718573005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20book%20a%20counselling%20session%20for%20International%20Recruitment";
  const whatsappStudy = "https://wa.me/919625903005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20book%20a%20counselling%20session%20for%20Study%20Abroad";

  return (
    <div className="flex flex-col">
      
      {/* 1. Employer Section (Dark Background) */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">
                For Global Employers &amp; Recruitment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-6">
                Your Talent. Global Opportunities.
              </h2>
              <p className="text-[16px] text-white/80 leading-relaxed mb-8 max-w-2xl">
                AJT Overseas is the trusted manpower provider for global enterprises. We manage everything from executive search mandates to bulk project deployments of skilled labor across 60+ countries.
              </p>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Permanent Hiring", desc: "Rigorous talent matching for long-term technical and managerial positions." },
                  { title: "Bulk Project Mobilization", desc: "Fast sourcing and clearing of large-scale engineering & construction crews." },
                  { title: "Executive Search", desc: "Headhunting key director-level and senior technical executives globally." },
                  { title: "Trade Skill Testing", desc: "In-house evaluation centers verifying practical trade expertise before mobilization." },
                  { title: "Interview Management", desc: "Virtual and on-site interviewing setups, ensuring absolute selection control." }
                ].map((sol, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-1">{sol.title}</h4>
                      <p className="text-xs text-white/60 leading-normal">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={whatsappRecruitment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Counselling Session (+91-9718573005)</span>
                </a>
                <Link
                  href="/services/international-recruitment"
                  className="w-full sm:w-auto bg-accent hover:bg-hover-accent text-primary text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  View Destinations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic / Poster Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-md relative group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">International Recruitment</h4>
                      <p className="text-[10px] text-white/50">Official Manpower Sourcing</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPoster("/images/international-recruitment-poster.jpg")}
                    className="text-xs text-accent hover:underline flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Expand Poster
                  </button>
                </div>
                
                {/* Official Poster Thumbnail */}
                <div 
                  onClick={() => setSelectedPoster("/images/international-recruitment-poster.jpg")}
                  className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-lg group/img"
                >
                  <img
                    src="/images/international-recruitment-poster.jpg"
                    alt="International Recruitment Official Poster"
                    className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                    <Eye className="w-4 h-4" /> Click to view full poster
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                  <span>Call/WhatsApp: <strong>+91-9718573005</strong></span>
                  <a
                    href={whatsappRecruitment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold hover:underline"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Candidate Section (Light Background) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-slate-50 border border-borders rounded-[32px] p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Candidate Readiness</h4>
                    <p className="text-[10px] text-muted-custom">Pre-flight checklist</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    "Professional Resume Refinement",
                    "Apostille & Embassy Verification",
                    "Pre-departure Cultural Briefings",
                    "Visa Interview Simulations",
                    "Arrival Support & Job Handover"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-primary">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[12px] font-bold text-secondary tracking-widest uppercase mb-4 block">
                For Skilled Candidates
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-primary tracking-tight leading-tight mb-6">
                Accelerate Your International Career Search
              </h2>
              <p className="text-[16px] text-muted-custom leading-relaxed mb-8">
                We work closely with qualified Indian professionals, facilitating jobs across European Union states, GCC countries, and Southeast Asia. We support your profile building, documentation attestation, and visa coordination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit">
                    <FolderCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-primary mb-1">Resume Optimization</h4>
                    <p className="text-xs text-muted-custom leading-normal">Formatting resumes to match European and international standards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg h-fit">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-primary mb-1">Interview Coaching</h4>
                    <p className="text-xs text-muted-custom leading-normal">Mock sessions preparing you to present expertise to foreign employers.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={whatsappRecruitment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Counselling Session</span>
                </a>
                <Link
                  href="/jobs"
                  className="w-full sm:w-auto bg-secondary hover:bg-primary text-white text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
                >
                  Register as Candidate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Study Abroad Section (Soft Slate Background) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">
                For Students &amp; Scholars
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-primary tracking-tight leading-tight mb-6">
                Pursue Academic Excellence at Global Universities
              </h2>
              <p className="text-[16px] text-muted-custom leading-relaxed mb-8">
                Our consultancy connects you directly to universities across the UK, Europe, Canada, and Australia. We offer end-to-end guidance, helping you secure admissions, access scholarships, verify documentation, and acquire student visas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg h-fit">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-primary mb-1">Scholarship Advisory</h4>
                    <p className="text-xs text-muted-custom leading-normal">Scouting government and institution grants to lower tuition costs.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg h-fit">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-primary mb-1">University Pairing</h4>
                    <p className="text-xs text-muted-custom leading-normal">Shortlisting programs based on admission statistics and career horizons.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={whatsappStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Counselling Session (+91-9625903005)</span>
                </a>
                <Link
                  href="/services/study-abroad"
                  className="w-full sm:w-auto bg-accent hover:bg-hover-accent text-primary text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
                >
                  Explore Destinations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic / Poster Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-borders rounded-[32px] p-6 shadow-md relative group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-accent">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Study Abroad Program</h4>
                      <p className="text-[10px] text-muted-custom">University Advisory</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPoster("/images/study-abroad-poster.jpg")}
                    className="text-xs text-secondary hover:underline flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Expand Poster
                  </button>
                </div>

                {/* Poster Thumbnail */}
                <div 
                  onClick={() => setSelectedPoster("/images/study-abroad-poster.jpg")}
                  className="relative rounded-2xl overflow-hidden border border-borders cursor-pointer shadow-sm group/img bg-slate-900"
                >
                  <img
                    src="/images/study-abroad-poster.jpg"
                    alt="Study Abroad Official Poster"
                    className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                    <Eye className="w-4 h-4" /> Click to view full poster
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-primary font-semibold">
                  <span>Call/WhatsApp: <strong>+91-9625903005</strong></span>
                  <a
                    href={whatsappStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold hover:underline"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal for Posters */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-borders">
              <h3 className="text-sm font-bold text-primary">AJT Overseas Official Poster</h3>
              <button
                onClick={() => setSelectedPoster(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="overflow-y-auto p-2 my-2 flex justify-center bg-slate-900 rounded-2xl">
              <img
                src={selectedPoster}
                alt="AJT Overseas Poster"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="pt-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-custom">
                {selectedPoster.includes("recruitment")
                  ? "Call/WhatsApp: +91-9718573005 | hr@ajtoverseas.com"
                  : "Call/WhatsApp: +91-9625903005 | recruiter@ajtoverseas.com"}
              </p>
              <a
                href={selectedPoster.includes("recruitment") ? whatsappRecruitment : whatsappStudy}
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
