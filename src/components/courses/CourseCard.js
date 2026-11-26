import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "../icons";

export default function CourseCard({
  course,
  actionType = "link", // "link" | "enquiry"
  onEnquire,
}) {
  const imageSrc = course.image || `/images/courses/${course.slug}.jpg`;

  const cardContent = (
    <>
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

      {/* Card Action at Bottom */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="pt-3 border-t border-purple-50 flex items-center justify-between text-xs text-slate-500 font-normal">
          {actionType === "enquiry" ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onEnquire) onEnquire(course);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#6803F5] hover:bg-[#5502C7] text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer group/btn"
            >
              <span>Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <>
              <span className="text-[#6803F5] font-medium group-hover:underline">
                View details
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#6803F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </>
          )}
        </div>
      </div>
    </>
  );

  if (actionType === "enquiry") {
    return (
      <div
        onClick={() => onEnquire && onEnquire(course)}
        className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-xs hover:border-[#6803F5]/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-xs hover:border-[#6803F5]/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      {cardContent}
    </Link>
  );
}
