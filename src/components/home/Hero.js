import Button from "../ui/Button";
import GeometricHeroVisual from "./GeometricHeroVisual";
import { ArrowRight } from "../icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-3 pb-10 sm:pt-4 sm:pb-12 lg:pt-5 lg:pb-14 hero-scene-bg subtle-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Main Hero Copy - Clean, Direct, No Extraneous Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 z-20">
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-slate-900 leading-[1.14] break-words">
                Explore the World of{" "}
                <span className="text-gradient-violet">
                  TECHNOTIQ
                </span>
              </h1>

              <h2 className="text-base sm:text-lg lg:text-xl font-normal text-slate-700 tracking-tight leading-snug">
                Transform Technical Skills into Real-World Expertise.
              </h2>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Master Industrial Automation, PLC, SCADA, BMS, CCTV, Embedded Systems, AI and
              emerging technologies through hands-on training, practical projects and
              industry-focused learning.
            </p>

            {/* Action Buttons: 2 Capsule Pills - Responsive Stacking on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto justify-center">
                <span>Book a discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/courses" variant="secondary" size="md" className="w-full sm:w-auto justify-center">
                <span>Our courses</span>
              </Button>
            </div>

            {/* Compact Hardware Metrics - Responsive Grid */}
            <div className="pt-4 sm:pt-5 border-t border-slate-200/70 grid grid-cols-3 gap-2 sm:gap-4 max-w-md font-normal">
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-900 font-heading">
                  100%
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">
                  Physical Hardware Labs
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#6803F5] font-heading">
                  6
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">
                  Specialized Tracks
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#27B2DD] font-heading">
                  1-on-1
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">
                  Engineering Mentorship
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pure 3D Geometric Crystal Scene with Neon Light Ray */}
          <div className="lg:col-span-5 relative z-10 flex items-center justify-center w-full overflow-hidden">
            <GeometricHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
