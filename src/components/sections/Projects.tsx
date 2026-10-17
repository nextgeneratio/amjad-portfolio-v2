import Link from "next/link";

import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured projects"
        title="Projects that reflect practical problem-solving and learning."
        description="Each project was selected for its technical relevance, real-world usefulness, and evidence from source code and project documentation."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects/expense-dss" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-sky-400">
          View project case studies
        </Link>
      </div>
    </section>
  );
}
