import Link from "next/link";
import { ArrowRight, CheckCircle } from "../icons";

const STORIES = [
  {
    category: "Industrial Commissioning",
    client: "Continuous Wire & Tube Rolling Mill",
    location: "Jharkhand Industrial Zone",
    headline: "Legacy Relay Panel Replacement with Siemens S7-1500 & Multi-VFD Synchronization",
    impact: "78% reduction in motor trip events & seamless 50ms line synchronization",
    description:
      "The client suffered chronic motor trip shutdowns caused by mechanical contactor delays. Technotiq engineered, fabricated, and commissioned a custom dual-door control panel incorporating Siemens S7-1500, Profinet communication, and closed-loop speed regulation across 6 drawing stands.",
  },
  {
    category: "Commercial Infrastructure",
    client: "Healthcare & Multi-Specialty Hospital Complex",
    location: "Ranchi, Jharkhand",
    headline: "Central Chiller Plant BACnet IP Optimization & Operating Room Pressure Loops",
    impact: "18.4% energy reduction on cooling and continuous differential pressure compliance",
    description:
      "Installed Honeywell DDC controllers across 3 water-cooled centrifugal chillers, 14 AHUs, and critical isolation wards. Integrated BACnet IP with a central graphics workstation to automate primary-secondary pumping loops and ensure positive pressure in surgical suites.",
  },
  {
    category: "Physical Security",
    client: "Mining Equipment Yard & Logistics Terminal",
    location: "Dhanbad Industrial Corridor",
    headline: "Redundant Optical Fiber IP CCTV Ring with Smart Perimeter Intrusion Analytics",
    impact: "100% perimeter coverage with zero fiber loop single-point failure",
    description:
      "Engineered an industrial ring network featuring SFP media converters, 48 Hikvision 4K IP bullet and PTZ cameras, and automated tripwire alarms notifying the security desk within 500ms of any fence-line boundary crossing.",
  },
];

export default function RealCaseStudies() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Real engineering delivered to real industrial plants.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our training faculty are active commissioning engineers. The very problems we
              solve on factory floors become the practical troubleshooting exercises in our
              classroom laboratories.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center text-xs sm:text-sm font-normal text-[#6803F5] hover:text-[#5502C7] transition-colors"
            >
              <span>Explore full service case studies</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STORIES.map((story, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2.5 border-b border-slate-100">
                  <span className="text-[#6803F5]">{story.category}</span>
                  <span>{story.location}</span>
                </div>

                <span className="text-xs text-slate-400 block font-normal">{story.client}</span>

                <h3 className="text-base sm:text-lg font-medium text-slate-900 leading-snug">
                  {story.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {story.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#27B2DD] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800 font-normal">
                  <span className="text-slate-500">Documented Impact: </span>
                  {story.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
