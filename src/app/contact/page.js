import PageHeader from "../../components/layout/PageHeader";
import ContactForm from "../../components/contact/ContactForm";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, WhatsApp } from "../../components/icons";

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

      <section className="py-8 sm:py-10 lg:py-12 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Direct Contacts & Operations - Compact UI/UX */}
            <div className="lg:col-span-5 space-y-4 font-normal">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">
                  Reach our engineering team.
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our directors and senior technical trainers are directly accessible for
                  consultation, plant commissioning inquiries, and student enrollments.
                </p>
              </div>

              {/* Direct WhatsApp Quick Contact Pill with REAL WhatsApp Icon */}
              <a
                href="https://wa.me/916299916713?text=Hi%20Technotiq%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-emerald-900 hover:bg-emerald-100/90 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <WhatsApp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium block leading-tight">Chat directly on WhatsApp</span>
                    <span className="text-[11px] text-emerald-700 font-normal">+91 6299 916713 • Instant Response</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Contact Cards - Compact with Real Icons */}
              <div className="space-y-2.5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#6803F5] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Call / Direct Desk</span>
                      <a
                        href="tel:+916299916713"
                        className="text-xs sm:text-sm font-medium text-slate-900 hover:text-[#6803F5] transition-colors truncate block"
                      >
                        +91 6299 916713
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap font-normal">
                    Mon–Sat, 9AM–7:30PM
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#27B2DD] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Email Inquiries</span>
                      <a
                        href="mailto:technotiqautomation@gmail.com"
                        className="text-xs sm:text-sm font-medium text-slate-900 hover:text-[#6803F5] transition-colors truncate block"
                      >
                        technotiqautomation@gmail.com
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap font-normal">
                    Official Proposals
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#276CB9] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Lab Facility</span>
                      <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">
                        Ranchi, Jharkhand, India
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap font-normal">
                    Tours by Appointment
                  </span>
                </div>
              </div>

              {/* Quick Response Guarantee - Compact */}
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#6803F5] shrink-0" />
                <p className="text-xs text-slate-600 font-normal leading-normal">
                  <strong className="font-medium text-slate-900">24-Hour Response:</strong> Inquiries are answered directly by a technical engineer.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form - Compact UI/UX */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
                <div className="mb-4 pb-2.5 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 tracking-tight">
                    Submit an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
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
