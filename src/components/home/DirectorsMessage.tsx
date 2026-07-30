"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Award,
  Compass,
  Globe,
  GraduationCap,
  FileCheck2,
  Users,
  CheckCircle2,
  Mail,
  ExternalLink,
  Sparkles,
  Quote,
  Medal,
  Handshake,
  TrendingUp,
  Headphones
} from "lucide-react";

export default function DirectorsMessage() {
  const coreValues = [
    {
      title: "Discipline",
      description: "We work with focus, precision, and accountability.",
      icon: Target,
      badge: "Focus & Precision",
      gradient: "from-blue-900/10 via-amber-500/5 to-transparent",
    },
    {
      title: "Integrity",
      description: "We uphold honesty, ethics, and transparency.",
      icon: ShieldCheck,
      badge: "100% Ethical",
      gradient: "from-amber-500/10 via-blue-900/5 to-transparent",
    },
    {
      title: "Commitment",
      description: "We are dedicated to our candidates, clients, and partners.",
      icon: Handshake,
      badge: "Unwavering Loyalty",
      gradient: "from-blue-900/10 via-amber-500/5 to-transparent",
    },
    {
      title: "Purpose",
      description: "We create opportunities that transform lives.",
      icon: Compass,
      badge: "Impact Driven",
      gradient: "from-amber-500/10 via-blue-900/5 to-transparent",
    },
  ];

  const services = [
    {
      title: "International Recruitment",
      description:
        "End-to-end recruitment solutions for skilled, semi-skilled, and professional candidates across diverse industries worldwide.",
      icon: Globe,
      tag: "Global Opportunities",
    },
    {
      title: "Study Abroad Solutions",
      description:
        "Guiding students to top universities and institutions globally with the right programs, counseling, and admission support.",
      icon: GraduationCap,
      tag: "Academic Excellence",
    },
    {
      title: "Visa Assistance",
      description:
        "Professional visa guidance and documentation support to make your international journey smooth, simple, and hassle-free.",
      icon: FileCheck2,
      tag: "Hassle-Free Process",
    },
  ];

  const whyPartnerPoints = [
    {
      title: "Global Network Across Countries",
      icon: Globe,
    },
    {
      title: "Experienced & Dedicated Team",
      icon: Users,
    },
    {
      title: "Ethical & Transparent Processes",
      icon: ShieldCheck,
    },
    {
      title: "Personalized Support Every Step of the Way",
      icon: Headphones,
    },
    {
      title: "Proven Results & Successful Placements",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-primary to-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Glow Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-md text-accent text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Leadership & Excellence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Director's <span className="text-gold-gradient">Message</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-accent" />
            <Medal className="w-5 h-5 text-accent" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
        </div>

        {/* Primary Director Message Block (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Director Image & Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Image Frame Card */}
            <div className="relative group rounded-3xl p-2.5 bg-gradient-to-b from-accent/40 via-white/10 to-accent/20 shadow-2xl overflow-hidden">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/30 opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/director-rp-tyagi.jpg"
                  alt="Mr. R. P. Tyagi - Founder and Director (Retd. Army)"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Military Service Honor Badge on Image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-accent/40 backdrop-blur-md text-white text-xs font-semibold shadow-lg">
                  <Award className="w-4 h-4 text-accent" />
                  <span>Retd. Army Officer</span>
                </div>
              </div>
            </div>

            {/* Director Information Card */}
            <div className="bg-slate-900/90 border border-accent/30 rounded-2xl p-6 backdrop-blur-md shadow-xl flex items-center gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center shrink-0 text-accent">
                <Medal className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Mr. R. P. Tyagi
                </h3>
                <p className="text-sm font-medium text-accent mt-0.5">
                  Founder and Director (Retd. Army)
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  AJT Overseas Private Limited
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Content & Signature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative"
          >
            {/* Background Quote Watermark */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="space-y-6">
              {/* Salutation */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                  Official Statement
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Dear Candidates, Clients, Partners and Well-wishers,
                </h3>
              </div>

              {/* Body Text */}
              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  At <strong className="text-white font-semibold">AJT Overseas Private Limited</strong>, our mission is simple yet powerful—to connect talent with global opportunities and help individuals build a better future.
                </p>

                <p>
                  With a strong foundation of trust, transparency, and professionalism, we are committed to delivering ethical and reliable recruitment solutions across industries and countries. Our success is built on the dedication of our team, the confidence of our partners, and the dreams of thousands of candidates who inspire us every day.
                </p>

                <div className="p-5 rounded-2xl bg-slate-950/60 border-l-4 border-accent text-slate-200 italic font-medium my-4 shadow-inner">
                  "As a Retired Army Officer, I strongly believe in discipline, integrity, and commitment. These values continue to guide our journey as we strive to create meaningful employment opportunities and contribute to a better, stronger, and more connected world."
                </div>

                <p>
                  Thank you for your trust and continued support.
                </p>

                <p className="font-semibold text-accent text-lg">
                  Together, let's go further and reach higher.
                </p>
              </div>
            </div>

            {/* Signature Block */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif italic text-2xl text-accent tracking-wider font-bold mb-1 selection:bg-accent selection:text-primary">
                  R. P. Tyagi
                </div>
                <div className="text-base font-bold text-white">
                  Mr. R. P. Tyagi
                </div>
                <div className="text-xs text-slate-400">
                  Founder and Director (Retd. Army)
                </div>
                <div className="text-xs font-medium text-accent/80 mt-0.5">
                  AJT Overseas Private Limited
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-semibold flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Leadership Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Sub-section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-accent tracking-widest uppercase block">
              Guided By Principles
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Our Core <span className="text-gold-gradient">Values</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Rooted in military discipline and corporate integrity to ensure unwavering quality in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-slate-900/80 border border-white/10 hover:border-accent/50 rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {value.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-accent/80 relative z-10">
                    <span>AJT Foundation</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Vision Highlighted Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-r from-secondary via-primary to-slate-900 border border-accent/40 shadow-2xl text-center"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              Our Vision
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed tracking-wide">
              "To be a globally trusted recruitment partner, recognized for our integrity, excellence, and commitment to transforming lives through meaningful employment opportunities."
            </blockquote>

            <div className="flex items-center justify-center gap-2 pt-2">
              {[...Array(3)].map((_, i) => (
                <Sparkles key={i} className="w-4 h-4 text-accent animate-pulse" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Services Sub-section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-accent tracking-widest uppercase block">
              What We Offer
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Our <span className="text-gold-gradient">Services</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Comprehensive global mobility, career placement, and educational solutions tailor-made for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-slate-900/80 border border-white/10 hover:border-accent/40 rounded-3xl p-8 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                        {service.tag}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-accent">
                    <span>Explore Solutions</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Partner With AJT Overseas? Grid */}
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-accent tracking-widest uppercase block">
              The AJT Advantage
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Why Partner With AJT Overseas?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {whyPartnerPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-900/90 border border-white/10 hover:border-accent/50 p-5 rounded-2xl text-center flex flex-col items-center justify-center space-y-3 group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-slate-950 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-accent/30 rounded-2xl p-6 md:px-10 md:py-6 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-300">
            <a
              href="https://www.ajtoverseas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span className="font-medium">www.ajtoverseas.com</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="mailto:info@ajtoverseas.com"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="font-medium">info@ajtoverseas.com</span>
            </a>
          </div>

          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-semibold text-accent tracking-wide uppercase block">
              Tagline
            </span>
            <p className="text-sm font-bold text-white mt-0.5">
              Building Global Careers. Enriching Lives.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
