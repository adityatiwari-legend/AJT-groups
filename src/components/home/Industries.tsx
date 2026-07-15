"use client";

import React from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  Construction, 
  Settings, 
  Factory, 
  Bed, 
  Anchor, 
  Droplet, 
  ShoppingBag, 
  Truck, 
  Sprout, 
  Cpu, 
  Package, 
  Plane, 
  CookingPot, 
  Building2,
  ArrowRight
} from "lucide-react";

const industries = [
  { name: "Healthcare & Medicine", icon: HeartPulse, slug: "healthcare" },
  { name: "Construction & Infrastructure", icon: Construction, slug: "construction" },
  { name: "Engineering & Technical", icon: Settings, slug: "engineering" },
  { name: "Manufacturing & Production", icon: Factory, slug: "manufacturing" },
  { name: "Hospitality & Catering", icon: Bed, slug: "hospitality" },
  { name: "Marine & Port Operations", icon: Anchor, slug: "marine" },
  { name: "Oil & Gas / Petrochemicals", icon: Droplet, slug: "oil-and-gas" },
  { name: "Retail & E-commerce", icon: ShoppingBag, slug: "retail" },
  { name: "Logistics & Supply Chain", icon: Truck, slug: "logistics" },
  { name: "Agriculture & Farming", icon: Sprout, slug: "agriculture" },
  { name: "Information Technology", icon: Cpu, slug: "it" },
  { name: "Warehouse & Operations", icon: Package, slug: "warehouse" },
  { name: "Aviation & Ground Support", icon: Plane, slug: "aviation" },
  { name: "Food Processing & Packaged", icon: CookingPot, slug: "food-processing" },
  { name: "Facility Management", icon: Building2, slug: "facility-management" }
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[13px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary tracking-tight leading-tight mb-6">
            Global Talent Deployment Across Diverse Sectors
          </h2>
          <p className="text-[17px] text-muted-custom leading-relaxed">
            We provide specialized manpower and executive search solutions tailored to the strict compliance and high skill benchmarks of international markets.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={idx}
                href={`/industries/${ind.slug}`}
                className="group bg-white border border-borders rounded-2xl p-6 hover:border-secondary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-secondary/5 group-hover:text-secondary flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h4 className="text-[14px] font-bold text-primary group-hover:text-secondary transition-colors mb-4 line-clamp-2 min-h-[40px] flex items-center justify-center">
                  {ind.name}
                </h4>

                {/* Micro Action link */}
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-accent flex items-center gap-1 transition-colors mt-auto">
                  View Roles
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Global CTA button */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="text-[15px] font-bold text-secondary hover:text-accent flex items-center gap-1.5 justify-center group"
          >
            Explore Industry Scope &amp; Recruitment Licences
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
