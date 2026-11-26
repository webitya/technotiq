import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "../../../components/layout/PageHeader";
import Button from "../../../components/ui/Button";
import { ALL_COURSES } from "../../../data/coursesData";
import {
  Clock,
  CheckCircle,
  Cpu,
  Award,
  ArrowRight,
  ArrowLeft,
  Phone,
  ShieldCheck,
} from "../../../components/icons";

export function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} | ${course.categoryName} Training at Technotiq`,
    description: course.overview,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = ALL_COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={course.title}
        description={course.overview}
        breadcrumbs={[
          { name: "Courses", href: "/courses" },
          { name: course.categoryName, href: `/courses/${course.category}` },
          { name: course.title },
        ]}
      />

      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Content Area: 8 Columns */}
            <div className="lg:col-span-8 space-y-10">
              {/* Back to Catalog Link */}
              <div>
                <Link
                  href={`/courses/${course.category}`}
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  <span>Back to {course.categoryName} Courses</span>
                </Link>
              </div>

              {/* Core Highlights */}
              <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-100 space-y-3">
                <h2 className="text-base font-medium text-slate-900">
                  Key Engineering Competencies Acquired
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {course.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#6803F5] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comprehensive Syllabus Modules */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                  Detailed Syllabus Curriculum
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Every module consists of classroom theory, circuit wiring, logic design, and physical validation on live hardware test benches.
                </p>

                <div className="space-y-4 pt-2">
                  {course.modules.map((mod, modIdx) => (
                    <div
                      key={modIdx}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#6803F5] text-white flex items-center justify-center text-xs font-mono font-medium shrink-0">
                          {modIdx + 1}
                        </span>
                        <h3 className="text-base font-medium text-slate-900">
                          {mod.title}
                        </h3>
                      </div>

                      <ul className="space-y-2 pl-8 border-l border-purple-200/60 ml-3">
                        {mod.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6803F5] mt-1.5 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Rigs & Software Specifications */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-[#27B2DD]" />
                  <h2 className="text-lg font-medium text-slate-900">
                    Hardware Equipment & Software Suite Installed
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Physical Hardware Rigs:</span>
                    <p className="text-slate-800 font-normal">{course.hardware}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">Software Platforms & Tools:</span>
                    <p className="text-slate-800 font-normal">{course.software}</p>
                  </div>
                </div>
              </div>

              {/* Practical Capstone Project */}
              <div className="p-6 rounded-3xl bg-purple-50/80 border border-purple-100 space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#6803F5]" />
                  <h2 className="text-base sm:text-lg font-medium text-slate-900">
                    Industry Capstone Engineering Project
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {course.capstone}
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar: 4 Columns */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Course Metadata Card */}
                <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-500/5 space-y-5">
                  <h3 className="text-lg font-medium text-slate-900 pb-3 border-b border-slate-100">
                    Program Overview
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm font-normal">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Duration:</span>
                      <span className="text-slate-900 font-medium text-right">{course.duration}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Training Track:</span>
                      <span className="text-slate-900 font-medium text-right">{course.categoryName}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Level:</span>
                      <span className="text-slate-900 font-medium text-right">{course.level}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Practical Lab Time:</span>
                      <span className="text-[#6803F5] font-medium text-right">80%+ Physical Hardware</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Placement Support:</span>
                      <span className="text-emerald-700 font-medium text-right">100% Assistance</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="md"
                      className="w-full justify-center !rounded-full"
                    >
                      <span>Enroll in upcoming cohort</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>

                    <a
                      href="https://wa.me/916299916713?text=Hi%20Technotiq%20Team%2C%20I%20am%20interested%20in%20enrolling%20in%20the%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium flex items-center justify-center hover:bg-emerald-100 transition-colors"
                    >
                      <span>Chat on WhatsApp (+91 6299 916713)</span>
                    </a>
                  </div>
                </div>

                {/* Lab Walkthrough Guarantee */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#6803F5] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed font-normal">
                    <span className="block text-slate-900 font-medium mb-0.5">
                      Free In-Person Lab Inspection
                    </span>
                    You can visit our Ranchi engineering lab to inspect this exact hardware rack in person before enrolling.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
