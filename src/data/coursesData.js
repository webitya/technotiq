export const COURSE_CATEGORIES = [
  {
    id: "industrial-automation",
    name: "Industrial Automation",
    slug: "industrial-automation",
    tagline: "PLCs, SCADA, HMIs, VFDs & Electrical Panel Designing",
    description:
      "Comprehensive plant automation and electrical control systems engineering. Master 24VDC wiring, Siemens & Allen-Bradley PLC programming, SCADA supervisory mimics, and turn-key panel fabrication on authentic hardware test benches.",
  },
  {
    id: "building-management-system",
    name: "Building Management System",
    slug: "building-management-system",
    tagline: "BMS, HVAC Chillers, DDC Controllers & IP CCTV Infrastructure",
    description:
      "Commercial building automation, environmental control, and mission-critical physical security. Progress from Honeywell & Schneider BACnet DDC commissioning to optical fiber IP CCTV surveillance network architectures.",
  },
];

export const ALL_COURSES = [
  // --- Category: Industrial Automation ---
  {
    id: "automation-system-engineer",
    slug: "automation-system-engineer",
    title: "Automation System Engineer",
    category: "industrial-automation",
    categoryName: "Industrial Automation",
    duration: "12 Weeks (Full-Time or Weekend)",
    level: "Comprehensive Core",
    hardware: "Siemens S7-1200 (CPU 1214C), Siemens KTP700 Basic HMI, Schneider ATV310 VFD, 24VDC Relay Panels",
    software: "Siemens TIA Portal V18, WinCC Basic, Modbus Poll, AutoCAD Electrical",
    overview:
      "The definitive plant automation engineering qualification. Progress from electrical single-line diagrams and 24VDC control circuits to multi-station SCADA tag synchronization and closed-loop VFD motor speed control.",
    highlights: [
      "Siemens S7-1200 PLC Hardware Configuration & Ladder Logic",
      "Analog Signal Scaling (4-20mA, 0-10V) for Level, Temperature & Pressure Transmitters",
      "Siemens KTP700 HMI Screen Development, Alarming & Dynamic Animations",
      "Schneider Altivar VFD Drive Parameterization over RS-485 Modbus RTU",
    ],
    modules: [
      {
        title: "Module 1: Industrial Electrical Fundamentals & Safety Circuits",
        topics: [
          "Single-line diagrams (SLD) and industrial control drawing conventions",
          "24VDC power supply sizing, Mean Well SMPS selection and fusing",
          "Push buttons, selectors, NO/NC auxiliary contacts and contactor wiring",
          "Emergency stop safety relays, category 3 safety interlocks and circuit isolation",
        ],
      },
      {
        title: "Module 2: Siemens S7-1200 Architecture & TIA Portal V18",
        topics: [
          "CPU 1214C hardware architecture, sink/source digital I/O wiring",
          "Memory areas: Process Image Inputs/Outputs, Bit Memory, Data Blocks (DB)",
          "Timers (TON, TOF, TP), Counters (CTU, CTD) and edge detection instructions",
          "Function Calls (FC) vs. Function Blocks (FB) with instance data blocks",
        ],
      },
      {
        title: "Module 3: Analog Instrumentation & Closed-Loop Processing",
        topics: [
          "2-wire vs. 4-wire transmitters: 4-20mA current loops and 0-10V voltage signals",
          "Analog input scaling with NORM_X and SCALE_X instructions in TIA Portal",
          "Temperature monitoring with RTD (PT100) and Thermocouple signal conditioners",
          "High/Low process threshold alarming and sensor fault detection",
        ],
      },
      {
        title: "Module 4: HMI Touch Panel Interface Design (Siemens KTP700)",
        topics: [
          "Screen hierarchy navigation, master template design and header status bars",
          "Dynamic object animation: color changes, visibility toggles, bar graph displays",
          "Discrete and analog alarm configuration with acknowledgment buffers",
          "User administration, password-protected maintenance screens and recipe management",
        ],
      },
      {
        title: "Module 5: Variable Frequency Drives (VFD) & Modbus Communication",
        topics: [
          "AC induction motor principles, V/Hz control and acceleration/deceleration ramps",
          "Schneider Altivar 310 / Delta VFD parameterization for 2-wire / 3-wire control",
          "Modbus RTU RS-485 serial communication: Master-Slave querying and baud rate matching",
          "Reading motor frequency, current, and writing speed setpoints via PLC communication",
        ],
      },
      {
        title: "Module 6: Capstone Project & Plant Commissioning Protocols",
        topics: [
          "Full factory acceptance testing (FAT) procedures and point-to-point loop checks",
          "Conveyor batching and sorting capstone project execution on physical hardware",
          "Troubleshooting deliberate hardware faults: open circuits, grounded terminals, sensor offset",
          "Documentation: GA drawings, I/O assignment lists, and operator manual handover",
        ],
      },
    ],
    capstone:
      "Automated 3-station material sorting conveyor line with analog weight load cell measurement, VFD speed regulation, and Siemens HMI supervisory operator control.",
  },
  {
    id: "advanced-automation-system-professional",
    slug: "advanced-automation-system-professional",
    title: "Advanced Automation System Professional",
    category: "industrial-automation",
    categoryName: "Industrial Automation",
    duration: "16 Weeks (Intensive Master Track)",
    level: "Advanced Professional",
    hardware: "Siemens S7-1500 CPU 1511, Allen-Bradley Micro850, ET200SP Distributed I/O, Moxa Managed Switches",
    software: "TIA Portal V18 Advanced, Rockwell CCW, AVEVA InTouch, Inductive Automation Ignition, Kepware OPC",
    overview:
      "Master-level multi-vendor industrial automation. Designed for engineers seeking senior commissioning roles across manufacturing, continuous process plants, steel mills, and critical utilities.",
    highlights: [
      "Siemens S7-1500 & Allen-Bradley Multi-Vendor Programming",
      "Profinet Industrial Ethernet & Distributed I/O ET200SP Topologies",
      "Next-Gen SCADA (Inductive Automation Ignition & Wonderware InTouch)",
      "Closed-Loop PID Control for Continuous Pressure & Temperature Regulation",
    ],
    modules: [
      {
        title: "Module 1: Siemens S7-1500 Advanced Architecture & Motion Control",
        topics: [
          "High-performance S7-1500 CPU features, work memory management and cycle times",
          "Distributed I/O configuration over Profinet using ET200SP racks",
          "Structured Text (ST / SCL) programming for complex algorithmic calculations",
          "Technology Objects (TO): PTO pulse train output and basic axis position control",
        ],
      },
      {
        title: "Module 2: Rockwell Allen-Bradley Architecture",
        topics: [
          "Allen-Bradley Micro850 hardware and Connected Components Workbench (CCW)",
          "Tag-based memory architecture vs. traditional register addressing",
          "User-Defined Function Blocks (UDFB) and modular code reusability",
          "EtherNet/IP communication and messaging instructions",
        ],
      },
      {
        title: "Module 3: Enterprise SCADA Systems (Ignition & Wonderware)",
        topics: [
          "AVEVA Wonderware InTouch: Tag databases, window scripts, historical logging",
          "Inductive Automation Ignition: Perspective HTML5 web mimics and mobile dashboards",
          "OPC UA Server/Client architecture connecting disparate brand PLCs to one SCADA host",
          "SQL database integration for batch production logs and historical audit trails",
        ],
      },
      {
        title: "Module 4: Closed-Loop PID Process Loop Tuning",
        topics: [
          "PID theory: Proportional gain, Integral reset time, and Derivative action",
          "Implementing PID_Compact in Siemens TIA Portal with auto-tuning",
          "Manual loop tuning using Ziegler-Nichols open-loop response curve methods",
          "Anti-windup control, output rate limiting and bump-less manual/auto transfer",
        ],
      },
      {
        title: "Module 5: Industrial Network Redundancy & Cybersecurity",
        topics: [
          "Media Redundancy Protocol (MRP) ring topologies with managed industrial switches",
          "VLAN segmentation between enterprise IT and operational technology (OT)",
          "Network packet capture analysis using Wireshark for industrial protocols",
          "Fail-safe programming practices and emergency shutdown (ESD) architecture",
        ],
      },
      {
        title: "Module 6: Turnkey Plant Commissioning Capstone",
        topics: [
          "Comprehensive dual-station automated chemical mixing and storage tank farm",
          "Multi-loop PID temperature and level control with remote SCADA logging",
          "Simulated plant failure modes: network cable breaks, transmitter drift, actuator jam",
          "Technical interview preparation, portfolio presentation and placement onboarding",
        ],
      },
    ],
    capstone:
      "Turnkey multi-tank continuous chemical reactor system integrating Siemens S7-1500 with distributed ET200SP I/O, Allen-Bradley auxiliary controls, closed-loop PID tuning, and an Ignition SCADA web portal.",
  },
  {
    id: "advanced-plc-program-professional",
    slug: "advanced-plc-program-professional",
    title: "Advanced PLC Program Professional",
    category: "industrial-automation",
    categoryName: "Industrial Automation",
    duration: "8 Weeks (Full-Time or Weekend)",
    level: "Specialized Programming",
    hardware: "Siemens S7-1200, Allen-Bradley Micro850, Delta DVP-14SS2, Logic State Analyzers",
    software: "TIA Portal V18, Rockwell CCW, Delta WPLSoft, Schneider EcoStruxure Machine Expert",
    overview:
      "Deep-dive programming specialization focusing on multi-language IEC 61131-3 development. Write clean, modular, and fault-tolerant industrial code for complex machinery and OEM equipment.",
    highlights: [
      "All 5 IEC 61131-3 Languages: Ladder, Structured Text (ST), SFC, FBD, IL",
      "Finite State Machine (FSM) Design for High-Speed Packaging Lines",
      "Custom User-Defined Data Types (UDTs) & Reusable Library Blocks",
      "Modbus RTU / TCP Communication Protocol Stacks & Packet Handling",
    ],
    modules: [
      {
        title: "Module 1: IEC 61131-3 Language Architecture Mastery",
        topics: [
          "Comparison of Ladder Logic (LAD), Structured Text (ST), and Function Block Diagram (FBD)",
          "Sequential Function Chart (SFC) for multi-stage sequential manufacturing steps",
          "When and why to choose Structured Text over Ladder for mathematical computations",
          "Cross-platform code translation between Siemens, Rockwell, and Delta platforms",
        ],
      },
      {
        title: "Module 2: Structured Text (ST / SCL) Programming In Depth",
        topics: [
          "Variables, arrays, data types, and pointer manipulations in SCL",
          "Control structures: IF-THEN-ELSE, CASE statements, FOR loops, WHILE loops",
          "String manipulation, barcode parsing, and serial payload decomposition",
          "Mathematical algorithms for moving averages, totalizers, and digital filtering",
        ],
      },
      {
        title: "Module 3: Modular Object-Oriented Industrial Programming",
        topics: [
          "User-Defined Data Types (UDTs): Creating reusable device templates (Valve_UDT, Motor_UDT)",
          "Standardized equipment control modules conforming to ISA-88 batch principles",
          "Multi-instance function blocks saving memory across duplicate plant stations",
          "Global library creation, version control, and block protection with security passwords",
        ],
      },
      {
        title: "Module 4: Communications Stacks & Custom Protocol Handshake",
        topics: [
          "Modbus RTU master/slave polling engines with automatic retry buffers",
          "Modbus TCP client/server socket communication across industrial Ethernet",
          "ASCII serial communication with weigh scales, barcode readers, and label printers",
          "Diagnosing communication timeouts, parity errors, and packet frame corruption",
        ],
      },
      {
        title: "Module 5: Capstone Programming Project",
        topics: [
          "High-speed multi-axis pick-and-place logic with state-machine sequence coordination",
          "Real-time fault trap routines logging the exact millisecond and reason for any line stop",
          "Code peer review, execution benchmarking, and memory footprint optimization",
        ],
      },
    ],
    capstone:
      "High-speed automated packaging cell program built strictly in Structured Text and SFC, featuring custom UDTs, dynamic alarm queueing, and a Modbus communication link to remote I/O.",
  },
  {
    id: "electrical-control-panel-designing",
    slug: "electrical-control-panel-designing",
    title: "Electrical Control & Panel Designing",
    category: "industrial-automation",
    categoryName: "Industrial Automation",
    duration: "6 Weeks (Intensive Practical)",
    level: "Design & Fabrication Core",
    hardware: "Dual-door IP54 Enclosures, Schneider MCCBs, Contactors, OLRs, Busbars, Ferrule Machines, Megger Testers",
    software: "AutoCAD Electrical, Microsoft Excel (BOM Automation), Schneider Ecodial",
    overview:
      "From single-line drawings (SLDs) and general arrangement (GA) layouts in AutoCAD Electrical to hands-on copper busbar sizing, switchgear selection, and control panel wiring conforming to IS/IEC standards.",
    highlights: [
      "AutoCAD Electrical: Power & Control Schematics, GA Layouts & Terminal Schedules",
      "Switchgear Sizing: MCB, MCCB, Contactors, Thermal Overload Relays & VFD Chokes",
      "Copper Busbar Current Density Calculations & Short-Circuit Withstand Capacity",
      "Hands-On Panel Wiring: Ferrule Tagging, Trunking Dressing & FAT Pre-Testing",
    ],
    modules: [
      {
        title: "Module 1: Electrical Drawing Standards & Schematic Drafting",
        topics: [
          "Single-line diagrams (SLD) and multi-line control schematics according to IEC 60617",
          "AutoCAD Electrical workspace: Project manager, wire numbering, and cross-referencing",
          "Parent-child component linking (contactor coils, auxiliary contacts, overload relays)",
          "Generating automated Bills of Materials (BOM) and component purchase schedules",
        ],
      },
      {
        title: "Module 2: Switchgear & Power Component Selection",
        topics: [
          "Selection and coordination of MCBs, MCCBs, and Air Circuit Breakers (ACBs)",
          "Type-2 coordination charts for contactors and overload relays according to IEC 60947",
          "Control transformer sizing, 24VDC industrial SMPS selection and backup redundancy",
          "Harmonic line reactors, braking resistors, and surge protection devices (SPDs)",
        ],
      },
      {
        title: "Module 3: Enclosure Engineering & Thermal Management",
        topics: [
          "IP ingress protection ratings (IP54, IP55, IP65) for indoor and outdoor environments",
          "General Arrangement (GA) drafting: Internal component layout and external fascia door design",
          "Control panel heat dissipation calculations and ventilation fan / panel AC sizing",
          "Copper busbar current density calculations, bending techniques, and support insulator sizing",
        ],
      },
      {
        title: "Module 4: Physical Panel Assembly, Wiring & Factory Acceptance Testing (FAT)",
        topics: [
          "DIN rail mounting, PVC wire trunking layout, and segregation of power and signal wires",
          "Wire gauge selection, color coding standards (Phase, Neutral, Ground, 24VDC+/-, Analog)",
          "Ferrule printing, wire lug crimping, and torque tightening standards",
          "FAT inspection protocols: Point-to-point continuity, 500V/1000V insulation resistance (Megger)",
        ],
      },
    ],
    capstone:
      "Complete electrical design, CAD schematic drafting, BOM calculation, and physical fabrication of an industrial motor control center (MCC) panel housing DOL, Star-Delta, and VFD feeders.",
  },

  // --- Category: Building Management System ---
  {
    id: "diploma-in-building-management-system",
    slug: "diploma-in-building-management-system",
    title: "Diploma In Building Management System",
    category: "building-management-system",
    categoryName: "Building Management System",
    duration: "14 Weeks (Comprehensive Diploma)",
    level: "Diploma Program",
    hardware: "Honeywell BACnet DDC Controllers, Schneider Belimo 0-10V Valve Actuators, Multi-Function Power Meters, Chilled Water Sensors",
    software: "Honeywell CARE / WEBs-N4, Niagara Framework, Schneider EcoStruxure Building Operation, BACnet Analyzer",
    overview:
      "The master diploma for modern smart infrastructure. Learn how to automate central chiller plants, air handlers, energy sub-metering, and smoke management systems for commercial towers, IT parks, airports, and healthcare campuses.",
    highlights: [
      "HVAC Chiller Plant Automation: Primary/Secondary Loops & Cooling Towers",
      "Direct Digital Controller (DDC) Wiring, Programming & I/O Point Scheduling",
      "Field Protocols: BACnet IP, BACnet MS/TP, Modbus RTU & M-Bus",
      "Central BMS Supervisory Graphics, Time-of-Day Scheduling & Energy Profiling",
    ],
    modules: [
      {
        title: "Module 1: Commercial HVAC Systems & Thermal Engineering",
        topics: [
          "Fundamentals of commercial refrigeration cycles, chillers (water-cooled vs. air-cooled)",
          "Chilled water distribution: Primary-only variable flow vs. primary-secondary pumping loops",
          "Air Handling Units (AHUs), fan coil units (FCUs), and variable air volume (VAV) boxes",
          "Indoor air quality (IAQ) parameters: temperature, relative humidity, CO2 levels, and static pressure",
        ],
      },
      {
        title: "Module 2: Direct Digital Controllers (DDC) & Field Instruments",
        topics: [
          "DDC controller hardware architecture, power supply, and point types (UI, DI, AO, DO)",
          "Field sensors: immersion temperature, duct humidity, water flow meters, differential pressure switches",
          "Control actuators: 0-10V / 4-20mA motorized valves, spring-return damper actuators",
          "Wiring practices, cable shielding, ground loop prevention, and 24VAC transformer sizing",
        ],
      },
      {
        title: "Module 3: BACnet & Field Network Integration",
        topics: [
          "BACnet protocol architecture: BACnet IP over Ethernet vs. BACnet MS/TP over RS-485",
          "Device instance numbers, MAC addressing, baud rate matching, and network routers",
          "Modbus RTU integration of multi-function energy meters, VFD drives, and generators",
          "Using BACnet network analyzers for packet capture, token-ring troubleshooting, and point discovery",
        ],
      },
      {
        title: "Module 4: BMS Supervisory Software & Energy Analytics",
        topics: [
          "BMS front-end architecture: Graphics development, equipment mimics, and 3D floor plans",
          "Time-of-Day (TOD) scheduling, holiday calendars, and night setback energy conservation modes",
          "Alarm routing, priority levels, audio-visual notification, and SMS/email escalation",
          "Energy metering dashboards, kW/ton chiller efficiency calculations, and sustainability reporting",
        ],
      },
      {
        title: "Module 5: Fire Alarm & Life Safety Interlocks",
        topics: [
          "Interface between fire alarm control panels (FACP) and BMS",
          "Smoke evacuation sequence, stairwell pressurization fans, and fire damper release",
          "Critical hospital operating theatre positive pressure regulation and isolation room controls",
        ],
      },
    ],
    capstone:
      "Full turnkey commissioning of a 5-story commercial building BMS simulator: chilled water plant lead-lag staging, VAV air distribution control, energy meter integration, and supervisory graphics in Niagara.",
  },
  {
    id: "certified-bms-engineer",
    slug: "certified-bms-engineer",
    title: "Certified BMS Engineer",
    category: "building-management-system",
    categoryName: "Building Management System",
    duration: "8 Weeks (Full-Time or Weekend)",
    level: "Professional Certification",
    hardware: "Schneider Electric BACnet DDC Controllers, Belimo 0-10V Actuators, Room Thermostats, Power Transducers",
    software: "EcoStruxure Building Operation, Niagara Workbench, Modbus Poll, Wireshark",
    overview:
      "A fast-paced professional engineering certification designed for mechanical, electrical, and instrumentation graduates to become field-ready BMS testing, commissioning, and facility management engineers.",
    highlights: [
      "DDC Point Verification & Site Acceptance Testing (SAT) Procedures",
      "AHU Cascade Temperature & Enthalpy Economizer Control Logic",
      "RS-485 Modbus Energy Meter Loop Integration & Baud Rate Debugging",
      "Dynamic BMS Supervisory Graphics, Alarm Configuration & Trending",
    ],
    modules: [
      {
        title: "Module 1: DDC Hardware Wiring & Point Testing",
        topics: [
          "DDC input/output terminals, resistance measurement for passive temperature sensors",
          "Active 0-10V / 4-20mA sensor loop verification with multi-meters and loop calibrators",
          "Digital input dry contact vs. wet contact monitoring, relay interlocks for fan/pump status",
          "Motorized valve calibration: span adjustment, direction of rotation (direct/reverse acting)",
        ],
      },
      {
        title: "Module 2: HVAC Control Sequences & Loop Tuning",
        topics: [
          "Air handling unit sequence of operations: Freeze-stat interlock, fan status, filter dirty switch",
          "Proportional-Integral (PI) loop tuning for supply air temperature regulation",
          "Cooling tower fan speed modulation based on condenser water supply temperature",
          "Water-side economizer cycle control and thermal energy storage tracking",
        ],
      },
      {
        title: "Module 3: Multi-Protocol Field Bus Integration",
        topics: [
          "BACnet MS/TP daisy-chain wiring: 120-ohm termination resistors, bias resistors, shield grounding",
          "Modbus RTU address mapping for electronic energy meters and variable speed drives",
          "Protocol gateways: Integrating proprietary chiller communication cards into standard BACnet",
        ],
      },
      {
        title: "Module 4: Supervisory Control & Commissioning Handover",
        topics: [
          "Point-to-point pre-commissioning checklists and punch list closeouts",
          "Building management supervisory workstation graphics, dynamic text, and animated fan icons",
          "Trend logging configuration for historical temperature, humidity, and energy compliance",
        ],
      },
    ],
    capstone:
      "Automated Air Handling Unit (AHU) commissioning bench: wiring DDC inputs/outputs, programming cooling coil modulation, establishing BACnet supervisory connectivity, and tuning PI control loops.",
  },
  {
    id: "cctv-and-security-systems",
    slug: "cctv-and-security-systems",
    title: "CCTV & Security Systems",
    category: "building-management-system",
    categoryName: "Building Management System",
    duration: "8 Weeks (Full-Time or Weekend)",
    level: "Security Infrastructure",
    hardware: "Hikvision 4K IP Bullet & PTZ Dome Cameras, 32-Channel NVR RAID-5, Cisco Managed Gigabit PoE+ Switches, Fiber Splicers",
    software: "Hikvision iVMS-4200, Hik-Central, Cisco Network Assistant, Bandwidth & Storage Calculators",
    overview:
      "Master electronic physical security infrastructure. Plan, cable, configure, and commission commercial IP video surveillance systems, optical fiber backbone loops, biometric access control, and Central Command Center video walls.",
    highlights: [
      "Camera Optics, Focal Length, Lux Ratings & Sensor Sizing Calculations",
      "Network Design: VLAN Segmentation, PoE+ Budgets & SFP Optical Fiber Loops",
      "32-Channel NVR RAID Storage Design & 30-Day Retention Planning",
      "Smart Video Analytics: Tripwire, Intrusion Detection & Biometric Access Integration",
    ],
    modules: [
      {
        title: "Module 1: Camera Optics, Lens Sizing & Sensor Physics",
        topics: [
          "Understanding camera sensors: 1/2.8 vs. 1/1.8 CMOS sensors, lux ratings for low-light capture",
          "Focal length calculations: Determining field of view (FOV) for detection, recognition, identification (DORI)",
          "Wide Dynamic Range (True WDR 120dB vs. Digital WDR) for backlit entrances and gates",
          "Pan-Tilt-Zoom (PTZ) camera mechanisms: Optical zoom ratios, preset tours, and auto-tracking",
        ],
      },
      {
        title: "Module 2: Network Infrastructure, PoE+ & Optical Fiber Backbones",
        topics: [
          "IP subnetting, VLAN segregation between CCTV stream traffic and corporate data networks",
          "Power over Ethernet (PoE 802.3af vs. PoE+ 802.3at vs. Hi-PoE) power budget calculations",
          "Optical fiber network design: Single-mode vs. multi-mode fiber, SFP transceiver selection",
          "Hands-on optical fiber core splicing, OTDR link loss testing, and media converter setup",
        ],
      },
      {
        title: "Module 3: NVR Architecture, RAID Storage & Bandwidth Management",
        topics: [
          "Network Video Recorder (NVR) architecture, throughput limitations, and incoming bandwidth planning",
          "Video compression codecs: H.264, H.265, and H.265+ Smart Codec bitrate savings",
          "RAID array configurations (RAID 0, RAID 1, RAID 5) for mission-critical storage redundancy",
          "Storage calculation formulas for 30, 60, and 90-day continuous and motion-triggered retention",
        ],
      },
      {
        title: "Module 4: Smart Video Analytics (VCA) & Access Control Integration",
        topics: [
          "Deep learning video analytics: Line crossing detection, intrusion zones, unattended baggage",
          "Vehicle Automatic Number Plate Recognition (ANPR) setup for barrier gate triggering",
          "Biometric fingerprint, RFID card, and facial recognition access control terminals",
          "Electromagnetic door locks, emergency break-glass units, and fire alarm release relays",
        ],
      },
      {
        title: "Module 5: Security Command Center Integration",
        topics: [
          "Video Management Software (VMS): Server-client architecture, multi-user role permissions",
          "Multi-screen surveillance video wall design and HDMI matrix decoder configuration",
          "Remote mobile streaming security, port forwarding, and VPN tunnel access",
        ],
      },
    ],
    capstone:
      "Industrial campus security infrastructure deployment: ring topology optical fiber network, 8 multi-zone 4K IP cameras with smart perimeter analytics, biometric door access control, and Central Command console setup.",
  },
  {
    id: "cctv-training",
    slug: "cctv-training",
    title: "CCTV Training",
    category: "building-management-system",
    categoryName: "Building Management System",
    duration: "4 Weeks (Hands-On Intensive)",
    level: "Practical Field Technician",
    hardware: "Hikvision & Dahua 2MP/5MP IP & HD Cameras, 8-Channel NVRs/DVRs, Cat6 Crimpers, Punchdown Tools, Portable CCTV Testers",
    software: "SADP Tool, ConfigTool, Hik-Connect, DMSS Mobile Apps, SmartPSS",
    overview:
      "Fast-track, 100% practical hands-on training for field technicians and installers. Master physical cabling, RJ45/BNC crimping, IP camera addressing, NVR hard disk setup, mobile cloud remote viewing, and on-site troubleshooting.",
    highlights: [
      "Analog HD (Turbo-HD / CVI) vs. IP Camera Network Fundamentals",
      "Cat6 Network Cable Crimping, Keystone Punching & BNC Video Baluns",
      "IP Camera Discovery, Static IP Assignment & NVR Channel Mapping",
      "Mobile App P2P Cloud Remote Monitoring Setup (Hik-Connect & DMSS)",
    ],
    modules: [
      {
        title: "Module 1: Camera Hardware Basics & Cabling Standards",
        topics: [
          "Comparison of Analog HD (HD-TVI, CVI, AHD) and IP network cameras",
          "Types of camera housings: Dome (indoor), Bullet (weatherproof outdoor), Turret, PTZ",
          "Cabling standards: 3+1 / 4+1 coaxial cable with BNC and DC pin terminations",
          "Cat6 Ethernet cabling: T568A vs. T568B color codes, RJ45 crimping, and cable tester verification",
        ],
      },
      {
        title: "Module 2: IP Camera Setup & Network Discovery",
        topics: [
          "Device initialization using manufacturer discovery tools (Hikvision SADP, Dahua ConfigTool)",
          "Assigning static IP addresses, default gateways, and matching router subnets",
          "Accessing camera web graphical user interfaces (GUI) for image adjustments",
          "Adjusting resolution, framerate (FPS), and video bitrate for smooth streaming",
        ],
      },
      {
        title: "Module 3: NVR / DVR Installation & Recording Schedules",
        topics: [
          "Surveillance hard drive (WD Purple / Seagate SkyHawk) installation and formatting",
          "Adding IP cameras to NVR: Plug-and-play PoE ports vs. manual IP search over switch",
          "Configuring recording schedules: Continuous 24/7 vs. motion detection vs. alarm trigger",
          "Video playback search, event clip bookmarking, and USB thumb drive export",
        ],
      },
      {
        title: "Module 4: Mobile App Cloud Streaming & Troubleshooting",
        topics: [
          "Setting up P2P cloud accounts (Hik-Connect, DMSS) for mobile live streaming",
          "QR code scanning and sharing camera access across multiple family or staff phones",
          "Troubleshooting video loss, night vision infrared reflection, PoE voltage drop over long runs",
          "Field tester meters: Verifying PoE voltage, pinging IP cameras, and focusing lenses",
        ],
      },
    ],
    capstone:
      "Complete hands-on field deployment of a 4-camera IP surveillance system: Cat6 cabling, crimping, NVR configuration, motion alerts, and live smartphone cloud viewing from scratch.",
  },
];
