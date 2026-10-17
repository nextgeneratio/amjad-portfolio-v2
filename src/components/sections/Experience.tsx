import { experienceEntries } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Professional background with a business-oriented perspective."
        description="My work in automotive sales has strengthened communication, requirement gathering, and clear explanation of value—skills that translate well into software development and product thinking."
      />

      <div className="space-y-6">
        {experienceEntries.map((entry) => (
          <div key={entry.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{entry.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">{entry.company}</p>
              </div>
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {entry.period}
              </span>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
