import Link from "next/link";
import { Cpu, Server, Code, Activity, ArrowRight } from "../icons";

export default function ValueMatrix() {
  const pillars = [
    {
      title: "Physical Layer & Industrial Automation",
      subtitle: "Hardware, Protocols & Controllers",
      icon: Cpu,
      color: "text-[#276CB9]",
      bgColor: "bg-blue-50",
      description:
        "Field-proven commissioning of programmable logic controllers (PLCs), human-machine interfaces (HMIs), supervisory systems (SCADA), and Building Management Systems (BMS). Direct wiring, loop testing, and fail-safe safety interlocks.",
      items: [
        "Siemens S7-1200 / S7-1500 & Allen-Bradley ControlLogix",
        "Modbus RTU/TCP, BACnet IP, Profinet & OPC UA",
        "VFD drive integration, servo controls & 4-20mA sensor loops",
        "HVAC central plant automation & energy metering",
      ],
      link: "/courses#plc",
    },
    {
      title: "Enterprise Software & Cloud Platforms",
      subtitle: "Full-Stack Web, Mobile & APIs",
      icon: Code,
      color: "text-[#6803F5]",
      bgColor: "bg-purple-50",
      description:
        "High-performance custom software, responsive customer-facing web applications, client portals, and back-office management tools that scale gracefully with business growth.",
      items: [
        "Modern React, Next.js, and high-concurrency Node.js APIs",
        "Cloud database architectures (PostgreSQL, Redis, Vector stores)",
        "Enterprise ERP, CRM, and inventory synchronization",
        "Mobile-first responsive architecture with enterprise security",
      ],
      link: "/services#software",
    },
    {
      title: "Embedded Systems & Edge Computing",
      subtitle: "Firmware, Sensors & IoT Gateways",
      icon: Server,
      color: "text-[#27B2DD]",
      bgColor: "bg-cyan-50",
      description:
        "Custom firmware engineering on 32-bit microcontrollers, sensor telemetry acquisition, edge processing, and industrial IoT gateways reporting securely over MQTT and cellular networks.",
      items: [
        "STM32 ARM Cortex-M and ESP32 dual-core architectures",
        "RTOS multithreading, I2C/SPI/UART peripheral interfacing",
        "Industrial IoT gateways with cellular LTE / LoRaWAN fallbacks",
        "Hardware-level telemetry capture and custom PCB prototypes",
      ],
      link: "/courses#embedded",
    },
    {
      title: "AI Workflows & Data Orchestration",
      subtitle: "Intelligent Automation & Growth",
      icon: Activity,
      color: "text-[#1E293B]",
      bgColor: "bg-slate-100",
      description:
        "Connecting disparate business tools, automating repetitive administrative operations, deploying conversational internal AI agents, and powering organic search growth through technical digital marketing.",
      items: [
        "Autonomous multi-step business workflow automations",
        "Computer vision defect inspection on industrial lines",
        "Technical SEO, conversion rate optimization & paid acquisition",
        "Predictive maintenance models for vibration and thermal data",
      ],
      link: "/services#ai",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
            Where physical machines meet modern cloud software.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Most organizations separate industrial controls from enterprise IT. Technotiq
            bridges both worlds: we speak ladder logic as fluently as TypeScript, connecting
            shop-floor sensors directly to executive analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-2.5 rounded-2xl ${pillar.bgColor} ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">{pillar.title}</h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 font-normal">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 font-normal">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6803F5] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center text-xs sm:text-sm font-normal text-[#6803F5] hover:text-[#5502C7] transition-colors"
                  >
                    <span>View track details and project examples</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
