"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { ALL_COURSES, COURSE_CATEGORIES } from "../../data/coursesData";
import { ArrowRight } from "../icons";

export default function CourseCatalog({ initialCategory = "all" }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredCourses =
    selectedCategory === "all"
      ? ALL_COURSES
      : ALL_COURSES.filter((c) => c.category === selectedCategory);

  const activeCategoryMeta = COURSE_CATEGORIES.find(
    (c) => c.id === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Interactive Category Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-100 pb-6">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-purple-50/70 border border-purple-100 max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-[#6803F5] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            All Courses ({ALL_COURSES.length})
          </button>

          {COURSE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = ALL_COURSES.filter((c) => c.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#6803F5] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Dedicated Category Page Link */}
        {selectedCategory !== "all" && (
          <Link
            href={`/courses/${selectedCategory}`}
            className="inline-flex items-center text-xs font-medium text-[#6803F5] hover:underline"
          >
            <span>Open Dedicated {activeCategoryMeta?.name} Page</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        )}
      </div>

      {/* Category Overview Banner */}
      {activeCategoryMeta && (
        <div className="p-5 sm:p-6 rounded-3xl bg-purple-50/60 border border-purple-100/90 text-slate-800 space-y-1.5 font-normal">
          <span className="text-xs font-mono text-[#6803F5] font-medium block">
            {activeCategoryMeta.tagline}
          </span>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {activeCategoryMeta.description}
          </p>
        </div>
      )}

      {/* Responsive Grid of Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
