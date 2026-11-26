import Hero from "../components/home/Hero";
import ValueMatrix from "../components/home/ValueMatrix";
import LabShowcase from "../components/home/LabShowcase";
import ConsultationCta from "../components/home/ConsultationCta";
import FaqAccordion from "../components/ui/FaqAccordion";
import Button from "../components/ui/Button";
import Link from "next/link";
import { Award, ShieldCheck, Cpu, ArrowRight } from "../components/icons";

export const metadata = {
  title: "Technotiq | Industrial Automation, IT Solutions & Training",
  description:
    "Explore the World of TECHNOTIQ. Transform technical skills into real-world expertise across Industrial Automation (PLC, SCADA, BMS, CCTV), Embedded Systems, AI and IT Services.",
};

const HOME_FAQS = [
  {
    question: "Do students work on real hardware or only simulation software?",
    answer:
      "Every trainee at Technotiq spends over 80% of their lab time on physical industrial hardware: wiring 24VDC circuits, programming Siemens S7-1200 and Allen-Bradley PLCs, calibrating 4-20mA sensors, and connecting live HMIs and SCADA systems. Simulation software is used for initial logic drafts, followed by mandatory hardware validation.",
  },
  {
    question: "What companies recruit from Technotiq's training programs?",
    answer:
      "Our alumni work across industrial system integrators, manufacturing plants (steel, cement, automotive, FMCG), building management contractors, smart infrastructure projects, and tech startups. We provide resume engineering, technical interview preparation, and direct placement drives.",
  },
  {
    question: "Can working professionals or corporate teams enroll in weekend batches?",
    answer:
      "Yes. We offer dedicated weekend cohorts and customized corporate training modules designed specifically for working electrical, electronics, instrumentation, and mechanical engineers looking to upgrade to advanced automation or industrial IoT.",
  },
  {
    question: "What IT services and enterprise automation does Technotiq provide?",
    answer:
      "Technotiq delivers end-to-end custom web and mobile software development, cloud API infrastructure, AI-driven workflow automation, CRM/ERP integration, and performance digital marketing to help modern enterprises streamline operations and scale revenue.",
  },
  {
    question: "Where is the Technotiq laboratory located and how can I visit?",
    answer:
      "Our central training facility and engineering center is located in Ranchi, Jharkhand, India. You can book a discovery call or schedule an in-person lab tour by calling +91 6299 916713 or emailing technotiqautomation@gmail.com.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section matching brand screenshot */}
      <Hero />

      {/* 2. Integrated Engineering Matrix (4 pillars) */}
      <ValueMatrix />

      {/* 3. Real Physical Hardware Lab Showcase */}
      <LabShowcase />

      {/* 4. Placement & Engineering Impact Section */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-normal tracking-wider text-[#27B2DD] uppercase mb-3">
              Proven Track Record
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight">
              From our test benches to major industrial plants.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Whether preparing fresh diploma and degree engineers for plant commissioning
              or delivering mission-critical IT automation to mid-market companies, here is what
              sets our ecosystem apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-[#8B5CF6] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-medium text-white font-heading">
                94%
              </p>
              <h3 className="text-lg font-medium text-white mt-2 mb-2">
                Placement Assistance
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Dedicated placement pipeline connecting trainees to verified plant automation
                firms, panel builders, and IoT infrastructure providers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-[#27B2DD] flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-medium text-white font-heading">
                120+
              </p>
              <h3 className="text-lg font-medium text-white mt-2 mb-2">
                Hands-on Lab Hours
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Structured laboratory exercises on Siemens, Allen-Bradley, Wonderware, and
                microcontroller test beds with 1-on-1 instructor reviews.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#60A5FA] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-3xl sm:text-4xl font-medium text-white font-heading">
                40+
              </p>
              <h3 className="text-lg font-medium text-white mt-2 mb-2">
                Delivered Engineering Projects
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Turnkey PLC/SCADA commissioning, BMS retrofits, IP security infrastructure,
                and custom enterprise web applications delivered on schedule.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center text-sm font-normal text-[#27B2DD] hover:underline"
            >
              <span>Explore course tracks, hardware kits, and batch schedules</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={HOME_FAQS}
            title="Frequently Asked Questions"
            subtitle="Transparent Answers"
          />
        </div>
      </section>

      {/* 6. High-Conversion Consultation CTA */}
      <ConsultationCta />
    </div>
  );
}
