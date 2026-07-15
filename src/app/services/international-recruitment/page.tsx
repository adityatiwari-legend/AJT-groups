"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, ShieldCheck, HeartHandshake, Award, Cpu, UserCheck } from "lucide-react";

export default function InternationalRecruitment() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Service Verticals</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">International Recruitment</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            Bridging talent supply with global corporate demand. Sourcing, screening, trade testing, and deploying qualified candidates internationally.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-primary tracking-tight leading-tight">
              Ethical, Swift, and Government-Compliant Manpower Mobilization
            </h2>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              AJT Overseas holds a valid recruitment licence issued by the Ministry of External Affairs, Govt of India, enabling us to legally process worker deployments. We maintain rigorous standards for technical assessment, language testing, and visa clearances.
            </p>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We specialize in providing high-caliber labor pools and technical staff to companies in the European Union (Romania, Poland, Croatia, Malta) and the Middle East (Saudi Arabia, UAE, Qatar).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Permanent Sourcing", desc: "For technical engineers, medical personnel, and executive directors." },
                { title: "Bulk Crew Deployments", desc: "For construction, hospitality, logistics, and manufacturing sectors." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex gap-3">
                  <span className="text-xs bg-blue-50 text-secondary p-1.5 rounded-lg h-fit">✓</span>
                  <div>
                    <h4 className="text-xs font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] text-muted-custom mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-borders rounded-[32px] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Our Sourcing Capabilities</h3>
            <div className="space-y-6">
              {[
                { title: "Candidate Database", desc: "Access to a vetted pool of 500k+ active job seekers across India." },
                { title: "Trade Testing Centres", desc: "ISO-accredited engineering and construction testing hubs." },
                { title: "Pre-Flight Clearance", desc: "Comprehensive background validation, MEA clearance, and ticket delivery." }
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-secondary flex items-center justify-center font-bold text-xs flex-shrink-0">{idx + 1}</span>
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
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Are you looking to hire or seek employment?</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10">Select your vertical to register your inquiry. Our specialists will coordinate profile matchings immediately.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="/employers" className="bg-accent hover:bg-hover-accent text-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-md">
              Hire Talent Solutions
            </Link>
            <Link href="/jobs" className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-3.5 rounded-xl font-bold text-sm">
              Search Open Vacancies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
