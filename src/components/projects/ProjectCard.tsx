import Link from "next/link";
import { ArrowUpRight, GitBranch, Link2 } from "lucide-react";

import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-testid={`project-card-${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-700">
      <div className={`h-40 bg-gradient-to-br ${project.accent} p-5`}>
        <div className="flex h-full items-end justify-between rounded-xl border border-white/20 bg-slate-950/20 p-4 backdrop-blur-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/80">Project</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
          </div>
          <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 pt-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <a href={project.repositoryUrl} data-testid="project-repository" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-sky-600 transition hover:text-sky-500 dark:text-sky-400">
              <GitBranch className="h-4 w-4" suppressHydrationWarning />
              Source
            </a>
            {project.demoUrl ? (
              <a href={project.demoUrl} data-testid="project-demo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
                <Link2 className="h-4 w-4" suppressHydrationWarning />
                Demo
              </a>
            ) : null}
          </div>

          <Link href={`/projects/${project.slug}`} data-testid={`project-details-${project.slug}`} className="inline-flex items-center gap-1.5 font-medium text-slate-800 transition group-hover:text-sky-600 dark:text-slate-100 dark:group-hover:text-sky-400">
            Details
            <ArrowUpRight className="h-4 w-4" suppressHydrationWarning />
          </Link>
        </div>
      </div>
    </article>
  );
}
