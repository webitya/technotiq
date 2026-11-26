import { GoogleIcon, Star } from "../icons";

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Amit Kumar",
    role: "Automation Engineer, Usha Martin",
    initial: "A",
    color: "bg-blue-600",
    rating: 5,
    time: "2 weeks ago",
    comment:
      "The hands-on Siemens S7-1200 hardware wiring and TIA Portal sessions at Technotiq gave me practical confidence that college never provided. Got placed within 3 weeks of course completion!",
  },
  {
    id: 2,
    name: "Priya Kumari",
    role: "BMS Systems Trainee",
    initial: "P",
    color: "bg-purple-600",
    rating: 5,
    time: "a month ago",
    comment:
      "Best training center in Jharkhand for Building Management Systems. Learning Honeywell DDC programming and AHU chiller modulation on real hardware testbeds was truly career-defining.",
  },
  {
    id: 3,
    name: "Rohit Verma",
    role: "Electrical Site Supervisor",
    initial: "R",
    color: "bg-emerald-600",
    rating: 5,
    time: "3 weeks ago",
    comment:
      "The panel designing and AutoCAD electrical module covered everything from single line diagrams to switchgear sizing. Practical faculty with real industrial plant commissioning experience.",
  },
  {
    id: 4,
    name: "Saurav Sengupta",
    role: "Junior Automation Developer",
    initial: "S",
    color: "bg-amber-600",
    rating: 5,
    time: "2 months ago",
    comment:
      "Multi-station Wonderware InTouch SCADA and Modbus RTU communication over RS-485 was explained with 100% lab time. Truly an engineering academy, not just software theory.",
  },
  {
    id: 5,
    name: "Vikash Pandey",
    role: "Security & Surveillance Technician",
    initial: "V",
    color: "bg-rose-600",
    rating: 5,
    time: "1 month ago",
    comment:
      "Learned optical fiber splicing, NVR RAID configuration, and IP CCTV network routing on live cameras. Direct placement interview arranged by the directors within a month.",
  },
  {
    id: 6,
    name: "Ananya Mishra",
    role: "Instrumentation Engineer",
    initial: "A",
    color: "bg-indigo-600",
    rating: 5,
    time: "3 weeks ago",
    comment:
      "1-on-1 mentorship on Allen-Bradley and Siemens PLC racks. The 4-20mA sensor calibration and PID tuning exercises prepared me directly for technical plant rounds.",
  },
];

export default function GoogleReviewsMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-purple-100 overflow-hidden font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Rating Summary Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono text-slate-700 mb-3">
          <GoogleIcon className="w-4 h-4 shrink-0" />
          <span className="font-medium text-slate-900">4.9 / 5.0 Rating</span>
          <span className="text-slate-400">•</span>
          <div className="flex items-center text-[#FBBC04]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04]" />
            ))}
          </div>
          <span className="text-slate-500 font-normal">Verified Google Reviews</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
          What our trainees and engineers say.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal">
          Real feedback from diploma freshers, working engineers, and plant supervisors who completed hands-on training at Technotiq Ranchi.
        </p>
      </div>

      {/* Infinite Left-to-Right Carousel Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left and Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Marquee Track moving from Left to Right */}
        <div className="animate-marquee-ltr flex items-stretch gap-5">
          {marqueeItems.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[300px] sm:w-[350px] shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#6803F5]/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Reviewer Header: Avatar + Name + Google Logo */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${review.color} text-white flex items-center justify-center font-medium text-sm shrink-0`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 leading-tight">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-normal">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <GoogleIcon className="w-5 h-5 shrink-0" />
                </div>

                {/* Stars and Timestamp */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-[#FBBC04]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-normal">
                    {review.time}
                  </span>
                </div>

                {/* Review Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Verified on Google Badge */}
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-normal">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Trainee Review
                </span>
                <span className="font-medium text-slate-500">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
