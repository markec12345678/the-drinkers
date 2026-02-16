"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#o-nas", label: "O nas" },
  { href: "#galerija", label: "Galerija" },
  { href: "#glasba", label: "Glasba" },
  { href: "#koncerti", label: "Koncerti" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-amber-900/50 bg-black/98 backdrop-blur supports-[backdrop-filter]:bg-black/95 shadow-[0_4px_20px_rgba(217,119,6,0.1)]">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-rye text-lg tracking-widest text-amber-500 transition-all hover:text-amber-400 md:text-xl"
          style={{ textShadow: "1px 1px 0 #991b1b" }}
        >
          THE DRINKERS
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-semibold text-amber-200/80 transition-colors hover:text-amber-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-[width] after:duration-200 hover:after:w-full after:content-['']"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-amber-400 hover:bg-amber-500/20"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Odpri meni"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-amber-900/30 bg-black transition-all duration-300",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-4 py-3 font-medium text-amber-200/90 hover:bg-amber-500/20 hover:text-amber-400"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
