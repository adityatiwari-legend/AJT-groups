"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  GraduationCap, 
  FileText, 
  Briefcase, 
  MapPin, 
  ArrowRight,
  PhoneCall,
  UserCheck
} from "lucide-react";
import Logo from "./Logo";

// Services Menu Items
const services = [
  {
    title: "International Recruitment",
    description: "Connect with elite global employers. Permanent, bulk, and executive recruitment solutions.",
    href: "/services/international-recruitment",
    icon: Briefcase,
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Study Abroad Consultancy",
    description: "Shape your academic future at elite global universities. Complete admissions & scholarship support.",
    href: "/services/study-abroad",
    icon: GraduationCap,
    color: "text-amber-600 bg-amber-50"
  },
  {
    title: "Visa Assistance",
    description: "Frictionless visa processing, document attestation, and embassy compliance coordination.",
    href: "/services/visa-assistance",
    icon: FileText,
    color: "text-emerald-600 bg-emerald-50"
  }
];

// Countries Menu Items
const recruitmentCountries = [
  { name: "United Arab Emirates", code: "AE", slug: "uae" },
  { name: "Saudi Arabia", code: "SA", slug: "saudi-arabia" },
  { name: "Qatar", code: "QA", slug: "qatar" },
  { name: "Romania", code: "RO", slug: "romania" },
  { name: "Poland", code: "PL", slug: "poland" },
  { name: "Croatia", code: "HR", slug: "croatia" }
];

const studyCountries = [
  { name: "United Kingdom", code: "GB", slug: "united-kingdom" },
  { name: "Canada", code: "CA", slug: "canada" },
  { name: "Germany", code: "DE", slug: "germany" },
  { name: "Australia", code: "AU", slug: "australia" },
  { name: "Ireland", code: "IE", slug: "ireland" },
  { name: "United States", code: "US", slug: "usa" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const toggleMegaMenu = (menu: string) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menu);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md py-2.5 shadow-sm border-b border-slate-200/80" 
            : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo (Optimized height for legibility of the custom logo text) */}
          <Link href="/" className="h-11 md:h-14 flex items-center">
            <Logo light={false} showText={true} className="h-full" />
          </Link>

          {/* Desktop Navigation - Optimized gap & font sizes for responsive fitting */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            <Link 
              href="/" 
              className={`text-sm xl:text-[15px] font-medium transition-colors ${
                pathname === "/" ? "text-secondary font-bold" : "text-primary hover:text-secondary"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`text-sm xl:text-[15px] font-medium transition-colors ${
                pathname === "/about" ? "text-secondary font-bold" : "text-primary hover:text-secondary"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("services")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm xl:text-[15px] font-medium transition-colors cursor-pointer ${
                  activeMegaMenu === "services" || pathname.startsWith("/services")
                    ? "text-secondary font-bold"
                    : "text-primary hover:text-secondary"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === "services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3.5 w-[600px] glass-card rounded-2xl p-6 grid grid-cols-1 gap-4 shadow-xl z-50 bg-white"
                  >
                    <div className="text-xs font-bold text-muted-custom uppercase tracking-widest border-b border-slate-100 pb-2">
                      Our Solutions
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={idx} 
                            href={service.href}
                            className="group flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className={`p-2.5 rounded-lg h-fit ${service.color} group-hover:scale-105 transition-transform`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[15px] font-semibold text-primary group-hover:text-secondary flex items-center gap-1.5">
                                {service.title}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                              <div className="text-xs text-muted-custom mt-1 leading-relaxed">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between px-6 border-t border-slate-100">
                      <span className="text-xs text-muted-custom">Need bespoke consultation?</span>
                      <Link href="/contact" className="text-xs font-bold text-secondary hover:text-accent flex items-center gap-1">
                        Contact an Advisor <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Countries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("countries")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm xl:text-[15px] font-medium transition-colors cursor-pointer ${
                  activeMegaMenu === "countries" || pathname.startsWith("/countries")
                    ? "text-secondary font-bold"
                    : "text-primary hover:text-secondary"
                }`}
              >
                Countries
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === "countries" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === "countries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3.5 w-[720px] glass-card rounded-2xl p-6 grid grid-cols-2 gap-6 shadow-xl z-50 bg-white"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-custom uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                        <Briefcase className="w-3.5 h-3.5 text-secondary" />
                        Recruitment Countries
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                        {recruitmentCountries.map((country, idx) => (
                          <Link 
                            key={idx} 
                            href={`/countries/${country.slug}`}
                            className="text-[14px] text-primary hover:text-secondary hover:translate-x-1 transition-all flex items-center gap-2"
                          >
                            <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-muted-custom font-mono">{country.code}</span>
                            {country.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-custom uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">
                        <GraduationCap className="w-3.5 h-3.5 text-accent" />
                        Study Destinations
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                        {studyCountries.map((country, idx) => (
                          <Link 
                            key={idx} 
                            href={`/countries/${country.slug}`}
                            className="text-[14px] text-primary hover:text-secondary hover:translate-x-1 transition-all flex items-center gap-2"
                          >
                            <span className="text-xs bg-amber-50 px-1.5 py-0.5 rounded text-accent font-mono">{country.code}</span>
                            {country.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between px-6 border-t border-slate-100">
                      <span className="text-xs text-muted-custom">Over 25+ total partners globally.</span>
                      <Link href="/countries" className="text-xs font-bold text-secondary hover:text-accent flex items-center gap-1">
                        View All Countries <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/industries" 
              className={`text-sm xl:text-[15px] font-medium transition-colors ${
                pathname === "/industries" ? "text-secondary font-bold" : "text-primary hover:text-secondary"
              }`}
            >
              Industries
            </Link>

            <Link 
              href="/jobs" 
              className={`text-sm xl:text-[15px] font-medium transition-colors ${
                pathname === "/jobs" ? "text-secondary font-bold" : "text-primary hover:text-secondary"
              }`}
            >
              Find Jobs
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3.5">
            <Link 
              href="/employers"
              className="text-xs xl:text-[14px] font-bold text-primary hover:text-secondary px-3.5 py-2 flex items-center gap-1.5 transition-colors border border-transparent hover:border-slate-100 rounded-lg"
            >
              <UserCheck className="w-4 h-4 text-secondary" />
              Hire Talent
            </Link>
            <Link
              href="/jobs"
              className="bg-secondary hover:bg-primary text-white text-xs xl:text-[14px] font-bold px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.01] text-center"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] md:top-[77px] bottom-0 z-40 bg-white border-t border-slate-100 overflow-y-auto px-6 py-6 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-5">
              <Link 
                href="/" 
                className="text-[16px] font-bold text-primary hover:text-secondary border-b border-slate-50 pb-2.5"
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="text-[16px] font-bold text-primary hover:text-secondary border-b border-slate-50 pb-2.5"
              >
                About Us
              </Link>

              {/* Services Mobile */}
              <div>
                <div className="text-[11px] font-bold text-muted-custom uppercase tracking-wider mb-2">Our Services</div>
                <div className="flex flex-col gap-2.5 pl-2.5">
                  {services.map((item, idx) => (
                    <Link key={idx} href={item.href} className="flex flex-col">
                      <span className="text-[14px] font-semibold text-primary hover:text-secondary">{item.title}</span>
                      <span className="text-[11px] text-muted-custom mt-0.5">{item.description.slice(0, 70)}...</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Countries Mobile */}
              <div>
                <div className="text-[11px] font-bold text-muted-custom uppercase tracking-wider mb-2">Top Destinations</div>
                <div className="grid grid-cols-2 gap-2.5 pl-2.5">
                  {recruitmentCountries.slice(0, 4).map((c, idx) => (
                    <Link key={idx} href={`/countries/${c.slug}`} className="text-[13px] text-primary hover:text-secondary">
                      💼 {c.name}
                    </Link>
                  ))}
                  {studyCountries.slice(0, 4).map((c, idx) => (
                    <Link key={idx} href={`/countries/${c.slug}`} className="text-[13px] text-primary hover:text-secondary">
                      🎓 {c.name}
                    </Link>
                  ))}
                </div>
                <Link href="/countries" className="text-[11px] font-bold text-secondary hover:text-accent mt-2.5 block pl-2.5">
                  See All Countries →
                </Link>
              </div>

              <Link 
                href="/industries" 
                className="text-[16px] font-bold text-primary hover:text-secondary border-b border-slate-50 pb-2.5"
              >
                Industries
              </Link>

              <Link 
                href="/jobs" 
                className="text-[16px] font-bold text-primary hover:text-secondary border-b border-slate-50 pb-2.5"
              >
                Find Jobs
              </Link>
            </div>

            {/* Mobile Footer Area */}
            <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6">
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/employers"
                  className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-primary py-3 rounded-xl text-[14px] font-bold transition-colors"
                >
                  <UserCheck className="w-4 h-4 text-secondary" />
                  Hire Talent
                </Link>
                <Link 
                  href="/jobs"
                  className="flex items-center justify-center bg-secondary hover:bg-primary text-white py-3 rounded-xl text-[14px] font-bold transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-custom">
                <PhoneCall className="w-3.5 h-3.5 text-accent" />
                <span>Call Center: +91-9718573005</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
