import PageHeader from "../../components/layout/PageHeader";
import ConsultationCta from "../../components/home/ConsultationCta";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "../../components/icons";

export const metadata = {
  title: "Courses & Training | Industrial Automation, PLC, SCADA, BMS, Embedded, AI",
  description:
    "Master Industrial Automation, PLC, SCADA, BMS, CCTV, Embedded Systems, and AI through 100% hands-on hardware training and placement assistance at Technotiq.",
};

const COURSES = [
  {
    id: "plc",
    title: "Master Industrial Automation (PLC, SCADA & HMI)",
    duration: "12 Weeks (Full-Time or Weekend)",
    hardware: "Siemens S7-1200 / S7-1500, Allen-Bradley Micro850, Delta DVP",
    scada: "Wonderware InTouch, Siemens WinCC, Ignition",
    overview:
      "The definitive industrial engineering certification. Progress from electrical relay panels and 24VDC wiring to multi-station SCADA tag synchronization and live VFD speed control.",
    modules: [
      "Relay Logic, Contactors, NO/NC Contacts, SMPS & Sensor Wiring",
      "IEC 61131-3 Programming: Ladder Logic, Function Blocks, Structured Text",
      "Siemens TIA Portal & Allen-Bradley Connected Components Workbench",
      "Analog Scaling (4-20mA, 0-10V) for Level, Temperature & Pressure Transmitters",
      "SCADA Mimic Design, Dynamic Animation, Historical Alarms & Trend Graphs",
      "VFD Parameterization (Schneider Altivar / Delta) & Modbus Communication",
    ],
    capstone: "Conveyor batching & sorting line with analog load cells and SCADA supervisory control.",
  },
  {
    id: "bms",
    title: "Building Management Systems (BMS) & HVAC Automation",
    duration: "8 Weeks",
    hardware: "Honeywell / Schneider BACnet DDC Controllers, Multi-Function Power Meters",
    scada: "Commercial Building Management Interfaces & Dashboards",
    overview:
      "Become a specialized BMS commissioning engineer for commercial towers, airports, IT parks, and healthcare campuses managing automated heating, ventilation, and energy.",
    modules: [
      "Fundamentals of HVAC: Chillers, Cooling Towers, Pumps & Primary/Secondary Loops",
      "Air Handling Units (AHUs), Variable Air Volume (VAV) & Fire Damper Interlocks",
      "Direct Digital Controller (DDC) Architecture & Hardware Point Scheduling",
      "Field Protocols: BACnet IP, BACnet MSTP, Modbus RTU & M-Bus",
      "Energy Meter Profiling, Peak Load Shaving & Automated Compliance Alarming",
      "BMS Graphics Development, Time-of-Day Scheduling & Centralized Trending",
    ],
    capstone: "Full 4-story commercial building HVAC and energy monitoring simulation on live DDC.",
  },
  {
    id: "cctv",
    title: "IP CCTV Surveillance, Optical Fiber & Security Systems",
    duration: "6 Weeks",
    hardware: "Hikvision / Dahua IP Dome & Bullet Cameras, PTZ Rigs, NVRs, SFP Switches",
    scada: "Central Surveillance Monitoring & Video Management Software (VMS)",
    overview:
      "Master the physical and digital infrastructure of mission-critical surveillance, perimeter monitoring, access control, and optical fiber loop network design.",
    modules: [
      "Camera Optics, Lux Levels, Lens Sizing, WDR & Focal Length Calculations",
      "IP Networking: Subnetting, Static vs DHCP IP schemes, RTSP Streams & PoE+",
      "Optical Fiber Splicing, OTDR Testing, Media Converters & Industrial SFP Switches",
      "Network Video Recorder (NVR) Configuration, RAID Calculations & Bandwidth Planning",
      "Smart Video Analytics: Tripwire, Intrusion Detection & Face Recognition Setup",
      "Biometric Access Control Systems & Fire Alarm System Integration",
    ],
    capstone: "Industrial plant perimeter security network architecture design and live multi-camera deployment.",
  },
  {
    id: "embedded",
    title: "Embedded Systems, Firmware & Industrial IoT",
    duration: "10 Weeks",
    hardware: "STM32 ARM Cortex-M4 (Nucleo), ESP32 Dual-Core, Logic Analyzers",
    scada: "MQTT Brokers, InfluxDB & Grafana Cloud Telemetry",
    overview:
      "Bridge hardware electronics with cloud software. Write bare-metal firmware, master real-time multithreading, and broadcast telemetry over wireless IoT protocols.",
    modules: [
      "Embedded C Programming, Memory Registers & Bare-Metal Architecture",
      "Microcontroller Peripherals: GPIO, ADC, PWM, Timers, Interrupt Service Routines",
      "Serial Communication Protocols: UART, I2C, SPI Bus Analysis with Oscilloscopes",
      "FreeRTOS: Tasks, Queues, Semaphores & Real-Time Multithreading",
      "Wireless IoT Protocols: Wi-Fi, BLE, LoRaWAN & MQTT Broker Integration",
      "Industrial Edge Gateway Development for Factory Sensor Monitoring",
    ],
    capstone: "Custom industrial IoT data logger streaming analog vibration & temperature over MQTT to a live cloud portal.",
  },
  {
    id: "ai",
    title: "Applied AI, Edge Machine Learning & Computer Vision",
    duration: "8 Weeks",
    hardware: "Edge Micro-NPU Hardware, USB HD Industrial Inspection Cameras",
    scada: "Python, OpenCV, TensorFlow Lite, FastAPI",
    overview:
      "Apply machine learning to physical operations. Learn how to deploy computer vision models for automated defect inspection, vibration anomaly detection, and predictive maintenance.",
    modules: [
      "Python for Data Science, NumPy, Pandas & Industrial Signal Processing",
      "OpenCV Computer Vision: Image Filtering, Edge Detection & Object Counting",
      "Convolutional Neural Networks (CNNs) for Defect & Surface Flaw Classification",
      "TensorFlow Lite & Model Optimization for Resource-Constrained Edge Devices",
      "Vibration Analysis & Machine Audio Anomaly Detection Models",
      "Production Deployment with FastAPI, Docker & Edge Inference Hardware",
    ],
    capstone: "Automated vision-based parts inspection camera rig detecting surface scratches in real time.",
  },
  {
    id: "software",
    title: "Enterprise Web Engineering & Cloud Systems",
    duration: "12 Weeks",
    hardware: "High-Performance Developer Stations & Cloud Staging Environments",
    scada: "Next.js, React, Node.js, PostgreSQL, Docker, Redis",
    overview:
      "Become an industry-ready full-stack software engineer capable of building high-reliability enterprise platforms, SaaS tools, and IoT web portals.",
    modules: [
      "Modern TypeScript & JavaScript Architecture (ESNext, Asynchronous Patterns)",
      "Next.js App Router, Server Components & High-Conversion UI Design",
      "RESTful & GraphQL API Architecture with Node.js & Express",
      "Relational Database Design, PostgreSQL, Prisma ORM & Database Indexing",
      "Authentication (JWT/OAuth), Role-Based Access Control & Security Auditing",
      "CI/CD Pipelines, Docker Containerization & Cloud Deployment on Vercel/AWS",
    ],
    capstone: "Full-stack enterprise equipment telemetry and maintenance management SaaS platform.",
  },
];

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="Technical Training"
        highlight="Academy"
        description="Transform technical curiosity into industrial mastery. 6 specialized tracks featuring 100% physical hardware lab time, real capstone projects, and placement assistance."
        breadcrumbs={[{ name: "Courses" }]}
      />

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              id={course.id}
              className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-purple-200 transition-all font-normal"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="lg:max-w-md space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-medium text-[#6803F5] uppercase tracking-wider">
                      Track 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">•</span>
                    <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-normal">
                      <Clock className="w-3.5 h-3.5 text-[#27B2DD]" />
                      {course.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                    {course.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {course.overview}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs font-normal">
                    <div>
                      <span className="text-slate-500 block">Hardware Rigs:</span>
                      <span className="text-slate-800 font-normal">{course.hardware}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Software & Platforms:</span>
                      <span className="text-slate-800 font-normal">{course.scada}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button href="/contact" variant="primary" size="sm">
                      <span>Enroll in upcoming batch</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="lg:flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100">
                      Curriculum Syllabus Modules
                    </h3>
                    <ul className="space-y-3 font-normal">
                      {course.modules.map((mod, modIdx) => (
                        <li key={modIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#6803F5] shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-slate-800 font-normal">
                    <span className="font-medium text-[#6803F5] block mb-1">
                      Capstone Project:
                    </span>
                    <p>{course.capstone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placement & Lab Methodology */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-normal tracking-wider text-[#27B2DD] uppercase mb-3">
              The Technotiq Advantage
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight">
              How we turn college graduates into field-ready commissioning engineers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-mono text-[#8B5CF6] block mb-2 font-medium">
                PHASE 01
              </span>
              <h3 className="text-lg font-medium text-white mb-2">Electrical & Hardware Baseline</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Hands-on safety protocol, reading electrical schematics, multimeter debugging,
                relay logic, and sensor wire terminations before writing a single line of code.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-mono text-[#27B2DD] block mb-2 font-medium">
                PHASE 02
              </span>
              <h3 className="text-lg font-medium text-white mb-2">Controllers & Supervisory SCADA</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Writing ladder logic, creating tags, configuring alarms, tuning VFDs, and
                connecting multi-node networks over Modbus and Industrial Ethernet.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-mono text-[#60A5FA] block mb-2 font-medium">
                PHASE 03
              </span>
              <h3 className="text-lg font-medium text-white mb-2">Capstone Rig & Placement Drives</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Independently wiring, programming, and debugging a complete automated system,
                followed by technical mock interviews and direct plant referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
