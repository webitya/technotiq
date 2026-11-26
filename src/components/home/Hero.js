import Link from "next/link";
import Button from "../ui/Button";
import { ArrowRight, Cpu, Activity, ShieldCheck, Layers } from "../icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-white hero-glow-bg">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#6803F5]/10 via-[#27B2DD]/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-24" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - Clean, Normal, Understated Typography */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xs sm:text-sm font-normal tracking-wider text-[#6803F5] uppercase">
              Technology. Innovation. Excellence.
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.15]">
                Explore the World of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6803F5] via-[#7C3AED] to-[#4F46E5]">
                  TECHNOTIQ
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-normal text-slate-700 tracking-tight leading-snug">
                Transform Technical Skills into Real-World Expertise.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Master Industrial Automation, PLC, SCADA, BMS, CCTV, Embedded Systems, AI and
              emerging technologies through hands-on training, practical projects and
              industry-focused learning.
            </p>

            {/* Action Buttons: Clean Capsule Pill Shapes */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg">
                <span>Book a discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/courses" variant="secondary" size="lg">
                <span>View training tracks</span>
              </Button>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-500 tracking-wide pt-2">
              Building Skills. Delivering Solutions. Shaping the Future.
            </p>

            {/* Live Trust Metrics Strip - Clean Font Weight */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-medium text-slate-900 font-heading">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                  Practical Hardware Labs
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-medium text-[#6803F5] font-heading">
                  6+
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                  Specialized Tracks
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-medium text-[#27B2DD] font-heading">
                  1-on-1
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                  Engineering Mentorship
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Card Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-gradient-to-b from-white to-slate-50/80 rounded-3xl p-8 border border-slate-200/90 shadow-xl shadow-purple-500/5 backdrop-blur-sm">
                <div className="h-1 w-20 bg-gradient-to-r from-[#6803F5] to-[#27B2DD] rounded-full mb-6" />

                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-normal">
                      Core Convergence
                    </span>
                    <h3 className="text-lg font-medium text-slate-900 mt-1">
                      Industrial Hardware + Modern AI
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#6803F5]">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-purple-200 transition-colors">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-[#6803F5] shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">
                        PLC & SCADA Architecture
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">
                        Siemens TIA Portal, Allen-Bradley RSLogix, Wonderware InTouch
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                    <div className="p-2.5 rounded-xl bg-cyan-50 text-[#27B2DD] shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">
                        BMS & Building Telemetry
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">
                        BACnet IP, Modbus RTU, HVAC Chillers & Energy Profiling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#276CB9] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">
                        IP CCTV & Critical Security
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">
                        Hikvision, Dahua NVR architectures & optical fiber loops
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-normal">Industry Training & Solutions</span>
                  <Link
                    href="/services"
                    className="font-normal text-[#6803F5] hover:text-[#5502C7] flex items-center gap-1"
                  >
                    Explore all capabilities
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
