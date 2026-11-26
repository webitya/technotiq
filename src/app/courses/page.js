import PageHeader from "../../components/layout/PageHeader";
import CourseCatalog from "../../components/courses/CourseCatalog";

export const metadata = {
  title: "Courses & Training | Industrial Automation & Building Management Systems",
  description:
    "Explore Technotiq's certified engineering programs across Industrial Automation (PLC, SCADA, HMI, Panel Design) and Building Management Systems (BMS, HVAC, CCTV).",
};

const BATCH_TIMINGS = [
  {
    track: "Regular Weekday Intensive",
    days: "Monday to Friday",
    hours: "3 Hours / Day (Morning & Afternoon slots)",
    idealFor: "Diploma & Degree freshers seeking immediate industrial plant placement",
  },
  {
    track: "Weekend Professional Cohort",
    days: "Saturday & Sunday",
    hours: "5 Hours / Day (Intensive lab practice)",
    idealFor: "Working engineers, plant technicians & supervisors upgrading skills",
  },
  {
    track: "Corporate Customized Batch",
    days: "Flexible Scheduling",
    hours: "Tailored to plant shutdown & shift timings",
    idealFor: "Factory maintenance teams, panel fabrication units & facility engineers",
  },
];

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="Technical Training"
        highlight="Academy"
        description="Master Industrial Automation and Building Management Systems through 100% hands-on laboratory time on live industrial hardware test benches."
        breadcrumbs={[{ name: "Courses" }]}
      />

      {/* Courses Catalog with Center Two-Button Switcher and Compact Cards */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseCatalog initialCategory="industrial-automation" />
        </div>
      </section>

      {/* Cohort Timings & Flexibility - Light Purple Background */}
      <section className="py-10 sm:py-14 lg:py-16 bg-purple-50/70 border-t border-b border-purple-100 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Cohort schedules designed for students and working professionals.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
              Choose between immersive weekday sessions or hands-on weekend workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {BATCH_TIMINGS.map((b, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <span className="text-xs font-mono font-medium text-[#6803F5] block">
                  {b.days}
                </span>
                <h3 className="text-base font-medium text-slate-900">{b.track}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">{b.hours}</p>
                <div className="pt-2.5 border-t border-purple-50 text-xs text-slate-500 font-normal">
                  <span className="text-slate-700 block mb-0.5">Recommended For:</span>
                  {b.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
