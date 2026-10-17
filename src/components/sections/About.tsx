import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About me"
        title="I learn by building and improving useful software."
        description="My work sits between coursework, practical projects, and real-world communication with people and problems."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{portfolio.about}</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/80">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">What shapes my approach</h3>
          <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-200">
            <li>• Practical applications over abstract theory alone</li>
            <li>• Structured thinking and iterative improvement</li>
            <li>• Designing for usability and business value</li>
            <li>• Continuous learning through project work</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
