import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "../icons";

export default function CourseCard({ course }) {
  const imageSrc = course.image || `/images/courses/${course.slug}.jpg`;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-xs hover:border-[#6803F5]/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Card Image Banner */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-purple-50/60">
          <Image
            src={imageSrc}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-2">
          <h3 className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-[#6803F5] transition-colors leading-snug">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
            {course.overview}
          </p>
        </div>
      </div>

      {/* Card Action Link at Bottom */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="pt-3 border-t border-purple-50 flex items-center justify-between text-xs text-slate-500 font-normal">
          <span className="text-[#6803F5] font-medium group-hover:underline">
            View details
          </span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#6803F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
