import PageHeader from "../../../components/layout/PageHeader";
import CourseCard from "../../../components/courses/CourseCard";
import Link from "next/link";
import { ALL_COURSES, COURSE_CATEGORIES } from "../../../data/coursesData";
import { ArrowRight, ArrowLeft } from "../../../components/icons";

export const metadata = {
  title: "Building Management System (BMS) Courses | HVAC Automation & CCTV Training",
  description:
    "Explore Technotiq's certified Building Management System programs: Diploma In Building Management System, Certified BMS Engineer, CCTV & Security Systems, and CCTV Training.",
};

export default function BuildingManagementSystemCategoryPage() {
  const categoryMeta = COURSE_CATEGORIES.find(
    (c) => c.id === "building-management-system"
  );
  const courses = ALL_COURSES.filter(
    (c) => c.category === "building-management-system"
  );

  return (
    <div>
      <PageHeader
        title="Building Management System"
        highlight="Training Tracks"
        description="Commercial building automation, environmental control, and mission-critical physical security. Master Honeywell & Schneider BACnet DDC commissioning and optical fiber IP CCTV surveillance."
        breadcrumbs={[
          { name: "Courses", href: "/courses" },
          { name: "Building Management System" },
        ]}
      />

      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back link & Category Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-100 pb-6">
            <Link
              href="/courses"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>Back to All Courses Catalog</span>
            </Link>

            <Link
              href="/courses/industrial-automation"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-600 hover:text-[#6803F5] transition-colors"
            >
              <span>Switch to Industrial Automation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Small Compact Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
