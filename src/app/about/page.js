import PageHeader from "../../components/layout/PageHeader";
import ConsultationCta from "../../components/home/ConsultationCta";
import Button from "../../components/ui/Button";
import { ArrowRight, MapPin } from "../../components/icons";

export const metadata = {
  title: "About Us | Technotiq Automation Private Limited",
  description:
    "Learn about Technotiq: Ranchi's leading industrial automation, technical training academy, and enterprise IT engineering company. Bridging physical hardware with modern software.",
};

const COMPARISONS = [
  {
    topic: "Practical Lab Exposure",
    academic: "Simulation software only on desktop PCs; zero physical contact with live relays or high-voltage circuits.",
    technotiq: "Over 80% lab time spent wiring live 24VDC panels, calibrating 4-20mA sensors, and downloading logic to physical PLCs.",
  },
  {
    topic: "Hardware Platforms",
    academic: "Single brand, often obsolete educational PLC trainer kits dating from 10+ years ago.",
    technotiq: "Current industrial industry standard controllers: Siemens S7-1200/1500, Allen-Bradley Micro850, and Schneider VFDs.",
  },
  {
    topic: "Troubleshooting Training",
    academic: "Clean pre-wired benches where systems rarely fail and errors are ignored.",
    technotiq: "Deliberate fault injection: blown fuses, loose terminal connections, ground noise, and inverted signal polarity debugging.",
  },
  {
    topic: "Instructors & Faculty",
    academic: "Academic lecturers with theoretical qualifications but limited on-site commissioning experience.",
    technotiq: "Active plant commissioning engineers who design, wire, and troubleshoot factory automation projects nationwide.",
  },
];

const LAB_MANIFEST = [
  { category: "Programmable Controllers", items: "Siemens S7-1200 (CPU 1214C), Allen-Bradley Micro850, Delta DVP-14SS2, Schneider TM221" },
  { category: "Supervisory SCADA Systems", items: "AVEVA Wonderware InTouch V2020, Siemens WinCC Unified, Inductive Automation Ignition" },
  { category: "Building Automation (BMS)", items: "Honeywell BACnet DDC Controllers, Schneider Belimo 0-10V Valve Actuators, Multi-function Energy Meters" },
  { category: "IP CCTV Infrastructure", items: "Hikvision 4K IP Bullet & Dome cameras, 32-channel NVR RAID-5, Cisco Gigabit PoE+ switches, SFP Fiber loops" },
  { category: "Test & Measurement", items: "100MHz 2-Channel Digital Storage Oscilloscopes (DSOs), USB 8-Channel Logic Analyzers, True-RMS Multimeters" },
  { category: "Embedded Microcontrollers", items: "STM32F401 Nucleo ARM Cortex-M4, ESP32 Dual-Core DevKitC, RS-485 Modbus shield modules" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About"
        highlight="Technotiq"
        description="Technotiq Automation Private Limited was founded to bridge the critical divide between theoretical education and real-world industrial systems engineering."
        breadcrumbs={[{ name: "About" }]}
      />

      {/* Origin Story & Vision - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
                Built by engineers who have spent thousands of hours on factory floors.
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Every year, thousands of students graduate with degrees in Electrical,
                  Electronics, Instrumentation, and Computer Science. Yet when they enter an
                  actual industrial facility, they encounter equipment they have never touched:
                  Siemens S7 PLCs, VFD motor drives, Modbus communication loops, and high-voltage
                  relay panels.
                </p>
                <p>
                  Technotiq Automation Private Limited was established in Ranchi,
                  Jharkhand, to fundamentally solve this problem. We built a physical laboratory
                  stocked with real industrial hardware, designed by senior commissioning engineers
                  who have delivered turnkey automation across manufacturing plants, utilities,
                  and commercial complexes.
                </p>
                <p>
                  Concurrently, our enterprise solutions division delivers custom software,
                  applied AI workflows, and digital marketing to technology-driven organizations
                  across India, creating a self-reinforcing ecosystem of industry practice and
                  hands-on education.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/courses" variant="primary" size="sm">
                  <span>Explore training programs</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
                <Button href="/contact" variant="secondary" size="sm">
                  <span>Contact our directors</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4 font-normal">
                <h3 className="text-base font-medium text-white tracking-tight border-b border-slate-800 pb-3">
                  Organization Credentials
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-normal">
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">
                      Entity Name
                    </span>
                    <span className="text-white font-normal text-sm">
                      Technotiq Automation Private Limited
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 block">
                      Core Verticals
                    </span>
                    <span>
                      Industrial Automation, Building Management Systems, IP CCTV, Custom Software,
                      AI Workflows, Technical Training.
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 block">
                      Location
                    </span>
                    <span className="flex items-center gap-1.5 text-white">
                      <MapPin className="w-3.5 h-3.5 text-[#27B2DD]" />
                      Ranchi, Jharkhand, India
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 block">
                      Direct Support
                    </span>
                    <div className="space-y-0.5 mt-0.5 font-mono text-xs">
                      <a href="tel:+916299916713" className="block text-[#27B2DD] hover:underline">
                        +91 6299 916713
                      </a>
                      <a href="mailto:technotiqautomation@gmail.com" className="block text-[#6803F5] hover:underline">
                        technotiqautomation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Comparison - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Why traditional college coaching fails to produce plant-ready engineers.
            </h2>
          </div>

          <div className="space-y-3">
            {COMPARISONS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 rounded-2xl bg-white border border-slate-200 overflow-hidden"
              >
                <div className="md:col-span-3 p-4 sm:p-5 bg-slate-50/70 border-b md:border-b-0 md:border-r border-slate-200 flex items-center">
                  <span className="text-xs sm:text-sm font-medium text-slate-900">{row.topic}</span>
                </div>
                <div className="md:col-span-4 p-4 sm:p-5 text-xs sm:text-sm text-slate-500 border-b md:border-b-0 md:border-r border-slate-200">
                  <span className="text-xs font-mono text-red-500 block mb-0.5">Standard Academic Program</span>
                  {row.academic}
                </div>
                <div className="md:col-span-5 p-4 sm:p-5 text-xs sm:text-sm text-slate-800 bg-purple-50/20">
                  <span className="text-xs font-mono text-[#6803F5] block mb-0.5">Technotiq Engineering Standard</span>
                  {row.technotiq}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Lab Equipment Manifest - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Hardware inventory installed in our Ranchi training lab.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
              We welcome prospective trainees and plant managers to inspect any of these active test benches during our open lab hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAB_MANIFEST.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-mono text-[#6803F5] block">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {item.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
