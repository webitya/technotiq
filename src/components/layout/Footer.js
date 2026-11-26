import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4C05A6] text-white pt-10 pb-6 sm:pt-12 sm:pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8 border-b border-white/15">
          {/* Brand Info */}
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

          {/* Industrial Automation */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Industrial Automation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <li>
                <Link href="/courses#plc" className="text-white hover:underline transition-colors">
                  PLC Programming
                </Link>
              </li>
              <li>
                <Link href="/courses#scada" className="text-white hover:underline transition-colors">
                  SCADA & HMI Systems
                </Link>
              </li>
              <li>
                <Link href="/courses#bms" className="text-white hover:underline transition-colors">
                  BMS & Building Controls
                </Link>
              </li>
              <li>
                <Link href="/courses#cctv" className="text-white hover:underline transition-colors">
                  IP CCTV Surveillance
                </Link>
              </li>
              <li>
                <Link href="/courses#embedded" className="text-white hover:underline transition-colors">
                  Embedded Systems & IoT
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:underline font-normal inline-block mt-0.5">
                  View All Tracks
                </Link>
              </li>
            </ul>
          </div>

          {/* IT & Digital Solutions */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              IT & Digital Solutions
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
                <Link href="/services#web" className="text-white hover:underline transition-colors">
                  Web & Mobile Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="text-white hover:underline transition-colors">
                  Data-Driven Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#iot" className="text-white hover:underline transition-colors">
                  Systems Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:underline font-normal inline-block mt-0.5">
                  View Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Navigation */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <li>
                <Link href="/about" className="text-white hover:underline transition-colors">
                  About Technotiq
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:underline transition-colors">
                  Training Academy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:underline transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:underline transition-colors">
                  Schedule Lab Visit
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
