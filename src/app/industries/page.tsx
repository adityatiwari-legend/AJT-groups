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
  { name: "Healthcare & Medicine", icon: HeartPulse, slug: "healthcare", desc: "Placements for doctors, registered nurses, and laboratory researchers globally." },
  { name: "Construction & Infrastructure", icon: Construction, slug: "construction", desc: "Mobilizing construction crews, carpenters, and project management personnel." },
  { name: "Engineering & Technical", icon: Settings, slug: "engineering", desc: "Sourcing civil, mechanical, structural, and chemical engineers for overseas projects." },
  { name: "Manufacturing & Production", icon: Factory, slug: "manufacturing", desc: "Providing operators, production managers, and CNC engineers." },
  { name: "Hospitality & Catering", icon: Bed, slug: "hospitality", desc: "Recruiting culinary chefs, hotel managers, and guest services staff." },
  { name: "Marine & Port Operations", icon: Anchor, slug: "marine", desc: "Sourcing deck officers, marine engineers, and port logistics workers." },
  { name: "Oil & Gas / Petrochemicals", icon: Droplet, slug: "oil-and-gas", desc: "Connecting drillers, refinery engineers, and safety technicians." },
  { name: "Retail & E-commerce", icon: ShoppingBag, slug: "retail", desc: "Providing sales personnel, store managers, and display designers." },
  { name: "Logistics & Supply Chain", icon: Truck, slug: "logistics", desc: "Recruiting delivery drivers, supply managers, and logistics planners." },
  { name: "Agriculture & Farming", icon: Sprout, slug: "agriculture", desc: "Sourcing modern farming consultants, crop advisors, and field workers." },
  { name: "Information Technology", icon: Cpu, slug: "it", desc: "Software engineers, cloud solutions architects, and IT coordinators." },
  { name: "Warehouse & Operations", icon: Package, slug: "warehouse", desc: "Providing storekeepers, loaders, and operations supervisors." },
  { name: "Aviation & Ground Support", icon: Plane, slug: "aviation", desc: "Cabin crew, ground dispatch handlers, and aircraft technicians." },
  { name: "Food Processing & Packaged", icon: CookingPot, slug: "food-processing", desc: "Providing processing engineers and quality control inspectors." },
  { name: "Facility Management", icon: Building2, slug: "facility-management", desc: "Maintenance supervisors, electrical techs, and building administrators." }
];

export default function IndustriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,63,122,0.25)_0%,rgba(11,31,58,1)_80%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-[12px] font-bold text-accent tracking-widest uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Industries We Serve</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive talent sourcing capabilities across a wide array of technical and commercial industries.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-borders rounded-2xl p-6 hover:shadow-md hover:border-secondary/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-secondary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{ind.name}</h3>
                  <p className="text-xs text-muted-custom leading-relaxed mb-6">{ind.desc}</p>
                </div>

                <div className="border-t border-slate-50 pt-4">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-secondary hover:text-accent group transition-colors"
                  >
                    View Available Roles
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
