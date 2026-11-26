"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import GeometricHeroVisual from "../home/GeometricHeroVisual";
import { ALL_COURSES } from "../../data/coursesData";
import { ArrowRight, CheckCircle, WhatsApp, Phone } from "../icons";

const BATCH_TIMINGS = [
  {
    track: "Regular Weekday Intensive",
    days: "Monday to Friday",
    hours: "3 Hours / Day (Morning & Afternoon slots)",
    idealFor: "Diploma & Degree freshers seeking immediate industrial plant placement",
  },
  {
    track: "Weekend Professional Cohort",
    days: "Saturday & Sunday",
    hours: "5 Hours / Day (Intensive lab practice)",
    idealFor: "Working engineers, plant technicians & supervisors upgrading skills",
  },
  {
    track: "Corporate Customized Batch",
    days: "Flexible Scheduling",
    hours: "Tailored to plant shutdown & shift timings",
    idealFor: "Factory maintenance teams, panel fabrication units & facility engineers",
  },
];

export default function CoursesInteractiveView() {
  const industrialCourses = ALL_COURSES.filter(
    (c) => c.category === "industrial-automation"
  );
  const bmsCourses = ALL_COURSES.filter(
    (c) => c.category === "building-management-system"
  );

  const [selectedCourse, setSelectedCourse] = useState(
    ALL_COURSES[0]?.title || "Automation System Engineer"
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    batchSlot: "Weekday (Mon-Fri)",
    message: "",
  });
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // When an "Enquiry" button is clicked on any course card:
  // 1. Automatically selects that specific course in the enquiry form
  // 2. Smoothly scrolls down to the compact enquiry form section
  // 3. Briefly highlights the form for immediate visual confirmation
  const handleEnquire = (course) => {
    setSelectedCourse(course.title);
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 2000);

    const formEl = document.getElementById("course-enquiry-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="space-y-0">
      {/* 1. First Section: Industrial Automation Courses */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
              Industrial Automation Courses
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
              Hands-on laboratory training on authentic Siemens S7-1200, Allen-Bradley PLCs, multi-station SCADA, and turn-key electrical control panels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {industrialCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                actionType="enquiry"
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Second Section: Building Management System (BMS) Courses */}
      <section className="py-10 sm:py-14 lg:py-16 bg-purple-50/60 border-t border-b border-purple-100 font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
              Building Management System (BMS) & Security
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
              Comprehensive engineering qualification across Direct Digital Controllers (DDC), HVAC chiller telemetry, and optical fiber IP CCTV surveillance networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {bmsCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                actionType="enquiry"
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Cohort Schedules Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Cohort schedules designed for students and working professionals.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal">
              Choose between immersive weekday sessions or hands-on weekend workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {BATCH_TIMINGS.map((b, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <span className="text-xs font-mono font-medium text-[#6803F5] block">
                  {b.days}
                </span>
                <h3 className="text-base font-medium text-slate-900">{b.track}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">{b.hours}</p>
                <div className="pt-2.5 border-t border-purple-50 text-xs text-slate-500 font-normal">
                  <span className="text-slate-700 block mb-0.5">Recommended For:</span>
                  {b.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact Course Enquiry Section: Homepage Right Element on Left & Simple Form on Right */}
      <section
        id="course-enquiry-section"
        className="py-12 sm:py-16 bg-purple-50/50 border-t border-purple-100 font-normal scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Homepage Right Element (3D Geometric Visual) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:text-left">
              <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
                <GeometricHeroVisual />
              </div>
            </div>

            {/* Right Column: Clean, Compact, Authentic Enquiry Form */}
            <div className="lg:col-span-7">
              <div
                className={`bg-white p-5 sm:p-7 rounded-2xl border transition-all duration-300 shadow-xs ${
                  isHighlighted
                    ? "border-[#6803F5] ring-2 ring-[#6803F5]/20 shadow-md"
                    : "border-slate-200"
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                    Course Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Fill in your details below and our faculty will share the syllabus and upcoming batch dates.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-6 text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-medium text-slate-900">Enquiry Received</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                      Thanks {formData.name || ""}, our team will contact you at {formData.phone} regarding the {selectedCourse} course.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#6803F5] hover:underline pt-2 cursor-pointer font-normal"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Selected Course Dropdown */}
                    <div>
                      <label
                        htmlFor="course-select"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Selected Course <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="course-select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors cursor-pointer font-normal"
                      >
                        <optgroup label="Industrial Automation">
                          {industrialCourses.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Building Management System (BMS)">
                          {bmsCourses.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    {/* Full Name & Phone/WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block text-xs font-medium text-slate-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="enquiry-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-xs font-medium text-slate-700 mb-1"
                        >
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="enquiry-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your Phone number"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Email & Preferred Batch Slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="enquiry-email"
                          className="block text-xs font-medium text-slate-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="enquiry-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your Email address"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-batch"
                          className="block text-xs font-medium text-slate-700 mb-1"
                        >
                          Preferred Batch
                        </label>
                        <select
                          id="enquiry-batch"
                          name="batchSlot"
                          value={formData.batchSlot}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors cursor-pointer font-normal"
                        >
                          <option value="Weekday (Mon-Fri)">
                            Weekday (Mon–Fri)
                          </option>
                          <option value="Weekend (Sat-Sun)">
                            Weekend (Sat–Sun)
                          </option>
                          <option value="Flexible / Corporate">
                            Flexible / Corporate
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <label
                        htmlFor="enquiry-message"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Message (optional)
                      </label>
                      <input
                        type="text"
                        id="enquiry-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any questions about batches, fees, or syllabus?"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-2.5 px-5 rounded-xl bg-[#6803F5] hover:bg-[#5502C7] text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-70"
                      >
                        <span>
                          {submitting ? "Submitting..." : "Send Course Enquiry"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Direct WhatsApp / Call Helpline */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-500 font-normal">
                  <a
                    href={`https://wa.me/916299916713?text=${encodeURIComponent(
                      `Hi Technotiq Team, I would like to enquire about the "${selectedCourse}" course.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    <WhatsApp className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Or chat on WhatsApp: +91 6299 916713</span>
                  </a>

                  <a
                    href="tel:+916299916713"
                    className="inline-flex items-center gap-1 text-slate-500 hover:text-[#6803F5] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Direct Desk: +91 6299 916713</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
