"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import logo from "@/app/favicone.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white shadow-md shadow-[#0091DA]/15 sm:h-12 sm:w-12 sm:rounded-2xl">
            <Image src={logo} alt="MEegin Tours logo" className="object-cover" fill />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-[#004AB8] sm:text-sm sm:tracking-[0.18em]">
              MEegin Tours &amp; Travels
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">Nepal Travel &amp; Hospitality</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition hover:text-[#0091DA]",
                pathname === link.href ? "text-[#0091DA]" : "text-slate-700"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/9779748809397"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0091DA] hover:text-[#0091DA]"
          >
            <Image src="/images/whatsapp.webp" alt="WhatsApp" width={22} height={22} className="h-5.5 w-5.5 object-contain" />
          </a>
          <a
            href="https://www.instagram.com/meegintoursandtravel?stkn=OWJvY2d2cXQyNjJm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#0091DA] hover:text-[#0091DA]"
          >
            <Image src="/images/instagram-logo.webp" alt="Instagram" width={22} height={22} className="h-5.5 w-5.5 object-contain" />
          </a>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#0091DA]"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-[#0091DA]">
            Login
          </Link>
          <Link
            href="/booking/pokhara-adventure"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#0091DA] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[calc(100vh-60px)] overflow-y-auto" : "max-h-0"
        )}
        aria-hidden={!open}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white px-4 pb-6 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-slate-50",
                pathname === link.href ? "bg-[#EAF7FD] text-[#0091DA]" : "text-slate-700"
              )}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/login"
            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <div className="flex items-center justify-center gap-3 pt-3">
            <a
              href="https://wa.me/9779748809397"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-[#0091DA]"
              onClick={() => setOpen(false)}
            >
              <Image src="/images/whatsapp.webp" alt="WhatsApp" width={22} height={22} className="h-5.5 w-5.5 object-contain" />
            </a>
            <a
              href="https://www.instagram.com/meegintoursandtravel?stkn=OWJvY2d2cXQyNjJm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-[#0091DA]"
              onClick={() => setOpen(false)}
            >
              <Image src="/images/instagram-logo.webp" alt="Instagram" width={22} height={22} className="h-5.5 w-5.5 object-contain" />
            </a>
          </div>
          <div className="pt-2">
            <Link
              href="/booking/pokhara-adventure"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0091DA] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8]"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
