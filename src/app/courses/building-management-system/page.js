import PageHeader from "../../../components/layout/PageHeader";
import CourseCard from "../../../components/courses/CourseCard";
import { ALL_COURSES } from "../../../data/coursesData";

export const metadata = {
  title: "Building Management System (BMS) Courses | HVAC Automation & CCTV Training",
  description:
    "Explore Technotiq's certified Building Management System programs: Diploma In Building Management System, Certified BMS Engineer, CCTV & Security Systems, and CCTV Training.",
};

export default function BuildingManagementSystemCategoryPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
