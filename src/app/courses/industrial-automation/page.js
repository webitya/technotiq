import PageHeader from "../../../components/layout/PageHeader";
import CourseCard from "../../../components/courses/CourseCard";
import { ALL_COURSES } from "../../../data/coursesData";

export const metadata = {
  title: "Industrial Automation Courses | PLC, SCADA, Panel Designing Training",
  description:
    "Explore Technotiq's specialized Industrial Automation programs: Automation System Engineer, Advanced Automation System Professional, Advanced PLC Program Professional, and Electrical Control & Panel Designing.",
};

export default function IndustrialAutomationCategoryPage() {
  const courses = ALL_COURSES.filter(
    (c) => c.category === "industrial-automation"
  );

  return (
    <div>
      <PageHeader
        title="Industrial Automation"
        highlight="Training Tracks"
        description="Comprehensive plant automation and electrical control systems engineering. Master 24VDC wiring, Siemens & Allen-Bradley PLC programming, SCADA supervisory mimics, and panel fabrication."
        breadcrumbs={[
          { name: "Courses", href: "/courses" },
          { name: "Industrial Automation" },
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
