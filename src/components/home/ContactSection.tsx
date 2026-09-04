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
  Briefcase,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FacebookIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  WhatsappIcon 
} from "@/components/BrandIcons";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  inquiryType: "recruitment" | "study" | "general";
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: FormInputs) => {
    setFormState("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry. Please try again later.");
      }

      setFormState("success");
      reset();
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setFormState("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  // Cards Data representing the three specialized desks
  const enquiryCards = [
    {
      id: "business",
      badge: "Corporate Clients & Partners",
      title: "Business Enquiries",
      icon: Building,
      iconColor: "text-blue-600 bg-blue-50",
      glowBg: "bg-blue-500/5",
      phone: "+91 9718570515",
      phoneFormatted: "+91 97185 70515",
      email: "info@ajtoverseas.com",
      whatsapp: "919718570515"
    },
    {
      id: "recruitment",
      badge: "Candidates & Job Seekers",
      title: "International Recruitment",
      icon: Briefcase,
      iconColor: "text-amber-600 bg-amber-50",
      glowBg: "bg-amber-500/5",
      phones: [
        { raw: "+919990803701", formatted: "+91 99908 03701", wa: "919990803701" },
        { raw: "+919718573005", formatted: "+91 97185 73005", wa: "919718573005" }
      ],
      email: "hr@ajtoverseas.com"
    },
    {
      id: "study",
      badge: "Student Enquiries",
      title: "Study Abroad",
      icon: GraduationCap,
      iconColor: "text-purple-600 bg-purple-50",
      glowBg: "bg-purple-500/5",
      phones: [
        { raw: "+919625903005", formatted: "+91 96259 03005", wa: "919625903005" },
        { raw: "+918595433005", formatted: "+91 85954 33005", wa: "918595433005" }
      ],
      email: "recruiter@ajtoverseas.com"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
            Get in Touch with Our Specialized Desks
          </h2>
          <p className="text-[16px] text-muted-custom leading-relaxed">
            Reach out to our specialists today. We have dedicated desks with verified contact details for corporate partners and prospective students/candidates.
          </p>
        </div>

        {/* 1. Three Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {enquiryCards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-500 rounded-3xl p-8 border border-borders relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Visual Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${card.glowBg} rounded-bl-[100px] pointer-events-none`} />
                
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3.5 rounded-2xl ${card.iconColor}`}>
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-accent tracking-wider uppercase">{card.badge}</span>
                      <h3 className="text-lg md:text-xl font-bold text-primary">{card.title}</h3>
                    </div>
                  </div>
                  
                  {/* Contacts */}
                  <div className="space-y-5">
                    {/* Call/WhatsApp Info */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-muted-custom uppercase tracking-wider block">Call or WhatsApp</span>
                      
                      {card.id === "business" ? (
                        <div className="flex items-center justify-between text-sm font-semibold text-primary">
                          <a 
                            href={`tel:${card.phone}`} 
                            className="flex items-center gap-2 hover:text-secondary transition-colors"
                            title="Click to Call"
                          >
                            <Phone className="w-4 h-4 text-secondary/70" />
                            <span>{card.phoneFormatted}</span>
                          </a>
                          <a 
                            href={`https://wa.me/${card.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 hover:scale-105 transition-all flex items-center justify-center" 
                            title="Chat on WhatsApp"
                            aria-label={`Chat with Business Desk on WhatsApp`}
                          >
                            <WhatsappIcon size={16} />
                          </a>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          {card.phones?.map((phoneObj, pIdx) => (
                            <div key={pIdx} className="flex items-center justify-between text-sm font-semibold text-primary">
                              <a 
                                href={`tel:${phoneObj.raw}`} 
                                className="flex items-center gap-2 hover:text-secondary transition-colors"
                                title="Click to Call"
                              >
                                <Phone className="w-4 h-4 text-secondary/70" />
                                <span>{phoneObj.formatted}</span>
                              </a>
                              <a 
                                href={`https://wa.me/${phoneObj.wa}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 hover:scale-105 transition-all flex items-center justify-center" 
                                title="Chat on WhatsApp"
                                aria-label={`Chat with ${card.title} on WhatsApp`}
                              >
                                <WhatsappIcon size={16} />
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Email Info */}
                    <div className="border-t border-slate-100 pt-4 space-y-2">
                      <span className="text-[10px] font-bold text-muted-custom uppercase tracking-wider block">Official Email</span>
                      <a 
                        href={`mailto:${card.email}`} 
                        className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors w-fit"
                        title="Click to Email"
                      >
                        <Mail className="w-4 h-4 text-secondary/70" />
                        <span>{card.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Grid for Form & Address/Map info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-borders rounded-[32px] p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* Form subtle glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
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
                    <h3 className="text-2xl font-bold text-primary mb-3">Enquiry Submitted</h3>
                    <p className="text-sm text-muted-custom leading-relaxed max-w-sm">
                      Thank you for contacting AJT Overseas. One of our specialized advisors will get in touch with you within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 relative z-10"
                  >
                    <div className="text-xs font-bold text-muted-custom uppercase tracking-widest border-b border-borders pb-2">
                      Send An Enquiry
                    </div>

                    {formState === "error" && errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs font-semibold">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold mb-0.5">Submission Failed</p>
                          <p>{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Inquiry Type Select */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary uppercase">Inquiry Category</label>
                      <select
                        {...register("inquiryType", { required: true })}
                        className="bg-white border border-borders rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary transition-all"
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
                          className={`bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary transition-all ${errors.name ? 'border-red-500' : 'border-borders'}`}
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
                          className={`bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary transition-all ${errors.email ? 'border-red-500' : 'border-borders'}`}
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
                        className={`bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary transition-all ${errors.phone ? 'border-red-500' : 'border-borders'}`}
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
                        className={`bg-white border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary transition-all ${errors.message ? 'border-red-500' : 'border-borders'}`}
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

          {/* Right Column: Address, Map, and Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Address Card */}
            <div className="glass-card border border-borders rounded-3xl p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-secondary rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Head Office</span>
                  <h4 className="font-bold text-primary text-base">Corporate Headquarters</h4>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[15px] font-bold text-primary block">AJT Overseas</span>
                <p className="text-sm text-muted-custom leading-relaxed">
                  A-1017, Tower 3, NXOne, Techzone 4, Greater Noida
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 flex flex-col gap-2.5 text-xs text-muted-custom">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-secondary/60 flex-shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Stylized Map View */}
            <div className="w-full h-56 rounded-3xl border border-borders bg-slate-50 overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.08)_0%,rgba(248,250,252,1)_100%)] flex items-center justify-center">
                {/* Globe/Grid SVG pattern */}
                <svg className="w-full h-full opacity-50" viewBox="0 0 400 200" fill="none">
                  <path d="M50 100 C150 50 250 150 350 100" stroke="#CBD5E1" strokeWidth="1" />
                  <path d="M50 130 C150 80 250 180 350 130" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="200" cy="100" r="40" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="100" r="5" fill="#173F7A" />
                </svg>
                <div className="absolute flex flex-col items-center gap-1.5 text-center px-4">
                  <MapPin className="w-6 h-6 text-accent animate-bounce" />
                  <span className="text-xs font-bold text-primary">Greater Noida HQ</span>
                  <span className="text-[10px] text-muted-custom">Tower 3, NXOne, Techzone 4, UP</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card border border-borders rounded-3xl p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-primary text-sm tracking-wide">Follow Our Official Handles</h4>
              <div className="flex items-center gap-3">
                {[
                  { 
                    icon: LinkedinIcon, 
                    href: "https://www.linkedin.com/company/113023890/", 
                    name: "LinkedIn",
                    color: "hover:border-blue-600 hover:text-blue-600" 
                  },
                  { 
                    icon: FacebookIcon, 
                    href: "https://www.facebook.com/profile.php?id=61582255777532", 
                    name: "Facebook",
                    color: "hover:border-blue-700 hover:text-blue-700" 
                  },
                  { 
                    icon: InstagramIcon, 
                    href: "https://www.instagram.com/ajt_overseas/", 
                    name: "Instagram",
                    color: "hover:border-pink-600 hover:text-pink-600" 
                  }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                      className={`w-10 h-10 rounded-xl border border-borders text-muted-custom bg-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md ${social.color}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
