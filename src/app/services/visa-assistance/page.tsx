"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight, ShieldCheck, HelpCircle, FileSignature } from "lucide-react";

export default function VisaAssistancePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Service Verticals</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Visa &amp; Embassy Assistance</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            Fast, compliant, and transparent visa clearing solutions. We handle work visas, student visas, document attestation, and apostille services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-primary tracking-tight leading-tight">
              Error-Free Embassy Filings and Certifications
            </h2>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              Visa processing is often complex. AJT Overseas helps candidates navigate document verification, state HRD validations, apostille clearance, and visa case preparations to ensure compliance.
            </p>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We coordinate directly with MEA portals and embassy desks to process work permit clearances for the European Union (Romania, Poland, Croatia) and the Middle East.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="attestation">
              {[
                { title: "Certificate Apostille", desc: "Apostille verification for educational, personal, and commercial certificates." },
                { title: "Embassy Attestations", desc: "Coordinating document certifications with respective consulates." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex gap-3">
                  <span className="text-xs bg-emerald-50 text-emerald-600 p-1.5 rounded-lg h-fit">✓</span>
                  <div>
                    <h4 className="text-xs font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] text-muted-custom mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-borders rounded-[32px] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-6">Visa Categories Managed</h3>
            <div className="space-y-6">
              {[
                { title: "Work Permit Visas", desc: "Fast-track documentation for workers holding verified international job offers." },
                { title: "Student Visas", desc: "Comprehensive support for university admissions and student visa interviews." },
                { title: "Family & Dependent Visas", desc: "Coordinating family relocation filings with sponsor clearances." }
              ].map((cap, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">{idx + 1}</span>
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
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Need Visa or Attestation Support?</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10">Get in touch with our visa operations desk. We will review your documentation requirements.</p>
          <div className="flex justify-center relative z-10">
            <Link href="/contact" className="bg-accent hover:bg-hover-accent text-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-md">
              Submit Visa Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
