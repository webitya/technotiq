import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "../icons";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100/90 shadow-xs hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Top Badges: Category & Duration */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-mono font-medium text-[#6803F5] bg-purple-50 px-3 py-1 rounded-full border border-purple-100/60">
            {course.categoryName}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-slate-500 flex items-center gap-1.5 font-normal">
            <Clock className="w-3.5 h-3.5 text-[#27B2DD]" />
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-[#6803F5] transition-colors leading-snug">
            <Link href={`/courses/${course.slug}`}>
              {course.title}
            </Link>
          </h3>
          <span className="text-[11px] font-mono text-slate-400 mt-1 block">
            Level: {course.level}
          </span>
        </div>

        {/* Overview */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
          {course.overview}
        </p>

        {/* Key Syllabus Highlights */}
        <div className="pt-2 border-t border-purple-50 space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            Core Curriculum Highlights:
          </span>
          <ul className="space-y-1.5 font-normal">
            {course.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#6803F5] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:text-[#5502C7] transition-colors group/link"
        >
          <span>View Full Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/contact"
          className="text-xs font-normal text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-purple-50 transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
