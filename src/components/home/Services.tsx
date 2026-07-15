"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    title: "International Recruitment",
    icon: Briefcase,
    description: "End-to-end recruitment pipelines bridging Indian talent with elite global industries. Specializing in executive searches, bulk project mobilizations, and trade skill testing validation.",
    points: ["Executive & Bulk Sourcing", "Government Compliant Processing", "Trade Test Centre Coordination"],
    link: "/services/international-recruitment",
    accentColor: "bg-blue-500/10 text-blue-600",
    hoverBg: "group-hover:bg-blue-600"
  },
  {
    title: "Study Abroad Consultancy",
    icon: GraduationCap,
    description: "Step-by-step guidance to gain admissions at elite institutions worldwide. Complete support covering career counseling, scholarship hunting, SOP curation, and academic visas.",
    points: ["Ivy League & Top Tier admissions", "Scholarship & Grant Sourcing", "Pre-Departure Briefings"],
    link: "/services/study-abroad",
    accentColor: "bg-amber-500/10 text-amber-600",
    hoverBg: "group-hover:bg-amber-600"
  },
  {
    title: "Visa Assistance",
    icon: FileText,
    description: "Eliminate embassy friction with meticulous, error-free documentation submission. Expert handling of employment visas, student visas, dependent family visas, and attestation protocols.",
    points: ["Embassies Coordination", "Document Clearing & Attestation", "Fast-Track Case Processing"],
    link: "/services/visa-assistance",
    accentColor: "bg-emerald-500/10 text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background soft blur decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
            Comprehensive Pathways to Global Horizons
          </h2>
          <p className="text-[17px] text-muted-custom leading-relaxed">
            AJT Overseas is structured to offer premium, end-to-end relocation pipelines. Whether you are an employer looking for talent or a candidate mapping your global career.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-borders hover:border-secondary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block */}
                  <div className={`w-14 h-14 rounded-xl ${service.accentColor} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-muted-custom leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5 text-xs font-semibold text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action button */}
                <div className="pt-6 border-t border-borders">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-secondary hover:text-accent group/btn transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
