"use client";

import React from "react";
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
  Coins
} from "lucide-react";

export default function EmployerCandidateSections() {
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
                For Global Employers
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-6">
                Premium Recruitment &amp; Mobilization Solutions
              </h2>
              <p className="text-[16px] text-white/80 leading-relaxed mb-8 max-w-2xl">
                AJT Overseas is the trusted manpower provider for global enterprises. We manage everything from executive search mandates to bulk project deployments of skilled labor, complying with local regulations.
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

              <Link
                href="/employers"
                className="bg-accent hover:bg-hover-accent text-primary text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
              >
                Request Custom Talent Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Client Portfolio</h4>
                    <p className="text-[10px] text-white/50">Active Global Partnerships</p>
                  </div>
                </div>
                
                {/* Micro statistic widgets inside graphic */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-white/80">Average Deployment Time</span>
                    <span className="text-xs font-bold text-accent">28 Days</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-white/80">Compliance Approval Rate</span>
                    <span className="text-xs font-bold text-accent">100% Guaranteed</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-white/80">Trade Testing Standards</span>
                    <span className="text-xs font-bold text-accent">ISO 9001 Audited</span>
                  </div>
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

              <Link
                href="/jobs"
                className="bg-secondary hover:bg-primary text-white text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
              >
                Register as Candidate
                <ArrowRight className="w-4 h-4" />
              </Link>
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

              <Link
                href="/contact"
                className="bg-accent hover:bg-hover-accent text-primary text-[15px] font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
              >
                Book Free Academic Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-borders rounded-[32px] p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Academic Placement</h4>
                    <p className="text-[10px] text-muted-custom">University milestones</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-borders">
                    <span className="text-xs font-semibold text-primary">Admissions Success Rate</span>
                    <span className="text-xs font-bold text-secondary">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-borders">
                    <span className="text-xs font-semibold text-primary">Scholarship Assistance</span>
                    <span className="text-xs font-bold text-secondary">Up to $15,000/yr</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-borders">
                    <span className="text-xs font-semibold text-primary">Global University Tie-Ups</span>
                    <span className="text-xs font-bold text-secondary">150+ Partner Unis</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
