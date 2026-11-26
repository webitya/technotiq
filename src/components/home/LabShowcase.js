import Link from "next/link";
import Button from "../ui/Button";
import { CheckCircle, ArrowRight } from "../icons";

export default function LabShowcase() {
  const workbenches = [
    {
      title: "Siemens & Allen-Bradley PLC Rigs",
      specs: "Hardware Workbench 01",
      description:
        "Equipped with authentic Siemens S7-1200 (CPU 1214C DC/DC/DC), Allen-Bradley Micro850, 24VDC SMPS, real relay logic boards, pushbuttons, and proximity inductive sensors.",
      outcomes: "Ladder Logic, Function Block Diagrams (FBD), Structured Text, analog scaling.",
    },
    {
      title: "SCADA & Industrial HMI Station",
      specs: "Supervisory Control Workbench 02",
      description:
        "Multi-monitor stations running licensed Wonderware InTouch, Siemens WinCC, and Ignition. Real-time tag communication over Modbus TCP and OPC UA.",
      outcomes: "Dynamic graphic animation, historical alarming, database trend logging.",
    },
    {
      title: "BMS HVAC & Energy Metering Station",
      specs: "Infrastructure Workbench 03",
      description:
        "Dedicated BMS panel featuring Honeywell / Schneider BACnet controllers, multi-function energy meters, temperature/humidity transmitters, and motorized valve actuators.",
      outcomes: "Air Handling Unit (AHU) automation, chiller sequencing, energy optimization.",
    },
    {
      title: "Embedded Microcontrollers & Edge AI",
      specs: "Hardware Workbench 04",
      description:
        "Soldering workstations, digital storage oscilloscopes (DSOs), logic analyzers, STM32 Nucleo boards, ESP32 boards, and edge computer vision cameras.",
      outcomes: "Bare-metal C/C++, FreeRTOS, MQTT sensor streaming, edge model deployment.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Learn on physical industrial hardware, not just simulator software.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Industrial plants do not run on theoretical PowerPoint slides. At Technotiq,
              every trainee wires physical contactors, programs authentic PLCs, troubleshoots
              multimeter faults, and connects live HMI graphics to actual machines.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/contact" variant="secondary" size="sm">
              <span>Book an in-person lab tour</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workbenches.map((bench, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-200 hover:bg-purple-50/20 transition-all font-normal"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-normal text-[#6803F5]">
                  {bench.specs}
                </span>
                <span className="text-xs text-slate-400 font-mono font-normal">Real Equipment</span>
              </div>

              <h3 className="text-lg font-medium text-slate-900 mb-2">{bench.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                {bench.description}
              </p>

              <div className="pt-3 border-t border-slate-200/70 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#27B2DD] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800 font-normal">
                  <span className="text-slate-500">Key Competency: </span>
                  {bench.outcomes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
