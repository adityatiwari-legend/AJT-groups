"use client";

import React from "react";
import { 
  HeartHandshake, 
  Eye, 
  Users, 
  Globe, 
  FileCheck, 
  GraduationCap, 
  UserCheck, 
  Headphones 
} from "lucide-react";

const reasons = [
  {
    title: "Ethical Recruitment",
    desc: "Strict adherence to fair-practice directives. Absolute transparency with zero hidden agent charges.",
    icon: HeartHandshake,
    color: "text-rose-600 bg-rose-50"
  },
  {
    title: "Transparent Process",
    desc: "Real-time updates on documentation clearance, embassy filings, and client negotiations.",
    icon: Eye,
    color: "text-sky-600 bg-sky-50"
  },
  {
    title: "Experienced Team",
    desc: "Staffed by seasoned recruiters, licensed immigration lawyers, and professional academic counselors.",
    icon: Users,
    color: "text-amber-600 bg-amber-50"
  },
  {
    title: "Global Network",
    desc: "Strategic tie-ups in 25+ countries spanning Europe, the UK, North America, and the Middle East.",
    icon: Globe,
    color: "text-violet-600 bg-violet-50"
  },
  {
    title: "Visa Support",
    desc: "Dedicated internal visa officers managing attestation coordination, filing, and mock interviews.",
    icon: FileCheck,
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "Student Counselling",
    desc: "Personalized psychometric evaluation to pair students with courses aligned with the future job market.",
    icon: GraduationCap,
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    title: "Interview Preparation",
    desc: "Complete coaching programs for embassy interviews, IELTS requirements, and corporate technical rounds.",
    icon: UserCheck,
    color: "text-orange-600 bg-orange-50"
  },
  {
    title: "Dedicated Support",
    desc: "24/7 client coordination desks addressing logistics deployment, housing search, and orientation support.",
    icon: Headphones,
    color: "text-teal-600 bg-teal-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
            The Standards That Define Our Excellence
          </h2>
          <p className="text-[17px] text-muted-custom leading-relaxed">
            We operate on a framework of strict corporate principles, bringing trust and regulatory reliability to every overseas pathway.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-borders rounded-2xl p-6 hover:shadow-xl hover:border-secondary/15 transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon wrapper */}
                <div className={`p-3 rounded-xl mb-5 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-primary mb-2.5">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-xs text-muted-custom leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
