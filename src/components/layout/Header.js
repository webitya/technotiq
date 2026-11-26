"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { ArrowRight, Menu, X } from "../icons";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-44">
              <Image
                src="/technotiq-logo.webp"
                alt="Technotiq Automation Private Limited"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 140px, 176px"
              />
            </div>
          </Link>

          {/* Clean Pill Navigation in Center */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-50/70 p-1 rounded-full border border-slate-200/50">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#6803F5] bg-white shadow-xs font-medium"
                      : "text-slate-600 hover:text-slate-900 font-normal hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA on Right - Matching Original Screenshot Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 font-normal shadow-lg">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base transition-colors ${
                    isActive
                      ? "text-[#6803F5] bg-purple-50 font-medium"
                      : "text-slate-700 hover:bg-slate-50 font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="text-xs text-slate-500 px-3 py-1">
              <span>Direct: </span>
              <a href="tel:+916299916713" className="text-[#6803F5] hover:underline">
                +91 6299 916713
              </a>
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center mt-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
