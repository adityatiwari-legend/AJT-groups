"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is AJT Overseas registered under the Ministry of External Affairs, India?",
    answer: "Yes, AJT Overseas Private Limited is a government-approved recruiting agency holding a valid active recruiting license issued by the Ministry of External Affairs (MEA), Government of India. This guarantees full compliance with statutory migration standards."
  },
  {
    question: "What is your ethical recruitment policy?",
    answer: "We strictly adhere to international codes of ethical recruitment. We protect candidates from financial exploitation by keeping candidate fees transparent and charging client employers directly for our sourcing, testing, and deployment services."
  },
  {
    question: "Which countries do you cover for university education and student visas?",
    answer: "Our academic consultancy covers top global education hubs including the United Kingdom, Canada, Germany, Ireland, Malta, Australia, France, and the United States. We manage course matching, university admissions, and student visas."
  },
  {
    question: "How long does the work visa mobilization process take?",
    answer: "The standard deployment cycle ranges between 30 to 60 days. This timeline covers candidate vetting, employer selection panels, medical checks, government compliance clearance, embassy stamping, and flight bookings."
  },
  {
    question: "Do you coordinate trade testing and skill validations?",
    answer: "Yes, we partner with ISO-audited technical testing labs to assess candidate skills practically in construction, electrical work, machining, welding, and hospitality before making final selections."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight">
            Clear Answers to Your Enquiries
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-borders rounded-2xl overflow-hidden transition-all duration-300 hover:border-secondary/20 shadow-sm"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-[16px] md:text-lg text-primary cursor-pointer hover:text-secondary select-none"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-lg border border-borders bg-slate-50 transition-colors ${isOpen ? "bg-secondary border-secondary text-white" : ""}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-[15px] text-muted-custom leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
