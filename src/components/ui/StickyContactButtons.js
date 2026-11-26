import { Phone, WhatsApp } from "../icons";

export default function StickyContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5">
      {/* Phone Call Button - Purple, Square, rounded-[5px] */}
      <a
        href="tel:+916299916713"
        aria-label="Call Technotiq: +91 6299 916713"
        title="Call +91 6299 916713"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-[5px] bg-[#6803F5] hover:bg-[#5502C7] text-white flex items-center justify-center shadow-lg shadow-black/25 transition-all duration-200 hover:scale-105 active:scale-95 group"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </a>

      {/* WhatsApp Button - Official WhatsApp Green, Square, rounded-[5px] */}
      <a
        href="https://wa.me/916299916713?text=Hi%20Technotiq%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20courses."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Technotiq on WhatsApp"
        title="Chat on WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-[5px] bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg shadow-black/25 transition-all duration-200 hover:scale-105 active:scale-95 group"
      >
        <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </a>
    </div>
  );
}
