import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-12", showText = true, light = false }: LogoProps) {
  // If light is true (for dark backgrounds), we display the text in white
  // and wrap the logo mark in a white badge if it has a background.
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Mark Image */}
      <div className={`h-full aspect-square relative flex items-center justify-center ${
        light ? "bg-white p-1 rounded-lg shadow-sm" : ""
      }`}>
        <img 
          src="/logo.png" 
          alt="AJT Overseas Logo Mark" 
          className="h-full w-auto object-contain" 
        />
      </div>

      {/* Brand Text (Outfit/Inter typography styled dynamically) */}
      {showText && (
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center gap-2">
            {/* <span
              className={`font-sans font-extrabold tracking-[0.16em] text-lg md:text-xl leading-none ${
                light ? "text-white" : "text-[#173F7A]"
              }`}
            >
              AJT
            </span> */}
            <div className={`w-[1px] h-5 ${light ? "bg-white/20" : "bg-slate-200"}`} />
            <span
              className={`font-sans font-bold tracking-[0.08em] text-md md:text-lg leading-none ${
                light ? "text-white" : "text-[#0B1220]"
              }`}
            >
              OVERSEAS
            </span>
          </div>
          <div className="flex items-center justify-between w-full mt-1">
            <div className={`h-[1px] flex-1 ${light ? "bg-accent/40" : "bg-accent/60"}`} />
            <span
              className="font-sans text-[8px] font-bold tracking-[0.12em] px-2 leading-none uppercase text-accent"
            >
              Private Limited
            </span>
            <div className={`h-[1px] flex-1 ${light ? "bg-accent/40" : "bg-accent/60"}`} />
          </div>
          <span
            className={`font-sans text-[8px] font-medium tracking-[0.03em] mt-1 leading-none ${
              light ? "text-white/60" : "text-muted-custom"
            }`}
          >
            Excellence in Global Recruitment
          </span>
        </div>
      )}
    </div>
  );
}
