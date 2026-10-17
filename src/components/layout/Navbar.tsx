"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useReticleStore } from "@reticlehq/react/store";

import { navItems, portfolio } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useReticleStore("navigation", { mobileOpen });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" data-testid="nav-home" className="flex items-center gap-3" aria-label="Amjad Hasan home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 text-sm font-semibold text-sky-700 dark:text-sky-300">
            AH
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-800 dark:text-slate-100">AMJAD</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Open menu"
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600 md:hidden dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" suppressHydrationWarning />
            ) : (
              <Menu className="h-4 w-4" suppressHydrationWarning />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav id="mobile-navigation" data-testid="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${portfolio.email}`}
              data-testid="contact-me"
              className="mt-2 inline-flex rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500"
            >
              Contact me
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
