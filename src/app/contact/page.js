import PageHeader from "../../components/layout/PageHeader";
import ContactForm from "../../components/contact/ContactForm";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "../../components/icons";

export const metadata = {
  title: "Contact Us | Technotiq Automation Private Limited",
  description:
    "Get in touch with Technotiq Automation in Ranchi, Jharkhand. Phone: +91 6299 916713, Email: technotiqautomation@gmail.com. Schedule a lab visit or project consultation.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        highlight="Technotiq"
        description="Connect directly with our engineering directors. Whether commissioning an automation facility or scheduling an in-person laboratory walkthrough, we are ready."
        breadcrumbs={[{ name: "Contact" }]}
      />

      <section className="py-12 sm:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Direct Contacts & Operations - Compact, No Heading Badge */}
            <div className="lg:col-span-5 space-y-6 font-normal">
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                  Reach our engineering team.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our directors and senior technical trainers are directly accessible for
                  consultation, plant commissioning inquiries, and student enrollments.
                </p>
              </div>

              {/* Direct WhatsApp Quick Contact Pill */}
              <a
                href="https://wa.me/916299916713?text=Hi%20Technotiq%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-mono">
                    WA
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium block">Chat directly on WhatsApp</span>
                    <span className="text-xs text-emerald-700">+91 6299 916713 • Instant Response</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Cards - Compact */}
              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-xl bg-cyan-50 text-[#27B2DD]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-normal">
                      Call / Direct Desk
                    </span>
                  </div>
                  <a
                    href="tel:+916299916713"
                    className="text-base sm:text-lg font-medium text-slate-900 hover:text-[#6803F5] transition-colors"
                  >
                    +91 6299 916713
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Available Monday to Saturday, 9:00 AM – 7:30 PM IST
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-xl bg-purple-50 text-[#6803F5]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-normal">
                      Email Inquiries
                    </span>
                  </div>
                  <a
                    href="mailto:technotiqautomation@gmail.com"
                    className="text-sm sm:text-base font-medium text-slate-900 hover:text-[#6803F5] transition-colors break-all"
                  >
                    technotiqautomation@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Official quotations, syllabus PDFs, and institutional proposals
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-xl bg-blue-50 text-[#276CB9]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-normal">
                      Headquarters & Training Facility
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-900">
                    Technotiq Automation Private Limited
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
                    Ranchi, Jharkhand, India
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 font-normal">
                    Open Lab Tours: Daily at 11:30 AM & 4:30 PM by prior appointment.
                  </p>
                </div>
              </div>

              {/* Lab Hours & Response Guarantee */}
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#6803F5] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed font-normal">
                  <span className="block text-slate-900 font-medium mb-0.5">
                    Quick Technical Response Guarantee
                  </span>
                  All project inquiries and student registration requests are answered within 24 hours
                  by an engineer, not an automated sales chatbot.
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form - Compact */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-200/30">
                <div className="mb-6 pb-3 border-b border-slate-100">
                  <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                    Submit an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Tell us about your automation project, corporate training needs, or career enrollment.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
