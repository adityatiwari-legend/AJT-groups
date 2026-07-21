"use client";

import React from "react";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Subpage Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Contact AJT Overseas</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Reach out to our offices in Greater Noida (HQ), Chennai, and New Delhi. Dedicated helpdesks are ready to support your inquiries.
          </p>
        </div>
      </section>

      {/* Embedded Contact Component */}
      <ContactSection />
    </div>
  );
}
