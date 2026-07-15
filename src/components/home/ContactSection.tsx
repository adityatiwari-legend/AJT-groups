"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  inquiryType: "recruitment" | "study" | "general";
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = async (data: FormInputs) => {
    setFormState("submitting");
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState("success");
    reset();
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
                Connect With Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-[16px] text-muted-custom leading-relaxed mb-8">
                Reach out to our specialists. We have dedicated desks for corporate hiring clients and individual academic/job applicants.
              </p>

              {/* Info Blocks */}
              <div className="space-y-6 mb-8">
                
                {/* Recruitment Info */}
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-borders">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg h-fit">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">Corporate Recruitment Desk</h4>
                    <p className="text-xs text-muted-custom">For overseas employers seeking talent mobilization.</p>
                    <a href="mailto:corporate@ajtoverseas.com" className="text-xs font-semibold text-secondary block mt-1 hover:text-accent">corporate@ajtoverseas.com</a>
                  </div>
                </div>

                {/* Study Info */}
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-borders">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg h-fit">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">Study Abroad &amp; Candidate Desk</h4>
                    <p className="text-xs text-muted-custom">For students and professionals seeking career support.</p>
                    <a href="mailto:apply@ajtoverseas.com" className="text-xs font-semibold text-secondary block mt-1 hover:text-accent">apply@ajtoverseas.com</a>
                  </div>
                </div>

                {/* Contact numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-xs text-primary font-semibold">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+91 999 999 9999</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-primary font-semibold">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Mon - Sat: 9 AM - 6 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Map View or Embed */}
            <div className="w-full h-56 rounded-2xl border border-borders bg-slate-50 overflow-hidden relative shadow-inner">
              {/* Premium Vector Map representation */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.1)_0%,rgba(248,250,252,1)_100%)] flex items-center justify-center">
                {/* Globe/Grid SVG pattern */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 200" fill="none">
                  <path d="M50 100 C150 50 250 150 350 100" stroke="#CBD5E1" strokeWidth="1" />
                  <path d="M50 130 C150 80 250 180 350 130" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="200" cy="100" r="40" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="100" r="5" fill="#173F7A animate-pulse" />
                </svg>
                <div className="absolute flex flex-col items-center gap-1.5 text-center">
                  <MapPin className="w-6 h-6 text-accent animate-bounce" />
                  <span className="text-xs font-bold text-primary">Headquarters</span>
                  <span className="text-[10px] text-muted-custom">Bandra West, Mumbai, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-borders rounded-[32px] p-8 md:p-10 shadow-sm relative">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100 shadow-md">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Enquiry Submitted Successfully</h3>
                    <p className="text-sm text-muted-custom leading-relaxed max-w-sm">
                      Thank you for contacting AJT Overseas. One of our specialized career advisors will contact you within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div className="text-xs font-bold text-muted-custom uppercase tracking-widest border-b border-borders pb-2">
                      Send An Enquiry
                    </div>

                    {/* Inquiry Type Select */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary uppercase">Inquiry Category</label>
                      <select
                        {...register("inquiryType", { required: true })}
                        className="bg-white border border-borders rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-all"
                      >
                        <option value="recruitment">Corporate Recruitment Solutions</option>
                        <option value="study">Study Abroad Consulting</option>
                        <option value="general">Visa &amp; General Enquiries</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary uppercase">Full Name</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          {...register("name", { required: "Name is required" })}
                          className={`bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-all ${errors.name ? 'border-red-500' : 'border-borders'}`}
                        />
                        {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name.message}</span>}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary uppercase">Business Email</label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                          })}
                          className={`bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-all ${errors.email ? 'border-red-500' : 'border-borders'}`}
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email.message}</span>}
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary uppercase">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        {...register("phone", { required: "Phone number is required" })}
                        className={`bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-all ${errors.phone ? 'border-red-500' : 'border-borders'}`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone.message}</span>}
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary uppercase">Message / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Detail your hiring numbers, visa case, or university programs of interest..."
                        {...register("message", { required: "Message is required" })}
                        className={`bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-all ${errors.message ? 'border-red-500' : 'border-borders'}`}
                      />
                      {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="bg-secondary hover:bg-primary text-white text-[15px] font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                    >
                      {formState === "submitting" ? (
                        <>Processing Enquiry...</>
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
