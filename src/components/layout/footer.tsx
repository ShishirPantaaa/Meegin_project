import Link from "next/link";
import { Mail, MapPin, Phone, Share2, Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import logo from "@/app/favicone.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md shadow-[#0091DA]/15">
              <Image
                src={logo}
                alt="MEegin Tours logo"
                className="object-cover"
                fill
              />
            </div>

            {/* Company Name */}
            <div>
              <p className="text-xl font-semibold text-[#172033]">
                MEegin Tours & Travels
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
            Nepal-based travel specialists designing premium journeys across mountains,
            culture and nature.
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Butwal, Nepal</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {siteConfig.phone}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {siteConfig.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Quick links</h3>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block transition hover:text-[#0091DA]">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Popular destinations</h3>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <Link href="/destinations/pokhara" className="block transition hover:text-[#0091DA]">Pokhara</Link>
            <Link href="/destinations/mustang" className="block transition hover:text-[#0091DA]">Mustang</Link>
            <Link href="/destinations/chitwan" className="block transition hover:text-[#0091DA]">Chitwan</Link>
            <Link href="/destinations/kathmandu" className="block transition hover:text-[#0091DA]">Kathmandu</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Follow us</h3>
          <div className="mt-6 flex items-center gap-4 text-slate-700">
            <Link href="#" aria-label="Social"><Share2 className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Website"><Globe className="h-5 w-5" /></Link>
          </div>
          <div className="mt-8 text-sm text-slate-500">
            <Link href="/privacy" className="block hover:text-[#0091DA]">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-[#0091DA]">Terms & Conditions</Link>
            <Link href="/refund" className="block hover:text-[#0091DA]">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MEegin Tours & Travels. All rights reserved.
      </div>
    </footer>
  );
}
