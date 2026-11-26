import PageHeader from "../../components/layout/PageHeader";
import ConsultationCta from "../../components/home/ConsultationCta";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin } from "../../components/icons";

export const metadata = {
  title: "About Us | Technotiq Automation Private Limited",
  description:
    "Learn about Technotiq: Ranchi's leading industrial automation, technical training academy, and enterprise IT engineering company. Bridging physical hardware with modern software.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Physical Hardware First",
      description:
        "Industrial engineering cannot be mastered solely behind a computer screen. We mandate extensive physical test-rig time so trainees understand relay chatter, noise interference, and 24VDC polarity as intuitively as software logic.",
    },
    {
      title: "Zero Simulation-Only Fluff",
      description:
        "While simulators have their place in early conceptual drafts, real industrial plants present grounding loops, line loss, and timing jitter. We teach real-world resilience.",
    },
    {
      title: "Full-Stack Convergence",
      description:
        "Modern factories and modern businesses need systems that talk to each other. We train and build at the intersection of shop-floor PLCs and cloud-native databases.",
    },
    {
      title: "Measurable Placement & ROI",
      description:
        "For students, we focus on verified technical competencies that hiring managers immediately respect. For clients, we deliver automation that demonstrably slashes downtime.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About"
        highlight="Technotiq"
        description="Technotiq Automation Private Limited was founded to bridge the critical divide between theoretical education and real-world industrial systems engineering."
        breadcrumbs={[{ name: "About" }]}
      />

      {/* Origin Story & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-normal tracking-wider text-[#6803F5] uppercase">
                Our Foundation & Mission
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight leading-tight">
                Built by engineers who have spent thousands of hours on factory floors.
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
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

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/courses" variant="primary" size="md">
                  <span>Explore training programs</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/contact" variant="secondary" size="md">
                  <span>Contact our directors</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6 font-normal">
                <h3 className="text-lg font-medium text-white tracking-tight border-b border-slate-800 pb-4">
                  Organization Credentials
                </h3>

                <div className="space-y-4 text-sm text-slate-300 font-normal">
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">
                      Entity Name
                    </span>
                    <span className="text-white font-normal text-base">
                      Technotiq Automation Private Limited
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">
                      Core Verticals
                    </span>
                    <span>
                      Industrial Automation, Building Management Systems, IP CCTV, Custom Software,
                      AI Workflows, Technical Training.
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">
                      Location
                    </span>
                    <span className="flex items-center gap-1.5 text-white">
                      <MapPin className="w-4 h-4 text-[#27B2DD]" />
                      Ranchi, Jharkhand, India
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">
                      Direct Support
                    </span>
                    <div className="space-y-1 mt-1 font-mono text-xs">
                      <a href="tel:+916299916713" className="block text-[#27B2DD] hover:underline">
                        +91 6299 916713
                      </a>
                      <a href="mailto:technotiqautomation@gmail.com" className="block text-[#6803F5] hover:underline">
                        technotiqautomation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-normal">
                  <p>Building Skills. Delivering Solutions. Shaping the Future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-normal tracking-wider text-[#6803F5] uppercase mb-3">
              Guiding Principles
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight leading-tight">
              Our engineering philosophy is grounded in discipline.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-medium text-[#6803F5] block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
