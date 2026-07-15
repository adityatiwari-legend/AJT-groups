import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Icon Container */}
        <div className="w-24 h-24 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center mx-auto border border-secondary/10 shadow-sm relative">
          <Compass className="w-12 h-12 text-secondary animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h1 className="text-6xl font-black text-primary leading-none">404</h1>
          <h2 className="text-xl font-bold text-primary">Destination Not Found</h2>
          <p className="text-sm text-muted-custom leading-relaxed">
            The path you are looking for does not exist or has been shifted. Let's redirect you back to a verified route.
          </p>
        </div>

        {/* Action button */}
        <div>
          <Link
            href="/"
            className="bg-secondary hover:bg-primary text-white text-xs font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md justify-center w-full sm:w-auto"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
