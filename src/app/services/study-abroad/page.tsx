"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, BookOpen, Compass, Award, Building, MessageSquare, Eye, CheckCircle2 } from "lucide-react";

export default function StudyAbroadPage() {
  const [showPosterModal, setShowPosterModal] = useState(false);
  const whatsappUrl = "https://wa.me/918595433005?text=Hello%20AJT%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20Study%20Abroad";

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">
                Service Verticals
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Study Abroad Consultancy
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Gain admission to top-ranked international universities. Complete counseling, profile vetting, scholarship sourcing, and student visa filing assistance.
              </p>
            </div>

            {/* Direct WhatsApp Counselling Button */}
            <div className="flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold px-7 py-4 rounded-2xl inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Book Your Counselling Session</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Poster Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-3.5 py-1.5 rounded-full">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-[12px] font-bold text-accent tracking-widest uppercase">
                Your Global Success Starts Here
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              Begin Your Global Academic Journey with Expert Advisors
            </h2>
            <p className="text-[16px] text-muted-custom leading-relaxed">
              We help you map your higher education path. From selecting courses to applying for admissions at top universities, our consultants guide you at every step.
            </p>
            
            {/* Features list from poster */}
            <div className="bg-white border border-borders rounded-2xl p-6 shadow-xs">
              <h3 className="text-xs font-extrabold text-primary tracking-widest uppercase mb-4">
                What We Provide:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Top Ranked Universities shortlisting",
                  "Affordable Education & Tuition waivers",
                  "Visa Guidance & 100% Support",
                  "Personalized 1-on-1 Counselling",
                  "Scholarships Guidance up to $15,000",
                  "Post Arrival & Accommodation Support"
                ].map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-xl inline-flex items-center gap-2.5 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Counselling Session (+91-8595433005)</span>
              </a>

              <button
                onClick={() => setShowPosterModal(true)}
                className="bg-white border border-borders text-primary hover:bg-slate-50 text-xs md:text-sm font-bold px-5 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-accent" />
                <span>View Official Poster</span>
              </button>
            </div>
          </div>

          {/* Poster Preview Card */}
          <div className="lg:col-span-5">
            <div className="group relative bg-white border border-borders rounded-[32px] p-4 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src="/images/study-abroad-poster.jpg"
                  alt="AJT Overseas Study Abroad Official Poster"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Overlay Action Button */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-xs p-6 text-center">
                  <button
                    onClick={() => setShowPosterModal(true)}
                    className="bg-white text-primary text-xs font-bold px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-2 hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-accent" />
                    <span>Expand Poster</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-2 hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Book via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-xs font-bold text-primary">AJT Overseas Official Study Abroad Poster</p>
                <p className="text-[11px] text-muted-custom mt-0.5">Call / WhatsApp: +91-8595433005 | recruiter@ajtoverseas.com</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="bg-primary text-white rounded-[32px] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.4)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl font-bold tracking-tight mb-4 relative z-10">Secure Your International Education Pathway</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10">
            Get in touch for a free counseling session on WhatsApp (+91-8595433005). We will evaluate your profile and short-list universities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Your Counselling Session</span>
            </a>
            <Link href="/contact" className="w-full sm:w-auto bg-accent hover:bg-hover-accent text-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-md">
              Contact Study Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Poster Modal Lightbox */}
      {showPosterModal && (
        <div
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-borders">
              <h3 className="text-sm font-bold text-primary">AJT Overseas Study Abroad Poster</h3>
              <button
                onClick={() => setShowPosterModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="overflow-y-auto p-2 my-2 flex justify-center bg-slate-900 rounded-2xl">
              <img
                src="/images/study-abroad-poster.jpg"
                alt="AJT Overseas Official Study Abroad Poster"
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="pt-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-custom">Call / WhatsApp: +91-8595433005 | recruiter@ajtoverseas.com</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Counselling on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
