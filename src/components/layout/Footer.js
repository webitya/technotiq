import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#24064C] to-[#15022E] text-white pt-10 pb-6 sm:pt-12 sm:pb-6 border-t border-[#3E1077]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-8 border-b border-purple-900/50">
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

            <p className="text-purple-200/80 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Technotiq Automation Private Limited bridges real-world industrial hardware
              engineering with cutting-edge software, cloud systems, and applied AI.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-purple-200/90 font-normal">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span>Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href="tel:+916299916713" className="hover:text-white transition-colors">
                  +91 6299 916713
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                <a href="mailto:technotiqautomation@gmail.com" className="hover:text-white transition-colors">
                  technotiqautomation@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Industrial Automation */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Industrial Automation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/70 font-normal">
              <li>
                <Link href="/courses#plc" className="hover:text-white transition-colors">
                  PLC Programming
                </Link>
              </li>
              <li>
                <Link href="/courses#scada" className="hover:text-white transition-colors">
                  SCADA & HMI Systems
                </Link>
              </li>
              <li>
                <Link href="/courses#bms" className="hover:text-white transition-colors">
                  BMS & Building Controls
                </Link>
              </li>
              <li>
                <Link href="/courses#cctv" className="hover:text-white transition-colors">
                  IP CCTV Surveillance
                </Link>
              </li>
              <li>
                <Link href="/courses#embedded" className="hover:text-white transition-colors">
                  Embedded Systems & IoT
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-[#38BDF8] hover:underline font-normal inline-flex items-center gap-1 mt-0.5">
                  View All Tracks <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT & Digital Solutions */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              IT & Digital Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/70 font-normal">
              <li>
                <Link href="/services#software" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-white transition-colors">
                  AI Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-white transition-colors">
                  Web & Mobile Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-white transition-colors">
                  Data-Driven Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#iot" className="hover:text-white transition-colors">
                  Systems Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#C084FC] hover:underline font-normal inline-flex items-center gap-1 mt-0.5">
                  View Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Navigation */}
          <div>
            <h4 className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-purple-200/70 font-normal">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Technotiq
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Training Academy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Lab Visit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Credit - Only Technotiq */}
        <div className="pt-5 flex items-center justify-center text-xs text-purple-300/70 font-normal">
          <p>Technotiq</p>
        </div>
      </div>
    </footer>
  );
}
