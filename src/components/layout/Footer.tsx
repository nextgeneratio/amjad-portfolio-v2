import Link from "next/link";

import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-300">
        <p>© {currentYear} {portfolio.name}. Built with Next.js and tailored for practical software work.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#projects" className="transition hover:text-sky-600 dark:hover:text-sky-400">Projects</Link>
          <Link href="#about" className="transition hover:text-sky-600 dark:hover:text-sky-400">About</Link>
          <a href={`mailto:${portfolio.email}`} className="transition hover:text-sky-600 dark:hover:text-sky-400">Email</a>
        </div>
      </div>
    </footer>
  );
}
