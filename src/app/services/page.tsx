"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, FileText, ArrowRight, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";

export default function ServicesPage() {
  const verticals = [
    {
      title: "International Recruitment Solutions",
      icon: Briefcase,
      desc: "We coordinate end-to-end recruitment pipelines for global companies, specializing in healthcare systems, heavy engineering, oil & gas, hospitality, and logistics sectors.",
      href: "/services/international-recruitment",
      details: ["Corporate client recruitment search", "Bulk trade testing & qualification assessment", "PoE (Protector of Emigrants) compliance management"],
      color: "border-blue-100 bg-white"
    },
    {
      title: "Study Abroad Consultancy",
      icon: GraduationCap,
      desc: "Our academic advisors map admissions strategies for students seeking admissions in foreign universities across the UK, Europe, Canada, Australia, and the USA.",
      href: "/services/study-abroad",
      details: ["SOP and recommendation letter curation", "Scholarships & tuition waivers sourcing", "Secure student accommodation pairings"],
      color: "border-amber-100 bg-white"
    },
    {
      title: "Visa & Embassy Clearance",
      icon: FileText,
      desc: "We clear immigration complexity by managing certificate attestation, state HRD validations, apostille clearance, and visa case preparations.",
      href: "/services/visa-assistance",
      details: ["Work visa and employment clearance coordination", "Student visa file submission coaching", "Document apostille & embassy attestation"],
      color: "border-emerald-100 bg-white"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Core Verticals</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            AJT Overseas is structured to offer premium, end-to-end relocation pipelines. Whether you are an employer looking for talent or a candidate mapping your global career.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {verticals.map((vert, idx) => {
            const Icon = vert.icon;
            return (
              <div 
                key={idx}
                className={`border border-borders rounded-[24px] p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${vert.color}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-secondary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{vert.title}</h3>
                  <p className="text-sm text-muted-custom leading-relaxed mb-6">{vert.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {vert.details.map((det, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs font-semibold text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {det}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-50 pt-6">
                  <Link
                    href={vert.href}
                    className="inline-flex items-center justify-between w-full text-[14px] font-bold text-secondary hover:text-accent group transition-colors"
                  >
                    Explore Service Scope
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
