import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4C05A6] text-white pt-10 pb-6 sm:pt-12 sm:pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8 border-b border-white/15">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="relative h-10 w-44 bg-white rounded-xl p-1.5 shadow-xs">
              <Image
                src="/technotiq-logo.webp"
                alt="Technotiq"
                fill
                className="object-contain object-left px-2"
                sizes="176px"
              />
            </div>

            <p className="text-white text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Technotiq Automation Private Limited bridges real-world industrial hardware
              engineering with cutting-edge software, cloud systems, and applied AI.
            </p>

            <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-white font-normal">
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

          {/* Industrial Automation Courses (1 column) */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Industrial Automation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <li>
                <Link href="/courses/automation-system-engineer" className="text-white hover:underline transition-colors">
                  Automation System Engineer
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-automation-system-professional" className="text-white hover:underline transition-colors">
                  Advanced Automation System
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-plc-program-professional" className="text-white hover:underline transition-colors">
                  Advanced PLC Program
                </Link>
              </li>
              <li>
                <Link href="/courses/electrical-control-panel-designing" className="text-white hover:underline transition-colors">
                  Electrical Panel Designing
                </Link>
              </li>
              <li>
                <Link href="/courses/industrial-automation" className="text-white hover:underline font-normal inline-block mt-0.5 opacity-90">
                  View Category Tracks
                </Link>
              </li>
            </ul>
          </div>

          {/* Building Management System Courses (1 column) */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Building Management System
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <li>
                <Link href="/courses/diploma-in-building-management-system" className="text-white hover:underline transition-colors">
                  Diploma In BMS
                </Link>
              </li>
              <li>
                <Link href="/courses/certified-bms-engineer" className="text-white hover:underline transition-colors">
                  Certified BMS Engineer
                </Link>
              </li>
              <li>
                <Link href="/courses/cctv-and-security-systems" className="text-white hover:underline transition-colors">
                  CCTV & Security Systems
                </Link>
              </li>
              <li>
                <Link href="/courses/cctv-training" className="text-white hover:underline transition-colors">
                  CCTV Training
                </Link>
              </li>
              <li>
                <Link href="/courses/building-management-system" className="text-white hover:underline font-normal inline-block mt-0.5 opacity-90">
                  View Category Tracks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Services (1 column) */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Company & Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <li>
                <Link href="/services#software" className="text-white hover:underline transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-white hover:underline transition-colors">
                  AI Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:underline transition-colors">
                  About Technotiq
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:underline transition-colors">
                  All Courses Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline transition-colors">
                  Contact & Lab Visit
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
