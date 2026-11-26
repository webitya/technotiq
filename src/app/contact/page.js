import PageHeader from "../../components/layout/PageHeader";
import ContactForm from "../../components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "../../components/icons";

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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contacts & Operations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#6803F5] uppercase mb-2">
                  Direct Communication
                </p>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Reach our engineering team.
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Our directors and senior technical trainers are directly accessible for
                  consultation, plant commissioning inquiries, and student enrollments.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-cyan-50 text-[#27B2DD]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase">
                      Call / WhatsApp
                    </span>
                  </div>
                  <a
                    href="tel:+916299916713"
                    className="text-lg font-bold text-slate-900 hover:text-[#6803F5] transition-colors"
                  >
                    +91 6299 916713
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Available Monday to Saturday, 9:00 AM – 7:30 PM IST
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-purple-50 text-[#6803F5]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase">
                      Email Inquiries
                    </span>
                  </div>
                  <a
                    href="mailto:technotiqautomation@gmail.com"
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#6803F5] transition-colors break-all"
                  >
                    technotiqautomation@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Official quotations, syllabus PDFs, and institutional proposals
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#276CB9]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase">
                      Headquarters & Laboratory
                    </span>
                  </div>
                  <p className="text-base font-bold text-slate-900">
                    Technotiq Automation Private Limited
                  </p>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Ranchi, Jharkhand, India
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    In-person laboratory walkthroughs available by prior appointment.
                  </p>
                </div>
              </div>

              {/* Lab Hours & Response Guarantee */}
              <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#6803F5] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="block text-slate-900 font-semibold mb-1">
                    Quick Technical Response Guarantee
                  </strong>
                  All project inquiries and student registration requests are answered within 24 hours
                  by an engineer, not an automated sales chatbot.
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="mb-8 pb-4 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Submit an Inquiry
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
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
