import Button from "../ui/Button";
import GeometricHeroVisual from "./GeometricHeroVisual";
import { ArrowRight } from "../icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16 hero-scene-bg subtle-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Main Hero Copy - Clean, No Heading Badge */}
          <div className="lg:col-span-7 space-y-5 z-20">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-slate-900 leading-[1.12]">
                Explore the World of{" "}
                <span className="text-gradient-violet">
                  TECHNOTIQ
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl font-normal text-slate-700 tracking-tight leading-snug">
                Transform Technical Skills into Real-World Expertise.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Master Industrial Automation, PLC, SCADA, BMS, CCTV, Embedded Systems, AI and
              emerging technologies through hands-on training, practical projects and
              industry-focused learning.
            </p>

            {/* Action Buttons: 2 Capsule Pills */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Button href="/contact" variant="primary" size="md">
                <span>Book a discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/courses" variant="secondary" size="md">
                <span>View automation examples</span>
              </Button>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-500 tracking-wide">
              Technology. Innovation. Excellence. — Building Skills. Delivering Solutions. Shaping the Future.
            </p>

            {/* Compact Hardware Metrics */}
            <div className="pt-5 border-t border-slate-200/70 grid grid-cols-3 gap-4 max-w-md font-normal">
              <div>
                <p className="text-xl sm:text-2xl font-medium text-slate-900 font-heading">
                  100%
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Physical Hardware Labs
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium text-[#6803F5] font-heading">
                  6
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Specialized Tracks
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium text-[#27B2DD] font-heading">
                  1-on-1
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Engineering Mentorship
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Geometric Crystal Scene with Neon Light Ray */}
          <div className="lg:col-span-5 relative z-10 flex items-center justify-center">
            <GeometricHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
