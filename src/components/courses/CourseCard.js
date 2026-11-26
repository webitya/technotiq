import Link from "next/link";
import { ArrowUpRight } from "../icons";

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white rounded-2xl p-5 sm:p-6 border border-purple-100 shadow-xs hover:border-[#6803F5]/40 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
    >
      <div className="space-y-2.5">
        <h3 className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-[#6803F5] transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">
          {course.overview}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-purple-50/80 flex items-center justify-between text-xs text-slate-500 font-normal">
        <span className="text-[#6803F5] font-medium group-hover:underline">
          View details
        </span>
        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#6803F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </Link>
  );
}
