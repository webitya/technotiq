import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 sm:pt-14 sm:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-11 w-44 bg-white/5 rounded-lg p-1.5 backdrop-blur-sm border border-white/10">
              <Image
                src="/technotiq-logo.webp"
                alt="Technotiq"
                fill
                className="object-contain object-left px-2"
                sizes="176px"
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Technotiq Automation Private Limited bridges real-world industrial hardware
              engineering with cutting-edge software, cloud systems, and applied AI. We build
              mission-critical automation and mentor the next generation of engineers.
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-300 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#27B2DD] shrink-0 mt-0.5" />
                <span>Ranchi, Jharkhand, India — Serving industrial & enterprise clients nationwide</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#27B2DD] shrink-0" />
                <a href="tel:+916299916713" className="hover:text-white transition-colors">
                  +91 6299 916713
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6803F5] shrink-0" />
                <a href="mailto:technotiqautomation@gmail.com" className="hover:text-white transition-colors">
                  technotiqautomation@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Industrial Automation & Core Tech */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4">
              Industrial Automation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <Link href="/courses#plc" className="hover:text-white transition-colors">
                  PLC Programming & Commissioning
                </Link>
              </li>
              <li>
                <Link href="/courses#scada" className="hover:text-white transition-colors">
                  SCADA & HMI Design
                </Link>
              </li>
              <li>
                <Link href="/courses#bms" className="hover:text-white transition-colors">
                  BMS & Building Automation
                </Link>
              </li>
              <li>
                <Link href="/courses#cctv" className="hover:text-white transition-colors">
                  IP CCTV & Security Surveillance
                </Link>
              </li>
              <li>
                <Link href="/courses#embedded" className="hover:text-white transition-colors">
                  Embedded Systems & IoT Gateways
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-[#27B2DD] hover:underline font-normal inline-flex items-center gap-1 mt-1">
                  Browse All 6 Training Tracks <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT & Enterprise Services */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4">
              IT & Digital Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <Link href="/services#software" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-white transition-colors">
                  AI Workflow & Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-white transition-colors">
                  Web & Mobile Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-white transition-colors">
                  Data-Driven Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#iot" className="hover:text-white transition-colors">
                  Industrial Systems Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#6803F5] hover:underline font-normal inline-flex items-center gap-1 mt-1">
                  View Engineering Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Accreditations */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4">
              Company & Learning
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Technotiq
                </Link>
              </li>
              <li>
                <Link href="/about#methodology" className="hover:text-white transition-colors">
                  Hardware Lab Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/courses#placements" className="hover:text-white transition-colors">
                  Placement Support & Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Lab Visit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Corporate Training Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits - Only Technotiq */}
        <div className="pt-6 flex items-center justify-center text-xs text-slate-500 font-normal">
          <p>Technotiq</p>
        </div>
      </div>
    </footer>
  );
}
