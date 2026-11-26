"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
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
    batchSlot: "Regular Weekday Intensive (Mon-Fri)",
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

      {/* 4. Compact Course Enquiry Form Section */}
      <section
        id="course-enquiry-section"
        className="py-12 sm:py-16 bg-purple-50/70 border-t border-purple-100 font-normal scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#6803F5] text-xs font-mono font-medium shadow-2xs mb-2">
              Course Admission Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight leading-tight">
              Enquire About a Training Program
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Clicking &ldquo;Enquiry&rdquo; on any course above automatically selects your chosen program below. Our mentors will share the syllabus and batch slots.
            </p>
          </div>

          {/* Form Card with subtle pulse when triggered via card click */}
          <div
            className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 shadow-sm ${
              isHighlighted
                ? "border-[#6803F5] ring-4 ring-[#6803F5]/15 shadow-xl shadow-purple-500/10"
                : "border-purple-100 hover:border-purple-200"
            }`}
          >
            {/* Auto-selected course indicator pill */}
            <div className="mb-5 p-3 rounded-2xl bg-purple-50/80 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6803F5] animate-pulse shrink-0" />
                <span className="text-xs text-slate-600 font-normal">Inquiring for:</span>
                <span className="text-xs sm:text-sm font-medium text-[#6803F5]">
                  {selectedCourse}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal">
                Instant faculty response within 24h
              </span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#6803F5] text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-slate-900">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                  Thank you, <strong className="text-slate-900">{formData.name || "Student"}</strong>. We have received your inquiry for <strong className="text-slate-900">{selectedCourse}</strong>. Our training counselor will reach you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        batchSlot: "Regular Weekday Intensive (Mon-Fri)",
                        message: "",
                      });
                    }}
                    className="text-xs font-medium text-[#6803F5] hover:underline cursor-pointer"
                  >
                    Submit another course enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Selected Course Dropdown */}
                <div>
                  <label
                    htmlFor="course-select"
                    className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
                  >
                    Select Program / Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course-select"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal cursor-pointer"
                  >
                    <optgroup label="Industrial Automation Tracks">
                      {industrialCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Building Management System (BMS) Tracks">
                      {bmsCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* 2. Full Name & Phone/WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* 3. Email & Preferred Batch Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-batch"
                      className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
                    >
                      Preferred Batch Slot
                    </label>
                    <select
                      id="enquiry-batch"
                      name="batchSlot"
                      value={formData.batchSlot}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal cursor-pointer"
                    >
                      <option value="Regular Weekday Intensive (Mon-Fri)">
                        Regular Weekday Intensive (Mon-Fri)
                      </option>
                      <option value="Weekend Professional Cohort (Sat-Sun)">
                        Weekend Professional Cohort (Sat-Sun)
                      </option>
                      <option value="Corporate / Custom Schedule">
                        Corporate / Custom Schedule
                      </option>
                    </select>
                  </div>
                </div>

                {/* 4. Optional Message */}
                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1"
                  >
                    Questions or Notes (Optional)
                  </label>
                  <input
                    type="text"
                    id="enquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Inquiring for lab slot, hostel accommodation, or syllabus"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-xl bg-[#6803F5] hover:bg-[#5502C7] text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-70 group"
                  >
                    <span>
                      {submitting
                        ? "Submitting Course Enquiry..."
                        : `Submit Enquiry for ${selectedCourse}`}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

            {/* Direct Quick WhatsApp / Call Alternative */}
            <div className="mt-6 pt-5 border-t border-purple-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <a
                href={`https://wa.me/916299916713?text=${encodeURIComponent(
                  `Hi Technotiq Team, I would like to enquire about the "${selectedCourse}" course.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors font-medium"
              >
                <WhatsApp className="w-4 h-4 text-[#25D366]" />
                <span>Quick WhatsApp: +91 6299 916713</span>
              </a>

              <a
                href="tel:+916299916713"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#6803F5] font-normal transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Direct Counselor Desk: +91 6299 916713</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
