import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import DirectorsMessage from "@/components/home/DirectorsMessage";
import Services from "@/components/home/Services";
import Countries from "@/components/home/Countries";
import StudyAbroadDestinations from "@/components/home/StudyAbroadDestinations";
import Industries from "@/components/home/Industries";
import TimelineSection from "@/components/home/TimelineSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EmployerCandidateSections from "@/components/home/EmployerCandidateSections";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Landing Block */}
      <Hero />

      {/* 2. About AJT Overseas */}
      <About />

      {/* 2b. Director's Message
      <DirectorsMessage /> */}

      {/* 3. Services Vertical Overview */}
      <Services />

      {/* 4. Tabbed Countries Directory */}
      <Countries />

      {/* 4b. Comprehensive Study Abroad Destinations */}
      <StudyAbroadDestinations />

      {/* 5. Industries Grid Sourcing */}
      <Industries />

      {/* 6 & 7. Step-by-Step Chronology Timelines */}
      <TimelineSection />

      {/* 8. Why Partner With AJT */}
      <WhyChooseUs />

      {/* 9, 10 & 11. Employer Solutions, Candidate Careers, and Student Advisory Sections */}
      <EmployerCandidateSections />

      {/* 12. Candidate & Client Testimonials */}
      <Testimonials />

      {/* 13. FAQ Accordion Block */}
      <Faq />

      {/* 14. Contact Desks & Inquiries form */}
      <ContactSection />
    </div>
  );
}
