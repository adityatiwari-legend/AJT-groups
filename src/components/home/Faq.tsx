"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, Search, Sparkles, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  highlight?: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Recruitment & Compliance",
    question: "Is AJT Overseas registered under the Ministry of External Affairs, India?",
    answer: "Yes, AJT Overseas Private Limited is a government-approved recruiting agency holding a valid active recruiting license issued by the Ministry of External Affairs (MEA), Government of India. This guarantees full compliance with statutory migration standards.",
    highlight: "Government Approved (MEA License)"
  },
  {
    id: 2,
    category: "Recruitment & Compliance",
    question: "What is your ethical recruitment policy?",
    answer: "We strictly adhere to international codes of ethical recruitment. We protect candidates from financial exploitation by keeping candidate fees transparent and charging client employers directly for our sourcing, testing, and deployment services.",
    highlight: "Zero Exploitation Policy"
  },
  {
    id: 3,
    category: "Study Abroad & Visas",
    question: "Which countries do you cover for university education and student visas?",
    answer: "Our academic consultancy covers top global education hubs including the United Kingdom, Canada, Germany, Ireland, Malta, Australia, France, and the United States. We manage course matching, university admissions, and student visas.",
    highlight: "Top Global Destinations"
  },
  {
    id: 4,
    category: "Mobilization & Deployment",
    question: "How long does the work visa mobilization process take?",
    answer: "The standard deployment cycle ranges between 30 to 60 days. This timeline covers candidate vetting, employer selection panels, medical checks, government compliance clearance, embassy stamping, and flight bookings.",
    highlight: "30 - 60 Days Fast Track"
  },
  {
    id: 5,
    category: "Mobilization & Deployment",
    question: "Do you coordinate trade testing and skill validations?",
    answer: "Yes, we partner with ISO-audited technical testing labs to assess candidate skills practically in construction, electrical work, machining, welding, and hospitality before making final selections.",
    highlight: "ISO Audited Validation"
  },
  {
    id: 6,
    category: "Study Abroad & Visas",
    question: "What financial proof or documentation is needed for a student visa?",
    answer: "Depending on the destination country (e.g., UK CAS, German Blocked Account, Canadian GIC), we provide comprehensive guidance on valid proof of funds, sponsor affidavits, bank statements, and scholarship documentation.",
    highlight: "Step-by-Step Visa Guidance"
  }
];

const categories = ["All", "Recruitment & Compliance", "Study Abroad & Visas", "Mobilization & Deployment"];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.highlight && faq.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  const handleExpandAll = () => {
    if (openIndex === -1) {
      setOpenIndex(null);
    } else {
      setOpenIndex(-1); // -1 signifies all expanded
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-accent" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-custom text-sm md:text-base mt-3 max-w-xl mx-auto"
          >
            Clear, transparent details regarding our government registration, recruitment ethics, mobilization timelines, and student visas.
          </motion.p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-borders rounded-xl pl-9 pr-4 py-2 text-xs text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Expand / Collapse Toggle Button */}
            <button
              onClick={handleExpandAll}
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1.5 self-end sm:self-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              {openIndex === -1 ? "Collapse All" : "Expand All"}
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "text-white bg-primary shadow-md shadow-primary/20"
                      : "text-slate-600 bg-white border border-borders hover:bg-slate-100 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordions Container */}
        <div className="space-y-3.5">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-8"
              >
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-primary mb-1">No matching questions found</h4>
                <p className="text-xs text-muted-custom">Try adjusting your search terms or filter category.</p>
              </motion.div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIndex === -1 || openIndex === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-2 border-secondary/30 shadow-lg shadow-secondary/5 ring-4 ring-secondary/5"
                        : "border border-borders hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    {/* Left Accent Glow Bar when open */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary via-accent to-secondary origin-top z-20"
                        />
                      )}
                    </AnimatePresence>

                    {/* Header / Question Button Trigger */}
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group select-none relative z-10"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 pr-4">
                        <span className="font-bold text-base md:text-lg text-primary group-hover:text-secondary transition-colors leading-snug">
                          {faq.question}
                        </span>
                        {faq.highlight && (
                          <span className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full w-max">
                            <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                            {faq.highlight}
                          </span>
                        )}
                      </div>

                      {/* Rotatable Toggle Icon Badge */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`p-2 rounded-xl border flex-shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? "bg-primary border-primary text-accent shadow-md shadow-primary/20"
                            : "bg-slate-50 border-borders text-slate-500 group-hover:bg-slate-100 group-hover:text-primary"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    {/* Answer Drawer Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer-drawer"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={{
                            open: {
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                                opacity: { duration: 0.25, delay: 0.05 }
                              }
                            },
                            closed: {
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                opacity: { duration: 0.15 }
                              }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="px-5 pb-6 md:px-6 md:pb-6 pt-1 border-t border-slate-100"
                          >
                            <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-100/80 text-sm md:text-[15px] text-muted-custom leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <div className="space-y-2">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/10"
        >
          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-1">Have a specific question not listed here?</h4>
            <p className="text-xs md:text-sm text-white/80">Our recruitment and advisory consultants are available for direct consultation.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-accent hover:bg-hover-accent text-primary font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Ask Our Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

