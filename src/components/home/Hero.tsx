"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  FileCheck,
  TrendingUp,
  Globe2,
  Users
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 bg-slate-50">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        {/* Animated World Map background representation */}
        <svg className="w-full h-full object-cover" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 200 C300 150 400 350 600 200 C800 50 1000 250 1200 150" stroke="#173F7A" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M200 450 C350 400 500 500 700 350 C900 200 1100 450 1300 300" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5 5" />
          <circle cx="600" cy="200" r="6" fill="#173F7A" className="animate-pulse" />
          <circle cx="700" cy="350" r="6" fill="#D4AF37" className="animate-pulse" />
          <circle cx="1200" cy="150" r="6" fill="#173F7A" className="animate-pulse" />
          {/* Animated particles */}
          <circle cx="450" cy="280" r="3" fill="#D4AF37" className="animate-bounce" />
          <circle cx="950" cy="220" r="3.5" fill="#173F7A" className="animate-bounce" style={{ animationDelay: "1.5s" }} />
        </svg>
      </div>

      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-secondary/5 border border-secondary/10 rounded-full px-4 py-1.5 w-fit mb-6">
            <Globe2 className="w-4 h-4 text-secondary animate-spin-slow" />
            <span className="text-[12px] md:text-[13px] font-semibold text-secondary tracking-wider uppercase">
              Global Employment &amp; Education Gateway
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-[62px] font-extrabold tracking-tight text-primary leading-[1.08] mb-6"
          >
            Your Trusted Partner for <span className="text-secondary font-black">Global Careers</span> &amp; <span className="text-accent">International Education</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[17px] md:text-[19px] text-muted-custom leading-relaxed max-w-2xl mb-10"
          >
            AJT Overseas is India's premier agency for ethical international recruitment, visa clearing services, and ivy-league study consultancy. We construct borders-free careers.
          </motion.p>

          {/* Call To Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/jobs"
              className="bg-secondary hover:bg-primary text-white text-[16px] font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group hover:scale-[1.01]"
            >
              Apply for Overseas Jobs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/study-abroad"
              className="bg-white hover:bg-slate-50 text-primary border border-borders text-[16px] font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              Study Abroad
            </Link>
            <Link
              href="/employers"
              className="bg-primary/5 hover:bg-primary/10 text-primary text-[16px] font-semibold px-6 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              Hire Talent
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-borders pt-8 max-w-xl"
          >
            {[
              { icon: ShieldCheck, title: "Government Compliant", desc: "MEA Approved Agency" },
              { icon: HeartHandshake, title: "Ethical Recruitment", desc: "No Hidden Costs" },
              { icon: FileCheck, title: "Visa Support", desc: "98.5% Success Rate" }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-[13px] font-bold text-primary leading-tight">{badge.title}</span>
                  </div>
                  <span className="text-xs text-muted-custom leading-tight">{badge.desc}</span>
                </div>
              );
            })}
          </motion.div>

        </motion.div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Main graphics container with float anim */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
            className="w-full max-w-[450px] aspect-[4/5] bg-gradient-to-tr from-primary to-secondary rounded-[32px] p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group cursor-default animate-float-slow"
          >
            {/* Overlay grid design */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Top row - brand and network */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-accent tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">AJT GLOBAL</span>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-[9px] font-black text-primary">UAE</div>
                <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-[9px] font-black text-primary">RO</div>
                <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-[9px] font-black text-primary">UK</div>
              </div>
            </div>

            {/* Middle row - graphical airplane or visual representation of global success */}
            <div className="my-auto flex flex-col items-center justify-center gap-6 relative z-10 py-6">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
                <Globe2 className="w-12 h-12 text-white animate-spin-slow" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
                </span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white leading-none">10,000+</div>
                <div className="text-xs text-white/60 tracking-wider uppercase mt-1">Talents Positioned Globally</div>
              </div>
            </div>

            {/* Bottom area - floating stats card */}
            <div className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/80 font-medium">Recruitment Success Rate</span>
                <span className="text-xs text-accent font-bold">100% Verified</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[98.5%] rounded-full" />
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-white/50">
                <span>98.5% Visa Approval</span>
                <span>Active Support Desk</span>
              </div>
            </div>

            {/* Floating Stats Panel 1 - Placements */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 -left-8 bg-white text-primary rounded-xl p-3.5 shadow-xl border border-borders flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-amber-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-black leading-none">150+</div>
                <div className="text-[10px] text-muted-custom mt-0.5 whitespace-nowrap">Global Corporations</div>
              </div>
            </motion.div>

            {/* Floating Stats Panel 2 - Students */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-10 bg-white text-primary rounded-xl p-3.5 shadow-xl border border-borders flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm font-black leading-none">14+</div>
                <div className="text-[10px] text-muted-custom mt-0.5 whitespace-nowrap">Study Destinations</div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] tracking-widest text-primary font-bold uppercase">SCROLL</span>
        <div className="w-5 h-8 border border-primary rounded-full p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
