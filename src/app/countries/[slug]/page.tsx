import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe, ArrowRight, ShieldCheck, HeartHandshake, FileText, HelpCircle, CheckCircle2 } from "lucide-react";

interface CountryData {
  name: string;
  flag: string;
  type: "recruitment" | "study";
  heroTitle: string;
  heroDesc: string;
  aboutText: string;
  industriesTitle: string;
  industries: string[];
  benefits: string[];
  visaSteps: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
}

const countriesData: Record<string, CountryData> = {
  romania: {
    name: "Romania",
    flag: "🇷🇴",
    type: "recruitment",
    heroTitle: "Work Opportunities in Romania",
    heroDesc: "Join Romania's growing workforce. Secure jobs in manufacturing, construction, and hospitality with verified sponsors.",
    aboutText: "Romania is a growing European market with an active demand for skilled international talent. Under EU frameworks, it offers clear employment contracts and a pathway to long-term residency.",
    industriesTitle: "Top Industries Hiring",
    industries: ["Commercial & Infrastructure Construction", "Manufacturing & Assembly Lines", "Logistics, Warehousing & Fleet Operations", "Hospitality, Hotel & Food Service"],
    benefits: [
      "Standard European Union employment contracts",
      "Sponsor-provided accommodation and transport assistance",
      "Overtime pay structures aligned with Romanian labor laws",
      "Clear pathways to apply for EU Long-Term Residency"
    ],
    visaSteps: [
      "Employer obtains Romanian Work Permit (Aviz de Angajare).",
      "Candidate gathers verified documentation for consular filing.",
      "Visa interview and submission at the Romanian Consulate in India.",
      "Work Visa (D/AM) stamping and flight deployment."
    ],
    documents: [
      "Valid passport (at least 12 months validity left)",
      "Police Clearance Certificate (PCC) with apostille",
      "Certified educational and technical skill certificates",
      "Medical fitness certificate verified by panel clinic"
    ],
    faqs: [
      { q: "What is the average work permit processing time for Romania?", a: "Work permit approval from the Romanian Immigration Inspectorate takes 30-45 days, and visa stamping takes another 15-20 days." },
      { q: "Is accommodation provided by employers?", a: "Yes, in most cases, Romanian employers provide shared housing and transport to and from work sites." }
    ]
  },
  poland: {
    name: "Poland",
    flag: "🇵🇱",
    type: "recruitment",
    heroTitle: "Jobs & Employment in Poland",
    heroDesc: "Secure work permits for Poland's manufacturing, engineering, and logistics industries.",
    aboutText: "Poland is one of Central Europe's largest economies. It offers structured work environments, competitive wages, and access to the wider Schengen zone.",
    industriesTitle: "Sectors Sourcing Talent",
    industries: ["Technical Assembly & Metal Fabrication", "Logistics & Professional Truck Driving", "Civil Construction & Carpentry", "Food Packing & Production"],
    benefits: [
      "Competitive European wage scales",
      "Schengen zone travel clearance for tourism",
      "Structured health insurance coverage",
      "Pathway to Polish Temporary Residence Card (Karta Pobytu)"
    ],
    visaSteps: [
      "Polish employer files Work Permit (Zezwolenie) at local Voivodeship office.",
      "Original work permit sent to candidate in India.",
      "National Visa (Type D) submission at Polish embassy portals.",
      "Visa issuance, pre-departure briefing, and deployment."
    ],
    documents: [
      "Valid Indian passport",
      "Original Polish work permit (Zezwolenie)",
      "Travel medical insurance policy (Schengen compliant)",
      "PCC (Police Clearance Certificate)"
    ],
    faqs: [
      { q: "Do I need to speak Polish to work there?", a: "For technical and manufacturing roles, basic English is usually sufficient as teams are multinational." },
      { q: "Can I travel to other European countries on a Polish work visa?", a: "Yes, a Polish National Type D visa allows Schengen travel for up to 90 days in any 180-day period for tourism." }
    ]
  },
  "united-kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    type: "study",
    heroTitle: "Study in the United Kingdom",
    heroDesc: "Acquire world-class degrees at top UK universities. Access post-study work permit rights.",
    aboutText: "The United Kingdom remains a premier global destination for higher education, combining centuries of academic prestige with flexible post-study work options.",
    industriesTitle: "Top Programs & Courses",
    industries: ["M.Sc. Data Science & Artificial Intelligence", "MBA & International Business Management", "M.Sc. Advanced Mechanical Engineering", "MPH (Master of Public Health)"],
    benefits: [
      "Highly respected academic credentials worldwide",
      "2-Year Graduate Immigration Route (Post Study Work Visa)",
      "Part-time work permissions (up to 20 hours/week during term)",
      "No-IELTS admissions options for eligible CBSE/ICSE students"
    ],
    visaSteps: [
      "Submit academic documents to secure university offer.",
      "Pay tuition deposit and receive Confirmation of Acceptance for Studies (CAS).",
      "Compile financial evidence (bank statements showing tuition and living funds).",
      "File UK Student Visa (Tier 4) application and attend biometric checks."
    ],
    documents: [
      "Valid passport",
      "Confirmation of Acceptance for Studies (CAS) from university",
      "Tuberculosis (TB) test certificate from approved clinic",
      "Financial evidence (bank statements satisfying 28-day rule)"
    ],
    faqs: [
      { q: "What is the Graduate Route (PSW) in the UK?", a: "The Graduate Route allows students who complete an eligible degree to stay and work in the UK for 2 years (3 years for PhD grads) without employer sponsorship." },
      { q: "Can I bring my family dependents?", a: "Under current UK visa rules, only postgraduate research programs allow students to sponsor dependent visas." }
    ]
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    type: "study",
    heroTitle: "Study & Live in Canada",
    heroDesc: "Access academic programs at top Canadian colleges and universities. Leverage pathways to PGWP and permanent residency.",
    aboutText: "Canada is recognized for its high-quality education and pathways for students to gain work experience and transition to permanent residency.",
    industriesTitle: "Top Study Streams",
    industries: ["Computer Science & Cloud Technologies", "Project Management & Operations", "Construction Management & Trades", "Healthcare & Nursing Studies"],
    benefits: [
      "Top-tier education and globally recognized degrees",
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Pathways to Permanent Residency through Express Entry (CEC)",
      "Highly inclusive multicultural student environment"
    ],
    visaSteps: [
      "Secure Letter of Acceptance (LOA) from a Designated Learning Institution (DLI).",
      "Pay first-year tuition fee and invest in Guaranteed Investment Certificate (GIC).",
      "File study permit application online under SDS or non-SDS stream.",
      "Attend biometric session and receive Study Permit approval."
    ],
    documents: [
      "Letter of Acceptance (LOA) from DLI university/college",
      "Guaranteed Investment Certificate (GIC) receipt of $20,635 CAD",
      "IELTS Academic result (overall 6.0 or equivalent)",
      "Proof of first-year tuition payment"
    ],
    faqs: [
      { q: "What is the SDS stream for Canadian Student Visas?", a: "The Student Direct Stream (SDS) is an expedited study permit processing system for applicants from India who meet specific tuition and GIC investment conditions." },
      { q: "How long can I work on PGWP?", a: "Programs lasting 2 years or longer qualify for a 3-year Post-Graduation Work Permit." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "romania" },
    { slug: "poland" },
    { slug: "united-kingdom" },
    { slug: "canada" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const country = countriesData[slug];

  if (!country) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl filter drop-shadow">{country.flag}</span>
            <span className="text-[12px] font-bold text-accent tracking-widest uppercase bg-white/10 px-3 py-1 rounded">
              {country.type === "recruitment" ? "Employment Sourcing" : "Academic Destination"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{country.heroTitle}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {country.heroDesc}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Overview</h2>
              <p className="text-sm text-muted-custom leading-relaxed">{country.aboutText}</p>
            </div>

            {/* Top sectors / Courses */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">{country.industriesTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {country.industries.map((ind, idx) => (
                  <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs font-bold text-primary">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Benefits &amp; Privileges</h2>
              <div className="grid grid-cols-1 gap-4">
                {country.benefits.map((ben, idx) => (
                  <div key={idx} className="bg-white border border-borders rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs text-muted-custom leading-normal">{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Process */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Visa Application Journey</h2>
              <div className="space-y-4">
                {country.visaSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary mt-1">Milestone {idx + 1}</h4>
                      <p className="text-xs text-muted-custom leading-relaxed mt-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Required Documents &amp; Vetting</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-xs text-muted-custom">
                {country.documents.map((doc, idx) => (
                  <li key={idx} className="leading-relaxed">{doc}</li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {country.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-borders rounded-xl p-5 shadow-sm">
                    <h4 className="text-xs font-black text-primary mb-2">Q: {faq.q}</h4>
                    <p className="text-xs text-muted-custom leading-relaxed">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Application Form Block */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-borders rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="text-base font-bold text-primary mb-4 border-b border-slate-50 pb-2">Apply for {country.name}</h3>
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
                  <label className="text-[10px] font-bold text-primary uppercase">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-primary uppercase">Brief Profile Summary</label>
                  <textarea rows={3} placeholder="Provide details on qualifications or current experience..." className="bg-slate-50 border border-borders rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-secondary" required></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-primary text-white text-xs font-bold py-3 rounded-lg shadow-sm transition-all text-center">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
