import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Subpage Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Regulatory</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Terms of Service</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Statutory conditions and operating directives for candidates, students, and corporate clients using AJT Overseas portals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-16 bg-white border border-borders rounded-[24px] p-8 md:p-12 mt-12 shadow-sm">
        <div className="prose prose-slate max-w-none space-y-6 text-sm text-muted-custom leading-relaxed">
          <h2 className="text-lg font-bold text-primary">1. Ethical Sourcing Standards</h2>
          <p>
            AJT Overseas Private Limited operates under strict government license frameworks. Candidates and employers using our services must declare true credentials, matching qualifications, and compliant business licenses.
          </p>
          <h2 className="text-lg font-bold text-primary">2. Client Employer Obligations</h2>
          <p>
            Client companies are obligated to provide employment contracts conforming with host country minimum wage policies, safety clearances, and housing supports.
          </p>
          <h2 className="text-lg font-bold text-primary">3. Candidate Commitments</h2>
          <p>
            Candidates registering for overseas employment or academic slots must confirm all details, medical histories, and qualifications are genuine.
          </p>
          <h2 className="text-lg font-bold text-primary">4. Governing Law</h2>
          <p>
            Any disputes or queries regarding our services are governed under the Emigration Act of India and subject to the exclusive jurisdiction of the courts of Gautam Buddha Nagar (Noida), Uttar Pradesh, India.
          </p>
        </div>
      </section>
    </div>
  );
}
