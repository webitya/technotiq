import Link from "next/link";
import Button from "../ui/Button";
import { Phone, Mail, ArrowRight } from "../icons";

export default function ConsultationCta() {
  return (
    <section className="py-10 sm:py-14 bg-slate-900 text-white relative overflow-hidden font-normal">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#6803F5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#27B2DD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="max-w-2xl space-y-2.5">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
              Ready to automate your operations or accelerate your engineering career?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Whether you need industrial system integration, custom software engineering,
              or hands-on automation training with placement assistance, our technical directors
              are here to assist you.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs sm:text-sm text-slate-300 font-normal">
              <a
                href="tel:+916299916713"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#27B2DD]" />
                <span>+91 6299 916713</span>
              </a>
              <a
                href="mailto:technotiqautomation@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6803F5]" />
                <span>technotiqautomation@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Button href="/contact" variant="accent" size="md" className="justify-center">
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href="/courses"
              variant="secondary"
              size="md"
              className="justify-center !bg-slate-800 !text-white !border-slate-700 hover:!bg-slate-700"
            >
              <span>Explore curriculum</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
