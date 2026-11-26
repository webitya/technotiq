"use client";

import { useState, useEffect } from "react";
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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.12),0_2px_6px_-1px_rgba(15,23,42,0.08)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
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
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Right-to-Left Slide Drawer */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-[visibility] duration-300 ${
            mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          {/* Backdrop overlay with fade in/out */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-out ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Sliding Panel: Slides from Right to Left, Slides back Left to Right on close */}
          <aside
            className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between p-6 z-10 transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>
              {/* Top drawer bar with brand logo & close button */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="relative h-9 w-36">
                  <Image
                    src="/technotiq-logo.webp"
                    alt="Technotiq"
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5 pt-5">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                        isActive
                          ? "text-[#6803F5] bg-purple-50/80 font-medium"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-normal"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6803F5]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Drawer Contact Details & CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3.5">
              <div className="space-y-1.5 text-xs text-slate-500 font-normal">
                <div className="flex items-center justify-between">
                  <span>Direct Support:</span>
                  <a href="tel:+916299916713" className="text-[#6803F5] hover:underline font-medium">
                    +91 6299 916713
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Inquiries:</span>
                  <a href="mailto:technotiqautomation@gmail.com" className="text-slate-700 hover:underline">
                    Email Desk
                  </a>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </aside>
        </div>
      </header>

      {/* Spacer so page content starts cleanly below the fixed navbar without being covered */}
      <div className="h-16 sm:h-[72px]" aria-hidden="true" />
    </>
  );
  );
}
