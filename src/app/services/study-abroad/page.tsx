"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, BookOpen, Compass, Award, Building } from "lucide-react";

export default function StudyAbroadPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Service Verticals</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Study Abroad Consultancy</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            Gain admission to top-ranked international universities. Complete counseling, profile vetting, scholarship sourcing, and student visa filing assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-primary tracking-tight leading-tight">
              Begin Your Global Academic Journey with Expert Advisors
            </h2>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We help you map your higher education path. From selecting courses to applying for admissions at universities across the UK, Canada, Germany, Australia, and Ireland, our consultants guide you at every step.
            </p>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We focus on matching student profiles with courses that align with future career opportunities in Europe and other international markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "University Shortlisting", desc: "Shortlisting universities based on grades, budgets, and location preferences." },
                { title: "Scholarship Searches", desc: "Identifying institutional waivers and scholarships to manage tuition fees." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex gap-3">
                  <span className="text-xs bg-amber-50 text-accent p-1.5 rounded-lg h-fit">✓</span>
                  <div>
                    <h4 className="text-xs font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] text-muted-custom mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-borders rounded-[32px] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Our Support Pipeline</h3>
            <div className="space-y-6">
              {[
                { title: "SOP & LOR Curation", desc: "Expert guidance in drafting Statement of Purpose (SOP) and obtaining recommendation letters." },
                { title: "Admission Application Filing", desc: "Submitting error-free academic applications directly to university portals." },
                { title: "Student Visa Guidance", desc: "Preparing financial documents and visa applications to secure work permit rights." }
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-accent flex items-center justify-center font-bold text-xs flex-shrink-0">{idx + 1}</span>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">{cap.title}</h4>
                    <p className="text-xs text-muted-custom leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="bg-primary text-white rounded-[32px] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.4)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Secure Your International Education Pathway</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10">Get in touch for a free counseling session. We will evaluate your profile and short-list universities.</p>
          <div className="flex justify-center relative z-10">
            <Link href="/contact" className="bg-accent hover:bg-hover-accent text-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-md">
              Book Free Counselling Session
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
