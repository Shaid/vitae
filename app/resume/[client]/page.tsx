import { notFound } from "next/navigation";
import { getResumeData, getAvailableClients } from "@/lib/data";
import { Header } from "@/components/Header";
import { EmploymentPanel } from "@/components/EmploymentPanel";
import { EducationPanel } from "@/components/EducationPanel";
import { SkillsPanel } from "@/components/SkillsPanel";

interface PageProps {
  params: Promise<{ client: string }>;
}

export async function generateStaticParams() {
  const clients = getAvailableClients();
  return clients.map((client) => ({ client }));
}

export async function generateMetadata({ params }: PageProps) {
  const { client } = await params;
  const resume = getResumeData(client);
  if (!resume) return { title: "Not Found" };
  return { title: `${resume.name} | Resume` };
}

export default async function ResumePage({ params }: PageProps) {
  const { client } = await params;
  const resume = getResumeData(client);

  if (!resume) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
      <Header resume={resume} />
      <div>
        <EmploymentPanel data={resume.employment} />
        <EducationPanel data={resume.education} />
        <SkillsPanel data={resume.skills} />
      </div>
    </main>
  );
}
