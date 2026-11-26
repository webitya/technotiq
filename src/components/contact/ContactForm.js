"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { ArrowRight, CheckCircle } from "../icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceInterest: "Industrial Automation (PLC / SCADA)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/60 border border-purple-200 text-slate-900 space-y-3 text-center">
        <div className="w-12 h-12 rounded-full bg-[#6803F5] text-white flex items-center justify-center mx-auto mb-2">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-slate-900">Inquiry Received Successfully</h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-normal">
          Thank you, {formData.name}. A senior technical advisor from Technotiq
          Automation will review your details and contact you at {formData.phone}{" "}
          within 24 business hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-normal text-[#6803F5] hover:underline cursor-pointer"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
      <div>
        <label htmlFor="name" className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        <div>
          <label htmlFor="phone" className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone number"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email address"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceInterest" className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1">
          Area of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal cursor-pointer"
        >
          <option value="Industrial Automation (PLC / SCADA)">Industrial Automation (PLC / SCADA)</option>
          <option value="BMS & Building Automation">BMS & Building Automation</option>
          <option value="IP CCTV & Surveillance Infrastructure">IP CCTV & Surveillance Infrastructure</option>
          <option value="Embedded Systems & Firmware">Embedded Systems & Firmware</option>
          <option value="Custom Software & Web Engineering">Custom Software & Web Engineering</option>
          <option value="AI Workflow Automation & Marketing">AI Workflow Automation & Marketing</option>
          <option value="Student Hands-on Training & Placement">Student Hands-on Training & Placement</option>
          <option value="Corporate / Plant Team Training">Corporate / Plant Team Training</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[11px] font-medium tracking-wide text-slate-600 mb-1">
          Your Project Scope or Inquiry
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your Message or requirements..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal placeholder:text-slate-400 resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={submitting}
        className="w-full justify-center !rounded-xl py-2.5 sm:py-3 cursor-pointer"
      >
        <span>{submitting ? "Sending..." : "Submit Inquiry"}</span>
        <ArrowRight className="w-4 h-4 ml-1.5" />
      </Button>

      <p className="text-[11px] text-center text-slate-400 font-normal">
        Your contact details remain confidential. Directly answered by engineers.
      </p>
    </form>
  );
}
