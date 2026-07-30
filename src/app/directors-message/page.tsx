import React from "react";
import DirectorsMessage from "@/components/home/DirectorsMessage";

export const metadata = {
  title: "Director's Message | AJT Overseas Private Limited",
  description:
    "Leadership vision and official message from Mr. R. P. Tyagi, Founder and Director (Retd. Army) of AJT Overseas Private Limited.",
};

export default function DirectorsMessagePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Main Director's Message Component */}
      <DirectorsMessage />
    </main>
  );
}
