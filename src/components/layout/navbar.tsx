"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import logo from "@/app/favicone.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-md shadow-[#0091DA]/15">
            <Image src={logo} alt="MEegin Tours logo" className="object-cover" fill />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#004AB8]">
              MEegin Tours & Travels
            </p>
            <p className="text-xs text-slate-500">Nepal Travel & Hospitality</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#0091DA]">
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#0091DA]">
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-[#0091DA]">
            Login
          </Link>
          <Link
            href="/booking/pokhara-adventure"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0091DA] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-[#004AB8] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("lg:hidden overflow-hidden transition-all duration-300", open ? "max-h-96" : "max-h-0")}>
        <div className="space-y-3 border-t border-slate-200 bg-white px-4 pb-5 pt-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              {link.title}
            </Link>
          ))}
          <Link href="/login" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            Login
          </Link>
          <Link
            href="/booking/pokhara-adventure"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0091DA] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
