import Hero from "../components/home/Hero";
import CourseCard from "../components/courses/CourseCard";
import GoogleReviewsMarquee from "../components/home/GoogleReviewsMarquee";
import FaqAccordion from "../components/ui/FaqAccordion";
import { ALL_COURSES } from "../data/coursesData";
import Link from "next/link";
import { ArrowRight } from "../components/icons";

export const metadata = {
  title: "Technotiq | Industrial Automation, IT Solutions & Training",
  description:
    "Explore the World of TECHNOTIQ. Transform technical skills into real-world expertise across Industrial Automation (PLC, SCADA, BMS, CCTV), Embedded Systems, AI and IT Services.",
};

const HOME_FAQS = [
  {
    question: "Do students work on real hardware or only simulation software?",
    answer:
      "Every trainee at Technotiq spends over 80% of their lab time on physical industrial hardware: wiring 24VDC circuits, programming Siemens S7-1200 and Allen-Bradley PLCs, calibrating 4-20mA sensors, and connecting live HMIs and SCADA systems. Simulation software is used for initial logic drafts, followed by mandatory hardware validation.",
  },
  {
    question: "What companies recruit from Technotiq's training programs?",
    answer:
      "Our alumni work across industrial system integrators, manufacturing plants (steel, cement, automotive, FMCG), building management contractors, smart infrastructure projects, and tech startups. We provide resume engineering, technical interview preparation, and direct placement drives.",
  },
  {
    question: "Can working professionals or corporate teams enroll in weekend batches?",
    answer:
      "Yes. We offer dedicated weekend cohorts and customized corporate training modules designed specifically for working electrical, electronics, instrumentation, and mechanical engineers looking to upgrade to advanced automation or industrial IoT.",
  },
  {
    question: "What IT services and enterprise automation does Technotiq provide?",
    answer:
      "Technotiq delivers end-to-end custom web and mobile software development, cloud API infrastructure, AI-driven workflow automation, CRM/ERP integration, and performance digital marketing to help modern enterprises streamline operations and scale revenue.",
  },
  {
    question: "Where is the Technotiq laboratory located and how can I visit?",
    answer:
      "Our central training facility and engineering center is located in Ranchi, Jharkhand, India. You can book a discovery call or schedule an in-person lab tour by calling +91 6299 916713 or emailing technotiqautomation@gmail.com.",
  },
];

export default function HomePage() {
  const industrialCourses = ALL_COURSES.filter(
    (c) => c.category === "industrial-automation"
  );
  const bmsCourses = ALL_COURSES.filter(
    (c) => c.category === "building-management-system"
  );

  return (
    <div>
      {/* 1. Hero Section matching brand screenshot with 3D crystal visual */}
      <Hero />

      {/* 2. Industrial Automation Courses Section */}
      <section className="py-12 sm:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-medium text-[#6803F5] uppercase tracking-wider block mb-1">
                Certification Track 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
                Industrial Automation Courses
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl">
                Hands-on laboratory training on authentic Siemens S7-1200, Allen-Bradley PLCs, multi-station SCADA, and turn-key electrical control panels.
              </p>
            </div>
            <Link
              href="/courses/industrial-automation"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:text-[#5502C7] transition-colors shrink-0"
            >
              <span>View All Industrial Tracks</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {industrialCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Building Management System (BMS) Section */}
      <section className="py-12 sm:py-16 bg-purple-50/60 border-t border-b border-purple-100 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-medium text-[#6803F5] uppercase tracking-wider block mb-1">
                Certification Track 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
                Building Management System (BMS) & Security
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl">
                Comprehensive engineering qualification across Direct Digital Controllers (DDC), HVAC chiller telemetry, and optical fiber IP CCTV surveillance networks.
              </p>
            </div>
            <Link
              href="/courses/building-management-system"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-[#6803F5] hover:text-[#5502C7] transition-colors shrink-0"
            >
              <span>View All BMS Tracks</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {bmsCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Google Reviews Infinite Left-to-Right Carousel */}
      <GoogleReviewsMarquee />

      {/* 5. FAQs Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100 font-normal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={HOME_FAQS}
            title="Frequently Asked Questions"
          />
        </div>
      </section>
    </div>
  );
}
