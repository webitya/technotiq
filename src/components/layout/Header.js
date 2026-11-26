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

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.12),0_2px_6px_-1px_rgba(15,23,42,0.08)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo on Left */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-40 sm:h-11 sm:w-44">
                <Image
                  src="/technotiq-logo.webp"
                  alt="Technotiq Automation Private Limited"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 160px, 176px"
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
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts cleanly below the fixed navbar without being covered */}
      <div className="h-16 sm:h-[72px]" aria-hidden="true" />

      {/* Mobile Drawer - Rendered as a TOP-LEVEL sibling outside <header> to ensure full viewport height, independent z-index, and zero filter inheritance */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Full-screen dark backdrop overlay with tap to close */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Solid white sliding drawer panel from right edge to left */}
        <aside
          className={`fixed top-0 right-0 bottom-0 h-full h-[100dvh] w-[310px] max-w-[85vw] shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#ffffff" }}
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
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
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
                        ? "text-[#6803F5] bg-purple-50 font-medium"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-normal"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6803F5]" />}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Course Category Links */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="px-4 text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-2">
                Course Tracks
              </p>
              <div className="flex flex-col space-y-1">
                <Link
                  href="/courses/industrial-automation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-xs rounded-lg text-slate-600 hover:text-[#6803F5] hover:bg-purple-50/60 transition-colors"
                >
                  Industrial Automation
                </Link>
                <Link
                  href="/courses/building-management-system"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-xs rounded-lg text-slate-600 hover:text-[#6803F5] hover:bg-purple-50/60 transition-colors"
                >
                  Building Management System
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Drawer CTA */}
          <div className="pt-5 border-t border-slate-100 mt-6">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center !rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
