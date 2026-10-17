import { ArrowRight, BookOpenText, BriefcaseBusiness, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { portfolio, profileStats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300">
            Hello, I&apos;m {portfolio.name}
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {portfolio.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {portfolio.intro}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            I combine academic learning in ICT with practical exposure to business communication, customer needs, and software problem-solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500">
              Explore My Projects
              <ArrowRight className="h-4 w-4" suppressHydrationWarning />
            </Link>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-sky-400">
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-sky-400">
              <GitBranch className="h-4 w-4" suppressHydrationWarning />
              GitHub
            </a>
            {portfolio.linkedinUrl ? (
              <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-sky-400">
                <BriefcaseBusiness className="h-4 w-4" suppressHydrationWarning />
                LinkedIn
              </a>
            ) : null}
            {portfolio.cvUrl ? (
              <a href={portfolio.cvUrl} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-sky-400">
                <BookOpenText className="h-4 w-4" suppressHydrationWarning />
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">portfolio.dev</span>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700">
                  <Image
                    src="/images/amjad-hasan.png"
                    alt="Amjad Hasan"
                    width={768}
                    height={1318}
                    className="h-full w-full object-cover"
                    priority
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Focus</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Software + business thinking</p>
                </div>

                <div className="space-y-3">
                  {profileStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
