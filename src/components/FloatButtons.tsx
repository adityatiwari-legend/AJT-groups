"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "919990998229";
    const text = encodeURIComponent(
      "Hello AJT Overseas! I would like to inquire about International Recruitment and Study Abroad opportunities."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWhatsApp}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative group"
        aria-label="Contact on WhatsApp"
      >
        {/* Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75" />
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />

        {/* Hover Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Book Counselling on WhatsApp
        </span>
      </motion.button>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-primary border border-borders rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-secondary group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
