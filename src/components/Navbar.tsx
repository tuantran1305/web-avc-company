"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-sky-100">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="AVC" width={28} height={28} />
          <span className="font-semibold text-slate-800">AVC Electronics</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-base font-medium hover:text-sky-700 ${pathname === l.href ? "text-sky-700" : "text-slate-700"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
