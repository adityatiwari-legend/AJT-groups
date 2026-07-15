"use client";

import React, { useState } from "react";
import { Building, ArrowRight, ShieldCheck, HelpCircle, Award, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";

type EmployerInputs = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  hiringVolume: string;
  message: string;
};

export default function EmployersPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EmployerInputs>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: EmployerInputs) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Corporate Solutions</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Employers Services</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Partner with India's leading ethical recruitment provider. Access customized headhunting and bulk labor mobilization solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Solutions */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Our Recruitment Capabilities</h2>
              <p className="text-sm text-muted-custom leading-relaxed">
                AJT Overseas offers specialized recruiting services tailored to the requirements of foreign corporations. We handle client advertising campaigns, pre-selection testing, credentials checking, and immigration compliance to ensure smooth project mobilizations.
              </p>
            </div>

            {/* Vetting Capabilities */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary" id="testing">In-house Vetting &amp; Trade Testing</h3>
              <p className="text-sm text-muted-custom leading-relaxed">
                Our testing partners provide practical assessments for construction, welding, plumbing, HVAC, electrical, and hospitality roles. Candidates undergo strict evaluation before dossiers are sent to employer sponsors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Practical Assessments", desc: "Verifying craftsmanship benchmarks for construction, welding, and mechanics." },
                  { title: "Language Proficiency Checks", desc: "Assessing candidate English or destination language proficiency." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex gap-3">
                    <span className="text-xs bg-blue-50 text-secondary p-1.5 rounded-lg h-fit">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary">{item.title}</h4>
                      <p className="text-[11px] text-muted-custom mt-0.5 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Emigration &amp; Government Compliances</h3>
              <p className="text-sm text-muted-custom leading-relaxed">
                We coordinate all emigration clearance protocols with the Protector of Emigrants (PoE), Ministry of External Affairs, India, to ensure full regulatory alignment.
              </p>
            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-borders rounded-2xl p-6 md:p-8 shadow-md sticky top-24">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Request Logged</h3>
                  <p className="text-xs text-muted-custom">Our corporate solutions desk will contact you within 12 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="text-base font-bold text-primary mb-2">Request Custom Talent Solutions</h3>
                  <p className="text-xs text-muted-custom">Detail your hiring numbers and destination countries.</p>
                  
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Company Name</label>
                    <input type="text" {...register("companyName", { required: true })} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Contact Person Name</label>
                    <input type="text" {...register("contactName", { required: true })} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Business Email</label>
                    <input type="email" {...register("email", { required: true })} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Phone Number</label>
                    <input type="tel" {...register("phone", { required: true })} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Hiring Volume / Scale</label>
                    <select {...register("hiringVolume")} className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary">
                      <option value="single">Single / Key Executive Headhunt</option>
                      <option value="medium">Medium Size Crew (5 - 20 candidates)</option>
                      <option value="bulk">Bulk Sourcing Mobilization (20+ candidates)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-primary uppercase">Requirements Summary</label>
                    <textarea rows={3} {...register("message", { required: true })} placeholder="Specify required skills, languages, and country..." className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-secondary hover:bg-primary text-white text-xs font-bold py-3 rounded-lg shadow-sm">
                    Submit Recruitment Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
