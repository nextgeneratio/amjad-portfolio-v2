import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";

import type { Project } from "@/data/projects";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/#projects" data-testid="project-details-back" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
        <ArrowLeft className="h-4 w-4" suppressHydrationWarning />
        Back to projects
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className={`h-56 bg-gradient-to-r ${project.accent} p-6 sm:h-72`}>
          <div className="flex h-full items-end rounded-2xl border border-white/20 bg-slate-950/20 p-6 backdrop-blur-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Case study</p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">{project.name}</h1>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[1.5fr_0.8fr] lg:p-10">
          <article className="space-y-8 text-slate-700 dark:text-slate-200">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
              <p className="mt-3 leading-8">{project.summary}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Problem</h2>
              <p className="mt-3 leading-8">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Implemented solution</h2>
              <p className="mt-3 leading-8">{project.detail}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Key features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/80">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Status</p>
              <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">{project.status}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a href={project.repositoryUrl} data-testid="project-repository" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-sky-500 dark:hover:bg-sky-400">
                <GitBranch className="h-4 w-4" suppressHydrationWarning />
                View repository
              </a>
              {project.demoUrl ? (
                <a href={project.demoUrl} data-testid="project-demo" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100">
                  <ExternalLink className="h-4 w-4" suppressHydrationWarning />
                  Visit live demo
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
