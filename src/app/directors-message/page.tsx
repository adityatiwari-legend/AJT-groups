import React from "react";
import Metadata from "next";
import Link from "next/link";
import DirectorsMessage from "@/components/home/DirectorsMessage";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Director's Message | AJT Overseas Private Limited",
  description:
    "Leadership vision and official message from Mr. R. P. Tyagi, Founder and Director (Retd. Army) of AJT Overseas Private Limited.",
};

export default function DirectorsMessagePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Sub-page Breadcrumb / Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-primary to-slate-900 text-white py-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
              <Link href="/" className="hover:text-accent flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-accent">Director's Message</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Director's <span className="text-gold-gradient">Message</span>
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Vision, leadership directives, and core foundational values driving global recruitment excellence at AJT Overseas.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <div className="text-xs">
              <div className="font-bold text-white">Leadership Honor</div>
              <div className="text-slate-400">Founder & Director (Retd. Army)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Director's Message Component */}
      <DirectorsMessage />
    </main>
  );
}
