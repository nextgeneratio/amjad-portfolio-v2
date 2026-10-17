import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/ProjectDetails";
import RathnaStoreDemo from "@/components/projects/RathnaStoreDemo";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  if (slug === "rathna-stores") {
    return <RathnaStoreDemo />;
  }

  return <ProjectDetails project={project} />;
}
