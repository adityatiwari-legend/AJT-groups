"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const stats = [
    { value: "13+", label: "Recruitment Countries", icon: Briefcase, color: "text-blue-600 bg-blue-50" },
    { value: "14+", label: "Study Destinations", icon: GraduationCap, color: "text-amber-600 bg-amber-50" },
    { value: "15+", label: "Industries Served", icon: Award, color: "text-purple-600 bg-purple-50" },
    { value: "100%", label: "Ethical Recruitment", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Interactive Graphics / Frame */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-secondary/10 rounded-[32px] transform -rotate-2 scale-105 pointer-events-none" />
            
            {/* Visual Frame mimicking modern corporate imagery */}
            <div className="w-full aspect-[4/3] rounded-[32px] bg-slate-900 overflow-hidden relative shadow-2xl group">
              {/* Fallback pattern representing global business meetings */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(23,63,122,0.8)_0%,rgba(11,31,58,0.95)_80%)] flex flex-col justify-between p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-accent tracking-widest uppercase">AJT OVERSEAS</div>
                  <span className="text-white/40 text-xs font-mono">EST. 2012</span>
                </div>
                
                <div className="space-y-4 max-w-md">
                  <span className="text-[11px] font-bold tracking-widest text-accent uppercase">Executive Mission</span>
                  <blockquote className="text-lg md:text-xl font-medium italic leading-relaxed text-white/90">
                    "Bridging global talent deficits with highly qualified, ethically sourced human resources."
                  </blockquote>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-accent">AJT</div>
                    <div>
                      <div className="text-xs font-bold">Board of Directors</div>
                      <div className="text-[10px] text-white/50">AJT Overseas Private Limited</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            </div>

            {/* Overlapping small floating details card */}
            <div className="absolute -bottom-6 -right-6 md:right-4 bg-white p-5 rounded-2xl shadow-xl border border-borders max-w-xs hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-[15px] font-bold text-primary">MEA Approved</h5>
                <p className="text-xs text-muted-custom mt-1 leading-normal">Fully certified recruitment agency by the Govt. of India.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
              About AJT Overseas
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
              Empowering Global Ambitions Through Ethical Consultancy
            </h2>
            
            <p className="text-[16px] text-muted-custom leading-relaxed mb-8">
              At AJT Overseas, we specialize in offering comprehensive solutions in overseas employment, foreign university placement, and swift visa support. Since our inception, we have stood for transparency, adherence to ethical codes, and absolute service reliability. We do not just process applications; we manage career transitions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-lg h-fit ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-primary leading-none">{stat.value}</div>
                      <div className="text-xs text-muted-custom mt-1.5 font-medium leading-tight">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-secondary hover:text-accent group transition-colors"
              >
                Learn More About Us
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
