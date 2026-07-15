"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, Calendar, DollarSign, X, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialJobs = [
  { id: 1, title: "Registered ICU Nurse", country: "Romania", flag: "🇷🇴", industry: "Healthcare", salary: "€1,300 - €1,600 / mo", exp: "3-5 years", desc: "Urgent requirements for registered nurses holding B.Sc. Nursing and active registration." },
  { id: 2, title: "Structural Welder (MIG/TIG)", country: "Croatia", flag: "🇭🇷", industry: "Construction", salary: "€1,100 - €1,300 / mo", exp: "1-3 years", desc: "Looking for qualified structural steel welders with valid trade certifications." },
  { id: 3, title: "CNC Machine Operator", country: "Poland", flag: "🇵🇱", industry: "Manufacturing", salary: "€1,200 - €1,450 / mo", exp: "3-5 years", desc: "Setup and operate multi-axis CNC machines for automotive components manufacturer." },
  { id: 4, title: "Civil Estimator & Engineer", country: "United Arab Emirates", flag: "🇦🇪", industry: "Engineering", salary: "AED 6,000 - 8,000 / mo", exp: "5+ years", desc: "Oversee material estimations and site safety checks for high-rise commercial structures." },
  { id: 5, title: "Sous Chef (Continental)", country: "Qatar", flag: "🇶🇦", industry: "Hospitality", salary: "QAR 5,000 - 6,500 / mo", exp: "3-5 years", desc: "Specialist Continental chef for a 5-star hotel property. Manage kitchen staff and hygiene standards." },
  { id: 6, title: "Forklift Operator & Warehouse Supervisor", country: "Romania", flag: "🇷🇴", industry: "Warehouse", salary: "€950 - €1,150 / mo", exp: "1-3 years", desc: "Manage loading timelines and operate warehouse vehicles in logistics terminal." }
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedExp, setSelectedExp] = useState("all");

  // Application Modal state
  const [appliedJob, setAppliedJob] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                            job.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCountry = selectedCountry === "all" || job.country === selectedCountry;
      const matchesIndustry = selectedIndustry === "all" || job.industry === selectedIndustry;
      const matchesExp = selectedExp === "all" || job.exp === selectedExp;
      
      return matchesSearch && matchesCountry && matchesIndustry && matchesExp;
    });
  }, [search, selectedCountry, selectedIndustry, selectedExp]);

  const handleApply = (job: any) => {
    setAppliedJob(job);
    setFormSubmitted(false);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setAppliedJob(null);
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Job Board</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Open Global Positions</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Browse active work permit vacancies across European Union states and GCC territories. Vetted sponsors only.
          </p>
        </div>
      </section>

      {/* Main Grid: Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12">
        {/* Search & Filter Bar */}
        <div className="bg-white border border-borders rounded-2xl p-6 shadow-sm mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search box */}
          <div className="relative md:col-span-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-custom" />
            <input
              type="text"
              placeholder="Search roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-borders rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm focus:outline-none focus:border-secondary transition-all"
            />
          </div>

          {/* Country filter */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-slate-50 border border-borders rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-secondary transition-all"
            >
              <option value="all">All Countries</option>
              <option value="Romania">Romania</option>
              <option value="Poland">Poland</option>
              <option value="Croatia">Croatia</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Qatar">Qatar</option>
            </select>
          </div>

          {/* Industry Filter */}
          <div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-slate-50 border border-borders rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-secondary transition-all"
            >
              <option value="all">All Industries</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Construction">Construction</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Engineering">Engineering</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Warehouse">Warehouse</option>
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <select
              value={selectedExp}
              onChange={(e) => setSelectedExp(e.target.value)}
              className="w-full bg-slate-50 border border-borders rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-secondary transition-all"
            >
              <option value="all">All Experience Levels</option>
              <option value="1-3 years">1 - 3 Years</option>
              <option value="3-5 years">3 - 5 Years</option>
              <option value="5+ years">5+ Years</option>
            </select>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-borders rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-100 px-2.5 py-1 rounded text-muted-custom">
                      {job.industry}
                    </span>
                    <span className="text-2xl filter drop-shadow-sm select-none">{job.flag}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-primary mb-2.5">{job.title}</h3>
                  <p className="text-xs text-muted-custom leading-relaxed mb-6">{job.desc}</p>
                  
                  {/* Job details */}
                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-primary font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{job.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job)}
                  className="w-full bg-secondary hover:bg-primary text-white py-3 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Apply For Role
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-16 bg-white border border-borders rounded-2xl">
              <p className="text-sm text-muted-custom">No openings match your search criteria. Register as a candidate to get alerted on new updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Dialog Modal */}
      <AnimatePresence>
        {appliedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-borders rounded-[24px] p-6 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setAppliedJob(null)}
                className="absolute right-4 top-4 p-1 rounded-lg hover:bg-slate-50 text-muted-custom"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Application Received</h3>
                    <p className="text-xs text-muted-custom max-w-xs mx-auto">
                      Your profile has been logged for {appliedJob.title}. Our sourcing advisors will contact you for credential vetting shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submitApplication} className="space-y-4">
                    <h3 className="text-base font-bold text-primary mb-2">Apply for {appliedJob.title}</h3>
                    <p className="text-xs text-muted-custom">Role based in {appliedJob.country}. Verification processes required.</p>
                    
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primary uppercase">Full Name</label>
                      <input type="text" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primary uppercase">Email</label>
                      <input type="email" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primary uppercase">Phone</label>
                      <input type="tel" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primary uppercase">Experience Description</label>
                      <textarea rows={3} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-secondary hover:bg-primary text-white text-xs font-bold py-3 rounded-lg shadow-sm">
                      Submit Profile File
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
