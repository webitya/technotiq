import Hero from "../components/home/Hero";
import InteractiveWorkbench from "../components/home/InteractiveWorkbench";
import ValueMatrix from "../components/home/ValueMatrix";
import RealCaseStudies from "../components/home/RealCaseStudies";
import FaqAccordion from "../components/ui/FaqAccordion";
import { Award, ShieldCheck, Cpu } from "../components/icons";

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
      {/* 1. Hero Section matching brand screenshot with 3D crystal visual */}
      <Hero />

      {/* 2. Interactive Hardware Lab Workbench Explorer */}
      <InteractiveWorkbench />

      {/* 3. Integrated Engineering Matrix */}
      <ValueMatrix />

      {/* 4. Real Industrial Commissioning Case Studies */}
      <RealCaseStudies />

      {/* 5. Placement & Engineering Impact Section - Light Purple Background */}
      <section className="py-10 sm:py-14 lg:py-16 bg-purple-50/70 border-t border-b border-purple-100 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
              From our test benches to major industrial plants.
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Whether preparing fresh diploma and degree engineers for plant commissioning
              or delivering mission-critical IT automation to mid-market companies, here is what
              sets our ecosystem apart:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#6803F5] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-medium text-slate-900 font-heading">
                94%
              </p>
              <h3 className="text-base font-medium text-slate-900 mt-1 mb-1">
                Placement Assistance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dedicated placement pipeline connecting trainees to verified plant automation
                firms, panel builders, and IoT infrastructure providers.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#27B2DD] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-medium text-slate-900 font-heading">
                120+
              </p>
              <h3 className="text-base font-medium text-slate-900 mt-1 mb-1">
                Hands-on Lab Hours
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Structured laboratory exercises on Siemens, Allen-Bradley, Wonderware, and
                microcontroller test beds with 1-on-1 instructor reviews.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#276CB9] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-medium text-slate-900 font-heading">
                40+
              </p>
              <h3 className="text-base font-medium text-slate-900 mt-1 mb-1">
                Delivered Engineering Projects
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Turnkey PLC/SCADA commissioning, BMS retrofits, IP security infrastructure,
                and custom enterprise web applications delivered on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs Section - Compact */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={HOME_FAQS}
            title="Frequently Asked Questions"
          />
        </div>
      </section>
    </div>
  );
}
