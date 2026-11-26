"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { CheckCircle, ArrowRight } from "../icons";

const WORKBENCHES = [
  {
    id: "plc",
    name: "Industrial PLC Racks",
    tagline: "Siemens S7-1200 / S7-1500 & Allen-Bradley Micro850",
    description:
      "Physical control panels where engineers wire 24VDC loops, test contactor interlocks, and download ladder logic to physical programmable logic controllers.",
    specs: [
      { label: "Controllers", value: "Siemens S7-1200 (CPU 1214C DC/DC/DC), Allen-Bradley Micro850, Delta DVP-14SS2" },
      { label: "Power & Protection", value: "Mean Well 24VDC 5A SMPS, Phoenix Contact terminal blocks, 2P/4P MCBs" },
      { label: "Sensors & Actuators", value: "Inductive proximity switches, photo-electric diffuse sensors, 4-20mA pressure transmitters" },
      { label: "Programming Suite", value: "Siemens TIA Portal V18, Connected Components Workbench (CCW), WPLSoft" },
    ],
    studentTakeaway:
      "Wire a complete motor forward-reverse starter with overload protection, write ladder logic with analog scaling, and verify on physical pilot lights and relays.",
  },
  {
    id: "scada",
    name: "SCADA & HMI Supervisory Suite",
    tagline: "Wonderware InTouch, Siemens WinCC & Ignition",
    description:
      "Dual-monitor supervisory workstations connected over industrial Ethernet to live PLC racks for real-time telemetry, tag animation, and database alarms.",
    specs: [
      { label: "Platforms", value: "AVEVA Wonderware InTouch, Siemens WinCC Professional, Inductive Automation Ignition" },
      { label: "Protocols", value: "Modbus TCP, Profinet, OPC UA Client/Server, Ethernet/IP" },
      { label: "Features Built", value: "Dynamic tank level animation, real-time trend graphs, historical alarm archiving, recipe management" },
      { label: "Hardware Displays", value: "Siemens KTP700 Basic HMI 7-inch touch panels, Delta DOP-100 series" },
    ],
    studentTakeaway:
      "Build a multi-page SCADA mimic diagram showing pump station status, configure high/low alarm triggers with audio alerts, and log analog values to SQL.",
  },
  {
    id: "bms",
    name: "BMS HVAC & Energy Testbed",
    tagline: "BACnet IP, Modbus RTU & Chiller Plant Automation",
    description:
      "Specialized infrastructure test bench simulating commercial building automation: air handlers, chillers, energy sub-metering, and temperature profiling.",
    specs: [
      { label: "Controllers", value: "Honeywell / Schneider Electric BACnet DDC Controllers, I/O Expansion Modules" },
      { label: "Field Devices", value: "Motorized 0-10V Belimo valve actuators, duct temperature/humidity transmitters, differential pressure switches" },
      { label: "Energy Meters", value: "Schneider multi-function meters over RS-485 Modbus RTU (voltage, current, power factor, kWh)" },
      { label: "Sequencing Logic", value: "Chiller lead-lag staging, cooling tower fan modulation, AHU enthalpy economizer control" },
    ],
    studentTakeaway:
      "Map BACnet points into supervisory software, establish Modbus communication to multi-function meters, and program automated weekend setback schedules.",
  },
  {
    id: "cctv",
    name: "IP CCTV & Optical Fiber Ring",
    tagline: "Hikvision 4K, Managed PoE+ & SFP Media Converters",
    description:
      "Complete physical security infrastructure workstation covering IP camera network topology, optical fiber backbones, and smart video analytics.",
    specs: [
      { label: "Camera Hardware", value: "Hikvision 4MP/4K IP Dome & Bullet cameras with WDR, PTZ camera with 25x optical zoom" },
      { label: "Network Gear", value: "Cisco / D-Link 8-Port Gigabit PoE+ switches, 1000Base-SX/LX SFP fiber transceivers" },
      { label: "Storage & NVR", value: "32-channel 4K NVR with RAID-5 array, bandwidth & storage retention calculation tools" },
      { label: "Smart Analytics", value: "Line crossing, perimeter intrusion detection, smart search, mobile remote streaming" },
    ],
    studentTakeaway:
      "Design an IP addressing scheme, calculate bitrates and storage for 30-day retention, configure PoE budgets, and calibrate optical fiber loss.",
  },
  {
    id: "embedded",
    name: "Embedded IoT & Microcontrollers",
    tagline: "STM32 ARM Cortex-M4, ESP32 & FreeRTOS",
    description:
      "Electronics design desk with test and measurement instruments for bare-metal firmware engineering and industrial IoT gateway development.",
    specs: [
      { label: "Development Boards", value: "STM32F401RE Nucleo-64 (ARM Cortex-M4 with FPU), ESP32-WROOM-32D Dual-Core" },
      { label: "Instruments", value: "100MHz 2-Channel Digital Storage Oscilloscopes (DSO), 8-Channel USB Logic Analyzers, Multimeters" },
      { label: "Protocols & Buses", value: "UART, I2C, SPI, CAN bus transceivers, RS-485 driver ICs (MAX485)" },
      { label: "Cloud Telemetry", value: "FreeRTOS task scheduling, MQTT pub/sub over Wi-Fi/LTE to cloud time-series databases" },
    ],
    studentTakeaway:
      "Write register-level C code to read analog temperature sensors, stream packets over MQTT to a live web dashboard, and inspect SPI bus waveforms on a DSO.",
  },
  {
    id: "ai",
    name: "Applied Edge AI & Inspection Rig",
    tagline: "Computer Vision & Predictive Maintenance",
    description:
      "Automated inspection testing station with high-resolution USB industrial cameras, running real-time defect detection models and vibration anomaly analytics.",
    specs: [
      { label: "Vision Setup", value: "High-frame-rate industrial camera rig with adjustable ring LED lighting and polarized filters" },
      { label: "AI Frameworks", value: "Python, OpenCV 4.x, PyTorch, TensorFlow Lite for Microcontrollers (TFLite)" },
      { label: "Target Models", value: "Surface scratch/flaw classification, barcode/QR reading, parts counting, conveyor anomaly detection" },
      { label: "Vibration Sensing", value: "Tri-axial MEMS accelerometers capturing vibration signatures for bearing fault identification" },
    ],
    studentTakeaway:
      "Train a computer vision model to detect defective parts passing on a conveyor in real-time, sending trigger pulses directly to a PLC rejection cylinder.",
  },
];

export default function InteractiveWorkbench() {
  const [activeTab, setActiveTab] = useState(0);
  const bench = WORKBENCHES[activeTab];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
            Interactive Hardware Workbench Explorer
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Select a station below to inspect the authentic industrial equipment, controllers,
            and wiring panels installed in our Ranchi training facility:
          </p>
        </div>

        {/* Tab Selector Buttons - Clean Names, No Numbers */}
        <div className="flex flex-wrap gap-1.5 mb-6 p-1 rounded-2xl bg-slate-50 border border-slate-200/80">
          {WORKBENCHES.map((item, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer font-normal text-left ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Active Workbench Detail Console */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-mono text-[#6803F5] block">
                {bench.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-slate-900">
                {bench.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {bench.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm">
                <span>Book hands-on lab slot</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 font-normal">
            {bench.specs.map((spec, specIdx) => (
              <div
                key={specIdx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1"
              >
                <span className="text-xs font-mono text-slate-400 block">
                  {spec.label}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          {/* Practical Capstone */}
          <div className="mt-4 p-4 rounded-xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#6803F5] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              <span className="text-[#6803F5] font-medium">Hands-On Practical Competency: </span>
              {bench.studentTakeaway}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
