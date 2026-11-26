"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { ArrowRight, Phone, Mail, Menu, X } from "../icons";

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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top micro-bar for quick phone/email contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="font-normal tracking-tight text-slate-400">
            Industrial Automation • Enterprise IT Solutions • Advanced Technical Training
          </p>
          <div className="flex items-center space-x-6 font-normal">
            <a
              href="tel:+916299916713"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#27B2DD]" />
              <span>+91 6299 916713</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:technotiqautomation@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#6803F5]" />
              <span>technotiqautomation@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-[#6803F5] bg-purple-50/80 font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
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
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 font-normal">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base transition-colors ${
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

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+916299916713"
              className="flex items-center gap-2 text-sm text-slate-600 px-3 py-1.5"
            >
              <Phone className="w-4 h-4 text-[#27B2DD]" />
              <span>+91 6299 916713</span>
            </a>
            <a
              href="mailto:technotiqautomation@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-600 px-3 py-1.5"
            >
              <Mail className="w-4 h-4 text-[#6803F5]" />
              <span>technotiqautomation@gmail.com</span>
            </a>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center mt-2"
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
