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
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-purple-50/60 border border-purple-200 text-slate-900 space-y-4 text-center">
        <div className="w-14 h-14 rounded-full bg-[#6803F5] text-white flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-medium text-slate-900">Inquiry Received Successfully</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-normal">
          Thank you, {formData.name}. A senior technical advisor from Technotiq
          Automation will review your details and contact you at {formData.phone}{" "}
          within 24 business hours.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-normal text-[#6803F5] hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-normal uppercase tracking-wider text-slate-600 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-normal uppercase tracking-wider text-slate-600 mb-2">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-normal uppercase tracking-wider text-slate-600 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul@example.com"
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceInterest" className="block text-xs font-normal uppercase tracking-wider text-slate-600 mb-2">
          Primary Area of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal"
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
        <label htmlFor="message" className="block text-xs font-normal uppercase tracking-wider text-slate-600 mb-2">
          Your Project Scope or Training Inquiry
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your plant requirements, technical questions, or batch preferences..."
          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#6803F5] focus:bg-white transition-colors font-normal"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full justify-center !rounded-full"
      >
        <span>{submitting ? "Sending details..." : "Submit discovery inquiry"}</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </Button>

      <p className="text-xs text-center text-slate-400 font-normal">
        Your contact details remain confidential. No spam, only direct technical responses.
      </p>
    </form>
  );
}
