"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  FileText,
  Building2,
  Search,
  MessageSquare,
  FolderCheck,
  UserCheck,
  ChevronUp,
  Globe2,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import Logo from "./Logo";
import { 
  FacebookIcon, 
  LinkedinIcon, 
  InstagramIcon 
} from "@/components/BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Framer Motion reveal variants for the footer content
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any,
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" as any } 
    }
  };

  return (
    <footer className="bg-[#0B1220] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5 select-none">
      
      {/* 1. Subtle Background Texture & Grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg className="w-full h-full object-cover" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle horizontal grid lines */}
          <line x1="0" y1="100" x2="1440" y2="100" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="250" x2="1440" y2="250" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="550" x2="1440" y2="550" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="700" x2="1440" y2="700" stroke="currentColor" strokeWidth="1" />
          
          {/* Subtle vertical grid lines */}
          <line x1="100" y1="0" x2="100" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="700" y1="0" x2="700" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="1100" y1="0" x2="1100" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="1300" y1="0" x2="1300" y2="800" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* 2. Low-opacity Faint World Map Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg className="w-[85%] h-auto max-w-[1200px]" viewBox="0 0 1000 500" fill="currentColor">
          {/* Stylized vector map blocks */}
          <path d="M150,150 L180,130 L220,140 L260,170 L280,210 L240,240 L210,220 L170,180 Z" />
          <path d="M350,100 L400,80 L450,110 L480,160 L440,210 L400,190 L370,140 Z" />
          <path d="M550,180 L600,140 L650,160 L700,200 L720,250 L680,280 L620,260 L570,220 Z" />
          <path d="M780,220 L840,200 L890,230 L910,280 L880,330 L820,310 L790,260 Z" />
          <path d="M120,310 L150,290 L190,320 L210,370 L170,410 L130,380 Z" />
          <path d="M450,300 L480,280 L520,310 L540,360 L510,400 L470,370 Z" />
        </svg>
      </div>

      {/* 3. Soft Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#173F7A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute right-[10%] top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 4. Huge Low-Opacity Background Typography */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none overflow-hidden">
        <h2 className="text-[10vw] md:text-[14vw] font-black uppercase tracking-[0.15em] leading-none text-white/[0.015] font-sans">
          AJT OVERSEAS
        </h2>
      </div>

      {/* 5. Main Content Wrapper */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-8 relative z-10"
      >
        {/* Five Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-6 lg:pr-6">
            <Link href="/" className="h-12 flex items-center gap-2 group w-fit">
              {/* Logo Component */}
              <Logo light={true} showText={true} />
              
              {/* Animated Mini Globe */}
              <div className="relative w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-accent transition-colors ml-1">
                <Globe2 className="w-3.5 h-3.5 text-accent animate-spin-slow" />
              </div>
            </Link>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-accent uppercase tracking-wider">
                Excellence in Global Recruitment &amp; International Education
              </h3>
              <p className="text-white/60 text-xs md:text-[13px] leading-relaxed">
                Helping professionals, students, and employers connect with global opportunities through ethical recruitment, study abroad guidance, and complete visa support.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
              {[
                "Ethical Recruitment",
                "Global Opportunities",
                "Visa Assistance"
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-white/80">
                  <span className="text-accent">✔</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vertical divider line for desktop */}
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-white/5 h-full mx-auto" />

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase pb-2 border-b border-white/5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Countries", href: "/countries" },
                { name: "Industries", href: "/industries" },
                { name: "Employers", href: "/employers" },
                { name: "Overseas Jobs", href: "/jobs" },
                { name: "Study Abroad", href: "/services/study-abroad" },
                { name: "FAQ", href: "/#faq" },
                { name: "Contact Us", href: "/contact" }
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="text-xs md:text-[13px] text-white/70 hover:text-accent transition-all duration-300 flex items-center group w-fit"
                >
                  <span className="relative pb-0.5 group-hover:translate-x-1.5 transition-transform duration-300">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Vertical divider line for desktop */}
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-white/5 h-full mx-auto" />

          {/* Column 3: Our Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase pb-2 border-b border-white/5">
              Services
            </h4>
            <div className="flex flex-col gap-3.5">
              {[
                { name: "International Recruitment", href: "/services/international-recruitment", icon: Briefcase },
                { name: "Study Abroad", href: "/services/study-abroad", icon: GraduationCap },
                { name: "Visa Assistance", href: "/services/visa-assistance", icon: FileText },
                { name: "Employer Hiring Solutions", href: "/employers", icon: Building2 },
                { name: "Overseas Jobs", href: "/jobs", icon: Search },
                { name: "Student Counselling", href: "/services/study-abroad", icon: MessageSquare },
                { name: "Documentation Support", href: "/services/visa-assistance#attestation", icon: FolderCheck },
                { name: "Interview Preparation", href: "/services/international-recruitment", icon: UserCheck }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={idx} 
                    href={item.href}
                    className="text-xs md:text-[13px] text-white/70 hover:text-accent transition-all duration-300 flex items-center gap-2.5 group"
                  >
                    <Icon className="w-3.5 h-3.5 text-white/40 group-hover:text-accent transition-colors flex-shrink-0" />
                    <span className="relative pb-0.5 group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Vertical divider line for desktop */}
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-white/5 h-full mx-auto" />

          {/* Column 4: Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase pb-2 border-b border-white/5">
              Contact Information
            </h4>
            
            <div className="space-y-4 text-xs md:text-[13px]">
              {/* Address */}
              <div className="space-y-1.5 pb-2.5 border-b border-white/5">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                  Corporate Address
                </span>
                <div className="flex gap-2 text-white/80">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    AJT Overseas<br />
                    A-1017, Tower 3, NXOne,<br />
                    Techzone 4, Greater Noida
                  </span>
                </div>
              </div>

              {/* Grid of Desks to save vertical space */}
              <div className="grid grid-cols-1 gap-3.5 pt-1.5">
                {/* Business Enquiries */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">
                    Business Enquiries
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <a href="tel:+919718570515" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>+91-9718570515</span>
                    </a>
                    <a href="mailto:info@ajtoverseas.com" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>info@ajtoverseas.com</span>
                    </a>
                  </div>
                </div>

                {/* International Recruitment */}
                <div className="space-y-0.5 border-t border-white/5 pt-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">
                    International Recruitment
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <a href="tel:+919990803701" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>+91-9990803701</span>
                    </a>
                    <a href="tel:+919718573005" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>+91-9718573005</span>
                    </a>
                    <a href="mailto:hr@ajtoverseas.com" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>hr@ajtoverseas.com</span>
                    </a>
                  </div>
                </div>

                {/* Study Abroad */}
                <div className="space-y-0.5 border-t border-white/5 pt-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">
                    Study Abroad
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <a href="tel:+919625903005" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>+91-9625903005</span>
                    </a>
                    <a href="tel:+918595433005" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>+91-8595433005</span>
                    </a>
                    <a href="mailto:recruiter@ajtoverseas.com" className="flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors w-fit">
                      <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>recruiter@ajtoverseas.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Contact Us CTA button */}
            <Link
              href="/contact"
              className="mt-1 w-full bg-transparent hover:bg-accent hover:text-[#0B1220] border border-accent/40 hover:border-accent text-accent text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              Contact Our Consultants
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>

        {/* 6. Section 5: Stay Connected (Full width block below grid for spacious premium design) */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-white/10 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
        >
          {/* Radial glow background specifically behind newsletter */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-5 space-y-2">
            <h4 className="text-base font-bold text-accent">
              Start Your Global Journey
            </h4>
            <p className="text-white/60 text-xs md:text-[13px] leading-relaxed max-w-md">
              Receive updates about overseas jobs, study abroad opportunities, visa information, and recruitment news directly to your inbox.
            </p>
          </div>

          {/* Middle: Newsletter subscription form */}
          <div className="lg:col-span-4">
            <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
              <div className="relative w-full">
                {/* Email icon */}
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                
                {/* Floating label wrapper */}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(email !== "")}
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-24 py-3.5 text-xs text-white placeholder-transparent focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all"
                  id="newsletter-email"
                />
                <label 
                  htmlFor="newsletter-email"
                  className={`absolute left-11 top-1/2 -translate-y-1/2 text-xs transition-all pointer-events-none ${
                    isFocused || email !== "" 
                      ? "-translate-y-[24px] text-[10px] text-accent font-bold px-1.5 bg-[#0B1220]" 
                      : "text-white/40"
                  }`}
                >
                  Enter Your Email Address
                </label>
              </div>

              {/* Gold Accent Subscribe Button */}
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-accent hover:bg-accent/90 text-[#0B1220] rounded-full px-5 text-xs font-bold transition-all flex items-center justify-center shadow-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute mt-2 flex items-center gap-1.5 text-xs text-accent font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Success! You have been subscribed to global campaigns.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Social icons with circular hover hover-glow */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3.5">
            {[
              { icon: LinkedinIcon, href: "https://www.linkedin.com/company/113023890/", name: "LinkedIn" },
              { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61582255777532", name: "Facebook" },
              { icon: InstagramIcon, href: "https://www.instagram.com/ajt_overseas/", name: "Instagram" }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-accent hover:bg-accent/5 text-white/70 hover:text-accent transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </motion.div>

        {/* 7. Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-[11px] text-white/40">
          {/* Left copyright */}
          <div className="text-center lg:text-left">
            © {new Date().getFullYear()} AJT Overseas Private Limited. All Rights Reserved.
          </div>

          {/* Center Services summary */}
          <div className="hidden lg:block font-medium tracking-wider text-white/30 uppercase text-[10px]">
            International Recruitment &nbsp;•&nbsp; Study Abroad &nbsp;•&nbsp; Visa Assistance
          </div>

          {/* Right regulatory links */}
          <div className="flex items-center gap-4 text-center lg:text-right">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors pb-0.5 border-b border-transparent hover:border-accent">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-accent transition-colors pb-0.5 border-b border-transparent hover:border-accent">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-accent transition-colors pb-0.5 border-b border-transparent hover:border-accent">
              Sitemap
            </Link>
          </div>
        </div>

      </motion.div>

      {/* 8. Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-[#0B1220]/80 border border-accent/30 hover:border-accent text-accent hover:text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
