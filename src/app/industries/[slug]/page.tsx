import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Award, ShieldAlert } from "lucide-react";

interface IndustryData {
  name: string;
  heroTitle: string;
  heroDesc: string;
  overview: string;
  availableRoles: string[];
  processSteps: string[];
  countriesHiring: string[];
}

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    name: "Healthcare & Medicine",
    heroTitle: "Healthcare & Medical Recruitment",
    heroDesc: "Placing doctors, specialized nurses, and medical professionals in European and Gulf health systems.",
    overview: "International healthcare systems require strict credentials vetting and compliance verification. AJT Overseas handles credential evaluation, exam coordination, and licensing approvals to ensure seamless transitions for medical professionals.",
    availableRoles: ["Registered Nurses (ICU, ER, OT)", "General Practice Doctors", "Laboratory Specialists", "Physiotherapists & Caregivers"],
    processSteps: [
      "Vetting credentials and verifying medical licenses.",
      "Coordinating local language/licensing exam prep.",
      "Client selection panels and embassy visa stamping."
    ],
    countriesHiring: ["United Kingdom 🇬🇧", "Germany 🇩🇪", "Saudi Arabia 🇸🇦", "United Arab Emirates 🇦🇪"]
  },
  construction: {
    name: "Construction & Infrastructure",
    heroTitle: "Construction & Engineering Mobilization",
    heroDesc: "Deploying skilled structural engineers, civil estimators, and construction crews globally.",
    overview: "Mega-scale infrastructure projects require fast and compliant manpower mobilization. AJT Overseas has partner trade testing centers in India to verify structural skills, coordinating bulk deployments to EU work sites.",
    availableRoles: ["Project Engineers & Estimators", "Site Supervisors", "Structural Welders & Fabricators", "Electricians & Plumbers"],
    processSteps: [
      "Skill profiling and practical trade testing.",
      "Obtaining employer work permit clearances.",
      "Consular visa stamping and group flight dispatch."
    ],
    countriesHiring: ["Romania 🇷🇴", "Croatia 🇭🇷", "Poland 🇵🇱", "United Arab Emirates 🇦🇪", "Saudi Arabia 🇸🇦"]
  },
  engineering: {
    name: "Engineering & Technical",
    heroTitle: "Technical & Industrial Engineering Jobs",
    heroDesc: "Sourcing civil, mechanical, structural, and chemical engineers for overseas projects.",
    overview: "Industrial and infrastructure projects require certified engineering expertise. We source and qualify senior technical specialists who meet local compliance benchmarks.",
    availableRoles: ["Civil Engineers", "Mechanical Systems Engineers", "Instrumentation Engineers", "Quality Control Inspectors"],
    processSteps: [
      "Vetting academic qualifications.",
      "Coordinating technical selection rounds.",
      "Handling emigration clearances and visa processing."
    ],
    countriesHiring: ["Poland 🇵🇱", "Romania 🇷🇴", "Saudi Arabia 🇸🇦", "Qatar 🇶🇦"]
  },
  hospitality: {
    name: "Hospitality & Catering",
    heroTitle: "Hospitality & Gastronomy Recruitment",
    heroDesc: "Providing culinary chefs, hotel managers, and guest services staff to luxury hotels and resorts.",
    overview: "The hospitality sector depends on high-quality service and presentation. We source trained candidates with excellent communication skills for hotels and resorts in Europe and the Gulf.",
    availableRoles: ["Sous Chefs & Line Cooks", "F&B Supervisors", "Front Desk Executives", "Housekeeping Personnel"],
    processSteps: [
      "Conducting practical culinary and hospitality tests.",
      "Reviewing English language proficiency.",
      "Embassy filing and mobilization."
    ],
    countriesHiring: ["Romania 🇷🇴", "Croatia 🇭🇷", "United Arab Emirates 🇦🇪", "Qatar 🇶🇦"]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "construction" },
    { slug: "engineering" },
    { slug: "hospitality" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Industry Vertical</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{industry.heroTitle}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {industry.heroDesc}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Sector Overview</h2>
              <p className="text-sm text-muted-custom leading-relaxed">{industry.overview}</p>
            </div>

            {/* Available Roles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Common Available Positions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.availableRoles.map((role, idx) => (
                  <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-primary">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sourcing Process */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Recruitment &amp; Testing Flow</h2>
              <div className="space-y-4">
                {industry.processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                    <p className="text-xs text-muted-custom mt-1.5 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Hiring */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Active Hiring Markets</h2>
              <div className="flex flex-wrap gap-3">
                {industry.countriesHiring.map((country, idx) => (
                  <span key={idx} className="bg-white border border-borders rounded-xl px-5 py-3 text-xs font-bold text-primary shadow-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-borders rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="text-base font-bold text-primary mb-4 border-b border-slate-50 pb-2">Apply for open positions</h3>
              <form className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Full Name</label>
                  <input type="text" placeholder="John Doe" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Experience Level</label>
                  <select className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required>
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Brief Details</label>
                  <textarea rows={3} placeholder="Briefly detail your qualifications or current role..." className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-primary text-white text-xs font-bold py-3 rounded-lg shadow-sm transition-all text-center">
                  Submit Candidate Profile
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
