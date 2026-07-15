import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Subpage Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Regulatory</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            How AJT Overseas Private Limited protects, logs, and processes candidate profiles and corporate data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pt-16 bg-white border border-borders rounded-[24px] p-8 md:p-12 mt-12 shadow-sm">
        <div className="prose prose-slate max-w-none space-y-6 text-sm text-muted-custom leading-relaxed">
          <h2 className="text-lg font-bold text-primary">1. Data Collection Scope</h2>
          <p>
            We collect personal information including full name, business email, contact numbers, academic transcript history, work experience certifications, and passport biodata files to evaluate candidate compliance constraints for overseas deployment.
          </p>
          <h2 className="text-lg font-bold text-primary">2. Data Usage &amp; Sharing Covenants</h2>
          <p>
            Your profile details and vetting records are shared with verified client employers holding active sponsorship licenses. We do not distribute candidate data to third-party marketing companies.
          </p>
          <h2 className="text-lg font-bold text-primary">3. Information Storage Integrity</h2>
          <p>
            All submitted credentials, passports, and certifications are stored on secure local databases with restricted administrator access. Data is preserved for as long as required to process respective embassy work clearances.
          </p>
          <h2 className="text-lg font-bold text-primary">4. Candidate Rights</h2>
          <p>
            Under statutory standards, you retain full rights to request verification updates, profile corrections, or permanent removal of credentials from our database by contacting the data compliance desk.
          </p>
        </div>
      </section>
    </div>
  );
}
