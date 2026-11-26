"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { ALL_COURSES, COURSE_CATEGORIES } from "../../data/coursesData";

export default function CourseCatalog({ initialCategory = "industrial-automation" }) {
  // Always default to one of the two main categories (no 'all')
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory === "building-management-system"
      ? "building-management-system"
      : "industrial-automation"
  );

  const filteredCourses = ALL_COURSES.filter(
    (c) => c.category === selectedCategory
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* In Center Switch Badge: Exactly Two Buttons */}
      <div className="flex justify-center">
        <div className="inline-flex items-center p-1.5 rounded-full bg-purple-50/80 border border-purple-100 shadow-xs">
          {COURSE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#6803F5] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Small Compact Cards Grid Without Any Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
