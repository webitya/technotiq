import PageHeader from "../../components/layout/PageHeader";
import ConsultationCta from "../../components/home/ConsultationCta";
import Button from "../../components/ui/Button";
import { Cpu, Server, Code, Activity, ShieldCheck, CheckCircle, ArrowRight } from "../../components/icons";

export const metadata = {
  title: "Services | Turnkey Industrial Automation & Enterprise IT",
  description:
    "Explore Technotiq's engineering services: Turnkey PLC/SCADA Commissioning, BMS Automation, IP CCTV Security, Custom Software Development, AI Workflows & Digital Marketing.",
};

const PROTOCOLS = [
  { standard: "IEC 61131-3", scope: "PLC Programming (Ladder, FBD, Structured Text, Instruction List, SFC)", status: "Full Compliance" },
  { standard: "Modbus RTU / TCP", scope: "RS-485 serial communication, multi-drop sensor loops, energy meter polling", status: "Industrial Certified" },
  { standard: "BACnet IP & MSTP", scope: "ANSI/ASHRAE Standard 135 building automation controllers and HVAC chillers", status: "Field Verified" },
  { standard: "Profinet / OPC UA", scope: "Real-time industrial Ethernet, supervisory SCADA connectivity, and IoT gateways", status: "Deterministic" },
  { standard: "IEEE 802.3af/at (PoE)", scope: "IP CCTV infrastructure, optical fiber media converters, PTZ camera budgets", status: "Gigabit Certified" },
  { standard: "REST / MQTT / WebSockets", scope: "Enterprise cloud telemetry dashboards, real-time alert dispatch, and ERP APIs", status: "TLS Encrypted" },
];

const SERVICES = [
  {
    id: "automation",
    title: "Industrial Automation & Turnkey Commissioning",
    subtitle: "PLCs, HMIs, VFDs & SCADA Systems",
    icon: Cpu,
    color: "text-[#276CB9]",
    bgColor: "bg-blue-50",
    description:
      "We design, fabricate, program, and commission robust industrial automation systems for manufacturing plants, water treatment, utilities, and material handling facilities.",
    deliverables: [
      "Custom PLC logic development (Siemens S7-1200/1500, Allen-Bradley, Delta, Schneider)",
      "Intuitive HMI touch screens & multi-station SCADA supervisory monitoring",
      "Variable Frequency Drive (VFD) parameter tuning and closed-loop PID control",
      "Control panel drafting (GA/wiring drawings), fabrication, and FAT/SAT testing",
      "Legacy relay and obsolete PLC retrofitting with zero scheduled downtime",
    ],
  },
  {
    id: "bms",
    title: "Building Management Systems (BMS) & HVAC Controls",
    subtitle: "Energy Optimization & Facility Telemetry",
    icon: Activity,
    color: "text-[#6803F5]",
    bgColor: "bg-purple-50",
    description:
      "Intelligent control architectures for modern commercial complexes, hospitals, data centers, and corporate parks, lowering energy consumption while ensuring comfort.",
    deliverables: [
      "Central chiller plant automation with automated staging and sequencing",
      "Air Handling Unit (AHU), VAV box, and exhaust fan modulation",
      "BACnet IP, Modbus RTU, and M-Bus multi-protocol field integration",
      "Real-time energy sub-metering, peak-demand shaving, and automated alerts",
      "Environmental compliance logging (temperature, humidity, indoor air quality)",
    ],
  },
  {
    id: "cctv",
    title: "IP CCTV Surveillance & Access Control Infrastructure",
    subtitle: "High-Security Video & Perimeter Protection",
    icon: ShieldCheck,
    color: "text-[#27B2DD]",
    bgColor: "bg-cyan-50",
    description:
      "Turnkey physical security networks for industrial plants, logistics parks, educational campuses, and corporate facilities.",
    deliverables: [
      "IP camera network planning with optical fiber backbone ring topologies",
      "High-throughput Network Video Recorders (NVR) with RAID storage redundancy",
      "Smart video analytics (perimeter intrusion, line crossing, license plate reading)",
      "Biometric and RFID access control systems tied into corporate HRMS",
      "Surveillance command center console design and multi-screen wall setup",
    ],
  },
  {
    id: "software",
    title: "Custom Software Engineering & Cloud Platforms",
    subtitle: "Web Applications, APIs & Enterprise Portals",
    icon: Code,
    color: "text-[#0F172A]",
    bgColor: "bg-slate-100",
    description:
      "High-performance, secure digital software tailored specifically for manufacturing, logistics, and service businesses.",
    deliverables: [
      "Full-stack web applications built on Next.js, React, Node.js, and PostgreSQL",
      "Shop-floor IoT telemetry dashboards with real-time WebSocket updates",
      "Custom Enterprise Resource Planning (ERP) and Inventory Management tools",
      "Bi-directional API integrations between CRMs, ERPs, and internal legacy systems",
      "Responsive customer portals with role-based access control and bank-grade security",
    ],
  },
  {
    id: "ai",
    title: "AI Workflow Automation & Digital Growth",
    subtitle: "Autonomous Agents & Technical Digital Marketing",
    icon: Server,
    color: "text-[#6803F5]",
    bgColor: "bg-purple-50",
    description:
      "Automate manual back-office bottlenecks and drive consistent customer acquisition through data-driven digital channels.",
    deliverables: [
      "AI workflow pipelines that connect lead intake, quotation generation, and email follow-up",
      "Computer vision models for visual inspection and counting on production lines",
      "Technical B2B Search Engine Optimization (SEO) targeting high-intent commercial buyers",
      "Conversion Rate Optimization (CRO) and high-converting landing page engineering",
      "Multi-channel paid search and LinkedIn B2B acquisition funnels",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Technical Audit & Discovery",
    desc: "We analyze your electrical single-line diagrams (SLDs), mechanical process flows, or software requirements on-site or via structured consultation.",
  },
  {
    step: "02",
    title: "Architecture & Hardware BOM",
    desc: "Our engineers prepare detailed I/O lists, network topologies, Bill of Materials (BOM), and component specifications with no vendor lock-in.",
  },
  {
    step: "03",
    title: "Programming & Factory Testing (FAT)",
    desc: "We develop PLC ladder logic, SCADA tags, or software codebases and perform rigorous simulation and loop testing prior to shipping.",
  },
  {
    step: "04",
    title: "Site Commissioning & SAT",
    desc: "Our field engineers wire, power up, calibrate sensors, perform Site Acceptance Testing (SAT), and provide comprehensive operator training.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Engineering &"
        highlight="Digital Services"
        description="From shop-floor PLC commissioning and BMS facility telemetry to high-scale custom web platforms and AI workflows, Technotiq delivers precision."
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services List - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all font-normal"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="lg:max-w-md space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-2xl ${service.bgColor} ${service.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs font-mono text-[#6803F5] font-normal">
                      {service.subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="pt-1">
                      <Button href="/contact" variant="primary" size="sm">
                        <span>Request quotation</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>

                  <div className="lg:flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200">
                    <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-900 mb-3 pb-2 border-b border-slate-100">
                      Standard Deliverables & Capabilities
                    </h3>
                    <ul className="space-y-2.5 font-normal">
                      {service.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#27B2DD] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Protocols & Technical Standards Matrix - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Supported industrial communication standards & protocols.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
              We engineer zero vendor lock-in systems that integrate smoothly into your existing field architecture.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono text-slate-500">
                <tr>
                  <th className="px-5 py-3">Protocol / Standard</th>
                  <th className="px-5 py-3">Engineering Scope & Application</th>
                  <th className="px-5 py-3">Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PROTOCOLS.map((p, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/20 transition-colors">
                    <td className="px-5 py-3 font-mono text-slate-900">{p.standard}</td>
                    <td className="px-5 py-3 text-slate-600 font-normal">{p.scope}</td>
                    <td className="px-5 py-3 text-xs font-mono text-[#6803F5]">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engineering Delivery Process - Compact, No Heading Badge */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white border-t border-slate-800 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
              A structured lifecycle designed for zero operational surprises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm"
              >
                <span className="text-xl font-mono font-medium text-[#8B5CF6] block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-medium text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
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
