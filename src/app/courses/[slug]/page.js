import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

  const imageSrc = course.image || `/images/courses/${course.slug}.jpg`;

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
              {/* Back to Category Link */}
              <div>
                <Link
                  href={`/courses/${course.category}`}
                  className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  <span>Back to {course.categoryName} Courses</span>
                </Link>
              </div>

              {/* Featured Course Image Banner */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-purple-100 shadow-md bg-purple-50">
                <Image
                  src={imageSrc}
                  alt={course.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
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
                  Every module combines electrical engineering theory with mandatory physical bench wiring and PLC debug time.
                </p>

                <div className="space-y-4 pt-2">
                  {course.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-purple-200 transition-all space-y-3"
                    >
                      <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-purple-50 text-[#6803F5] text-xs flex items-center justify-center font-mono font-medium">
                          {idx + 1}
                        </span>
                        <span>{m.title}</span>
                      </h3>
                      <ul className="space-y-2 pl-8 font-normal">
                        {m.topics.map((t, tIdx) => (
                          <li key={tIdx} className="text-xs sm:text-sm text-slate-600 list-disc">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Project Card */}
              {course.capstone && (
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-50/90 to-cyan-50/40 border border-purple-100 space-y-2">
                  <div className="flex items-center gap-2 text-[#6803F5] text-xs font-mono font-medium">
                    <Award className="w-4 h-4" />
                    <span>MANDATORY INDUSTRY CAPSTONE PROJECT</span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">
                    Production Commissioning Benchmark
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {course.capstone}
                  </p>
                </div>
              )}
            </div>

            {/* Right Sidebar: 4 Columns Sticky Enrollment Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-xl shadow-purple-950/5 space-y-6">
                  <div>
                    <span className="text-xs font-mono font-medium text-[#6803F5] uppercase tracking-wider block mb-1">
                      Program Credentials
                    </span>
                    <h3 className="text-xl font-medium text-slate-900 leading-snug">
                      {course.title}
                    </h3>
                  </div>

                  <div className="space-y-3.5 pt-4 border-t border-slate-100 text-xs sm:text-sm font-normal">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#27B2DD]" />
                        Duration
                      </span>
                      <span className="text-slate-900 font-medium">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#6803F5]" />
                        Track Level
                      </span>
                      <span className="text-slate-900 font-medium">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Certification
                      </span>
                      <span className="text-emerald-700 font-medium">Technotiq Certified</span>
                    </div>
                  </div>

                  {/* Hardware test bed */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 font-normal">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Dedicated Hardware Rig
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {course.hardware}
                    </p>
                  </div>

                  {/* Software toolchains */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 font-normal">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Industry Software
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {course.software}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center !rounded-full shadow-md shadow-purple-600/20"
                    >
                      <span>Enroll in Next Cohort</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>

                    <a
                      href="tel:+916299916713"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#6803F5]" />
                      <span>Direct Desk: +91 6299 916713</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 font-normal">
                    Flexible weekday and weekend batches available with 100% lab access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
