import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4C05A6] text-white pt-10 pb-6 sm:pt-12 sm:pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 border-b border-white/15">
          {/* Brand Info (4 columns) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="relative h-10 w-44 bg-white rounded-xl p-1.5 shadow-xs">
              <Image
                src="/technotiq-logo.webp"
                alt="Technotiq"
                fill
                className="object-contain object-left px-2"
                sizes="176px"
              />
            </div>

            <p className="text-white text-xs sm:text-[13px] leading-relaxed max-w-sm font-normal opacity-95">
              Technotiq Automation Private Limited bridges real-world industrial hardware
              engineering with cutting-edge software, cloud systems, and applied AI.
            </p>

            <div className="space-y-1 pt-1 text-xs sm:text-[13px] text-white font-normal opacity-95">
              <p>Ranchi, Jharkhand, India</p>
              <p>
                <a href="tel:+916299916713" className="text-white hover:underline">
                  +91 6299 916713
                </a>
              </p>
              <p>
                <a href="mailto:technotiqautomation@gmail.com" className="text-white hover:underline">
                  technotiqautomation@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Industrial Automation Courses (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white mb-3 sm:mb-4 whitespace-nowrap">
              Industrial Automation
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white font-normal">
              <li>
                <Link href="/courses/automation-system-engineer" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Automation System Engineer
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-automation-system-professional" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Advanced Automation Professional
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-plc-program-professional" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  PLC Program Professional
                </Link>
              </li>
              <li>
                <Link href="/courses/electrical-control-panel-designing" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Electrical Panel Designing
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/courses/industrial-automation" className="text-white hover:underline font-medium inline-block opacity-90">
                  View All Industrial Tracks
                </Link>
              </li>
            </ul>
          </div>

          {/* Building Management System Courses (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white mb-3 sm:mb-4 whitespace-nowrap">
              Building Automation (BMS)
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white font-normal">
              <li>
                <Link href="/courses/diploma-in-building-management-system" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Diploma In BMS Automation
                </Link>
              </li>
              <li>
                <Link href="/courses/certified-bms-engineer" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Certified BMS Engineer
                </Link>
              </li>
              <li>
                <Link href="/courses/cctv-and-security-systems" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  CCTV & Security Systems
                </Link>
              </li>
              <li>
                <Link href="/courses/cctv-training" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  CCTV Technician Training
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/courses/building-management-system" className="text-white hover:underline font-medium inline-block opacity-90">
                  View All BMS Tracks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Services (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white mb-3 sm:mb-4 whitespace-nowrap">
              Company & Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white font-normal">
              <li>
                <Link href="/services" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Turnkey Engineering
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Training Academy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  About Technotiq
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline transition-colors whitespace-nowrap block">
                  Contact & Lab Visit
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/contact" className="text-white hover:underline font-medium inline-block opacity-90">
                  Book a Discovery Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Credit */}
        <div className="pt-5 flex items-center justify-center text-xs text-white font-normal">
          <p>All Rights Reserved. Technotiq</p>
        </div>
      </div>
    </footer>
  );
}
