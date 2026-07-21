"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartHandshake, Eye, Briefcase, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Sub-page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Corporate Profile</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">About AJT Overseas</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            India's premier government-approved international recruitment agency and student consultancy, built on a foundation of transparency, ethics, and career excellence.
          </p>
        </div>
      </section>

      {/* Corporate Coordinates */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Govt. Approved License", desc: "MEA License: B-XXXX/MUM/PER/1000+/X/XXXX/2026", icon: ShieldCheck },
            { title: "Ethical Standards", desc: "100% compliant with international fair-wage and zero fee covenants.", icon: HeartHandshake },
            { title: "ISO Certified Quality", desc: "ISO 9001:2015 audited skill assessments and recruitment channels.", icon: Award }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-borders rounded-2xl p-6 shadow-md flex items-center gap-4">
                <div className="p-3 bg-secondary/5 text-secondary rounded-xl">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                  <p className="text-xs text-muted-custom mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-primary tracking-tight leading-tight">
              Shaping Cross-Border Career Trajectories Since 2012
            </h2>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              AJT Overseas Private Limited was incorporated with a clear mandate: to professionalize and bring transparency to the international recruitment and student advisory ecosystem in India. Over the last decade, we have established robust partnerships with engineering conglomerates, healthcare systems, university bodies, and civil departments across Europe, North America, and the GCC.
            </p>
            <p className="text-[16px] text-muted-custom leading-relaxed">
            We operate out of state-of-the-art office setups in Greater Noida (HQ), New Delhi, and Chennai, providing high-precision vetting, mock embassy interviews, candidate profile matching, and comprehensive visa coordination.
          </p>
        </div>

        <div className="lg:col-span-6 bg-white border border-borders rounded-[32px] p-8 shadow-sm">
          <h3 className="text-lg font-bold text-primary mb-6">Our Foundational Core Values</h3>
          <div className="space-y-6">
            {[
              { title: "Candidate-Centric Sourcing", desc: "We prioritize candidate safety and career advancement, ensuring matching with verified employer sponsors." },
              { title: "Statutory Adherence", desc: "Full coordination with the Protector of Emigrants (PoE) and MEA directives for work clearance." },
              { title: "Transparency", desc: "No hidden administration charges, premium-tier service packages, and open communication channels." }
            ].map((val, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-blue-50 text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                <div>
                  <h4 className="text-[15px] font-bold text-primary mb-1">{val.title}</h4>
                  <p className="text-xs text-muted-custom leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* Global Offices Map Section */}
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20" id="offices">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-primary tracking-tight">Our Regional Sourcing Centers</h2>
        <p className="text-sm text-muted-custom mt-2">Drop by for offline counsel, verification check-ins, or physical documents drop.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { city: "Greater Noida (HQ)", street: "A-1017, Tower 3, NXOne, Techzone 4", phone: "+91 97185 70515", email: "info@ajtoverseas.com" },
          { city: "New Delhi", street: "Scindia House, Connaught Place", phone: "+91 11 9999 9999", email: "delhi@ajtoverseas.com" },
          { city: "Chennai", street: "Anna Salai, Teynampet", phone: "+91 44 9999 9999", email: "chennai@ajtoverseas.com" }
        ].map((office, idx) => (
          <div key={idx} className="bg-white border border-borders rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-primary text-base">{office.city}</h4>
              </div>
              <p className="text-xs text-muted-custom leading-normal mb-4">{office.street}</p>
            </div>
            <div className="border-t border-slate-50 pt-4 space-y-1.5 text-xs font-semibold text-primary">
              <div>Phone: {office.phone}</div>
              <div>Email: <a href={`mailto:${office.email}`} className="text-secondary hover:text-accent">{office.email}</a></div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}
