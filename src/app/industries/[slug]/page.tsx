"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Award, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";

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
  manufacturing: {
    name: "Manufacturing & Production",
    heroTitle: "Manufacturing & Industrial Sourcing",
    heroDesc: "Providing machine operators, production managers, assembly line workers, and CNC engineers.",
    overview: "Modern manufacturing hubs require skilled operators proficient in automated lines, CNC machining, and quality assurance standards. AJT Overseas mobilizes qualified industrial labor for factories worldwide.",
    availableRoles: ["CNC Machine Operators", "Assembly Line Technicians", "Production Supervisors", "Quality Assurance Inspectors"],
    processSteps: [
      "Practical machine trade assessment.",
      "Safety and quality compliance verification.",
      "Work permit application & embassy clearance."
    ],
    countriesHiring: ["Poland 🇵🇱", "Romania 🇷🇴", "Croatia 🇭🇷", "United Arab Emirates 🇦🇪"]
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
  },
  marine: {
    name: "Marine & Port Operations",
    heroTitle: "Marine & Maritime Logistics Recruitment",
    heroDesc: "Sourcing deck officers, marine engineers, vessel crew, and port logistics workers.",
    overview: "Maritime operations demand certified personnel holding STCW certifications and maritime vessel experience. We facilitate recruitment for commercial fleets, shipyards, and international port terminals.",
    availableRoles: ["Marine Engineers", "Deck Officers & Ratings", "Port Logistics Coordinators", "Shipyard Fitters & Welders"],
    processSteps: [
      "STCW and CDC document verification.",
      "Medical fitness checks under ILO standards.",
      "Seaman visa processing & vessel joinings."
    ],
    countriesHiring: ["United Arab Emirates 🇦🇪", "Qatar 🇶🇦", "Saudi Arabia 🇸🇦", "Singapore 🇸🇬"]
  },
  "oil-and-gas": {
    name: "Oil & Gas / Petrochemicals",
    heroTitle: "Oil, Gas & Energy Personnel Sourcing",
    heroDesc: "Connecting drillers, refinery engineers, pipeline technicians, and safety specialists.",
    overview: "Energy and petrochemical plants mandate rigorous HSE protocols and specialized technical capabilities. We source experienced offshore/onshore engineers, rig operators, and maintenance technicians.",
    availableRoles: ["Petroleum & Refinery Engineers", "Drilling Rig Operators", "Pipeline Welders & Riggers", "HSE Safety Officers"],
    processSteps: [
      "Offshore safety & BOSIET certification checks.",
      "Client technical interviews & trade testing.",
      "Block visa authorization & deployment."
    ],
    countriesHiring: ["Saudi Arabia 🇸🇦", "United Arab Emirates 🇦🇪", "Qatar 🇶🇦", "Oman 🇴🇲"]
  },
  retail: {
    name: "Retail & E-commerce",
    heroTitle: "Retail & Merchandising Sourcing",
    heroDesc: "Providing sales personnel, store managers, visual merchandisers, and customer care executives.",
    overview: "Global retail chains and e-commerce fulfillment hubs require energetic customer-facing and inventory staff. We recruit trained retail associates fluent in English for top brand franchises.",
    availableRoles: ["Store Sales Associates", "Visual Merchandisers", "Retail Store Managers", "Customer Service Representatives"],
    processSteps: [
      "Personality & language proficiency assessment.",
      "Brand-specific customer service orientation.",
      "Work permit & visa mobilization."
    ],
    countriesHiring: ["United Arab Emirates 🇦🇪", "Qatar 🇶🇦", "Saudi Arabia 🇸🇦", "Poland 🇵🇱"]
  },
  logistics: {
    name: "Logistics & Supply Chain",
    heroTitle: "Logistics & Freight Mobility Sourcing",
    heroDesc: "Recruiting delivery drivers, supply chain managers, warehouse planners, and fleet dispatchers.",
    overview: "International supply chains rely on efficient transport and dispatch operations. We source heavy vehicle drivers holding international licenses, logistics planners, and fleet managers.",
    availableRoles: ["Heavy Vehicle & Trailer Drivers", "Fleet Operations Dispatchers", "Supply Chain Planners", "Logistics Coordinators"],
    processSteps: [
      "Driving license verification & yard driving test.",
      "Clean driving record & background check.",
      "Work permit processing & deployment."
    ],
    countriesHiring: ["Romania 🇷🇴", "Poland 🇵🇱", "United Arab Emirates 🇦🇪", "Saudi Arabia 🇸🇦"]
  },
  agriculture: {
    name: "Agriculture & Farming",
    heroTitle: "Agricultural & Agrotech Recruitment",
    heroDesc: "Sourcing modern farming consultants, crop advisors, greenhouse operators, and agricultural workers.",
    overview: "Modern commercial farming utilizes automated irrigation, hydroponics, and greenhouse technologies. We deploy skilled agricultural technicians and farm managers to agricultural enterprises globally.",
    availableRoles: ["Agronomists & Crop Advisors", "Greenhouse Supervisors", "Farm Equipment Operators", "Agricultural Field Workers"],
    processSteps: [
      "Skill verification in modern farm machinery.",
      "Agricultural health & safety briefing.",
      "Seasonal or long-term work visa clearance."
    ],
    countriesHiring: ["Romania 🇷🇴", "Poland 🇵🇱", "Croatia 🇭🇷", "Australia 🇦🇺"]
  },
  it: {
    name: "Information Technology",
    heroTitle: "IT & Software Engineering Placement",
    heroDesc: "Software engineers, cloud solutions architects, cybersecurity experts, and IT coordinators.",
    overview: "Tech enterprises worldwide need experienced software developers, DevOps engineers, and cloud architects. We connect Indian IT talent with European and global tech firms for remote or onsite sponsorship.",
    availableRoles: ["Full Stack & Backend Developers", "Cloud & DevOps Engineers", "Cybersecurity Analysts", "IT Infrastructure Administrators"],
    processSteps: [
      "Technical coding assessment & system design review.",
      "Direct technical panel interview.",
      "EU Blue Card or Work Permit visa sponsorship."
    ],
    countriesHiring: ["Germany 🇩🇪", "United Kingdom 🇬🇧", "Poland 🇵🇱", "United Arab Emirates 🇦🇪"]
  },
  warehouse: {
    name: "Warehouse & Operations",
    heroTitle: "Warehouse & Fulfillment Operations",
    heroDesc: "Providing storekeepers, forklift operators, order pickers, and warehouse supervisors.",
    overview: "E-commerce logistics terminals and distribution centers require reliable inventory handlers and material operators. We supply certified forklift drivers and warehouse staff for high-volume hubs.",
    availableRoles: ["Forklift & Reach Truck Drivers", "Inventory Storekeepers", "Order Pickers & Packers", "Warehouse Supervisors"],
    processSteps: [
      "Material handling equipment trade test.",
      "Inventory management software orientation.",
      "Work visa clearance & group dispatch."
    ],
    countriesHiring: ["Romania 🇷🇴", "Poland 🇵🇱", "Croatia 🇭🇷", "United Arab Emirates 🇦🇪"]
  },
  aviation: {
    name: "Aviation & Ground Support",
    heroTitle: "Aviation & Airport Ground Support",
    heroDesc: "Cabin crew, ground dispatch handlers, baggage handlers, and aircraft maintenance technicians.",
    overview: "Airports and commercial airlines require compliant ground support and aviation technicians. We recruit certified avionics mechanics, ramp agents, and passenger service staff.",
    availableRoles: ["Aircraft Maintenance Engineers", "Ramp & Baggage Handlers", "Ground Operations Dispatchers", "Customer Support & Check-in Staff"],
    processSteps: [
      "Aviation license & ICAO compliance check.",
      "Airport security background vetting.",
      "Consular visa stamping & airline dispatch."
    ],
    countriesHiring: ["United Arab Emirates 🇦🇪", "Qatar 🇶🇦", "Saudi Arabia 🇸🇦", "United Kingdom 🇬🇧"]
  },
  "food-processing": {
    name: "Food Processing & Packaged",
    heroTitle: "Food Processing & Industrial Packaging",
    heroDesc: "Providing food processing engineers, quality control inspectors, and packaging machine operators.",
    overview: "Food manufacturing and packaging plants require strict adherence to HACCP hygiene and food safety standards. We recruit trained processing line operators and quality assurance personnel.",
    availableRoles: ["Food Safety & Quality Inspectors", "Packaging Machine Operators", "Processing Line Technicians", "Cold Storage Logistics Staff"],
    processSteps: [
      "HACCP food hygiene certification check.",
      "Medical sanitation fitness clearance.",
      "Work permit processing & deployment."
    ],
    countriesHiring: ["Poland 🇵🇱", "Romania 🇷🇴", "Croatia 🇭🇷", "Saudi Arabia 🇸🇦"]
  },
  "facility-management": {
    name: "Facility Management",
    heroTitle: "Facility Management & Building Operations",
    heroDesc: "Maintenance supervisors, HVAC technicians, electrical techs, and building administrators.",
    overview: "Commercial towers, residential complexes, and public infrastructure require 24/7 facility maintenance. We source multi-skilled MEP technicians, HVAC engineers, and facility managers.",
    availableRoles: ["HVAC & Refrigeration Technicians", "MEP Maintenance Supervisors", "Building Electricians & Plumbers", "Facility Operations Coordinators"],
    processSteps: [
      "MEP & HVAC practical trade testing.",
      "Safety and building code compliance check.",
      "Consular visa processing & deployment."
    ],
    countriesHiring: ["United Arab Emirates 🇦🇪", "Saudi Arabia 🇸🇦", "Qatar 🇶🇦", "Romania 🇷🇴"]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry = industriesData[slug];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("1-3");
  const [details, setDetails] = useState("");

  if (!industry) {
    return notFound();
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello AJT Overseas, I would like to apply for positions in ${industry.name}.\nName: ${fullName}\nEmail: ${email}\nExperience: ${exp} Years\nDetails: ${details}`
    );
    window.open(`https://wa.me/919990998229?text=${text}`, "_blank");
  };

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
            <div className="bg-white border border-borders rounded-2xl p-6 shadow-md sticky top-24 space-y-4">
              <h3 className="text-base font-bold text-primary border-b border-slate-50 pb-2">
                Apply for open positions in {industry.name}
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Experience Level</label>
                  <select
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary"
                    required
                  >
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Brief Details</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly detail your qualifications or current role..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3.5 rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Apply via WhatsApp (+91-9990998229)</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
