"use client";

import { Phone, WhatsApp } from "../icons";

export default function StickyContactButtons() {
  return (
    <aside
      aria-label="Direct Contact Actions"
      className="fixed z-[90] flex flex-col items-center gap-2.5 pointer-events-auto"
      style={{
        bottom: "max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem))",
        right: "max(1rem, calc(env(safe-area-inset-right, 0px) + 1rem))",
      }}
    >
      {/* Phone Call Button - Purple, Square with 5px border radius */}
      <a
        href="tel:+916299916713"
        aria-label="Call Technotiq: +91 6299 916713"
        title="Call +91 6299 916713"
        className="w-12 h-12 rounded-[5px] bg-[#6803F5] hover:bg-[#5502C7] active:bg-[#4C05A6] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(104,3,245,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        style={{ borderRadius: "5px" }}
      >
        <Phone className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
      </a>

      {/* WhatsApp Button - Official WhatsApp Green, Square with 5px border radius */}
      <a
        href="https://wa.me/916299916713?text=Hi%20Technotiq%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20courses."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Technotiq on WhatsApp"
        title="Chat on WhatsApp"
        className="w-12 h-12 rounded-[5px] bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        style={{ borderRadius: "5px" }}
      >
        <WhatsApp className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
}
