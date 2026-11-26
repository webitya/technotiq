import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "../icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-12 w-48 bg-white/5 rounded-lg p-1.5 backdrop-blur-sm border border-white/10">
              <Image
                src="/technotiq-logo.webp"
                alt="Technotiq Automation Private Limited"
                fill
                className="object-contain object-left px-2"
                sizes="192px"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Technotiq Automation Private Limited bridges real-world industrial hardware
              engineering with cutting-edge software, cloud systems, and applied AI. We build
              mission-critical automation and mentor the next generation of engineers.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300 font-normal">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#27B2DD] shrink-0 mt-0.5" />
                <span>Ranchi, Jharkhand, India — Serving industrial & enterprise clients nationwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#27B2DD] shrink-0" />
                <a href="tel:+916299916713" className="hover:text-white transition-colors">
                  +91 6299 916713
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6803F5] shrink-0" />
                <a href="mailto:technotiqautomation@gmail.com" className="hover:text-white transition-colors">
                  technotiqautomation@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Industrial Automation & Core Tech */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-5">
              Industrial Automation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-normal">
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
            <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-5">
              IT & Digital Solutions
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-normal">
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
            <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-5">
              Company & Learning
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-normal">
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

        {/* Bottom Credits & Taglines */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-normal">
          <div>
            <p className="text-slate-400">
              Building Skills. Delivering Solutions. Shaping the Future.
            </p>
            <p className="mt-1">
              &copy; {currentYear} Technotiq Automation Private Limited. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <span>ISO Compliant Industrial Training</span>
            <span>•</span>
            <span>CIN / Reg. Entity</span>
            <span>•</span>
            <span>technotiq.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
