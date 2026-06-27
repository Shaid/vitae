import { SkillCategory } from "@/types/resume";

interface SkillsPanelProps {
  data: SkillCategory[];
}

export function SkillsPanel({ data }: SkillsPanelProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
        Skills
      </h2>
      {data.map((category, index) => (
        <article key={index} className="mb-4">
          <h4 className="font-medium text-sm text-gray-600 mb-1">
            {category.title}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {category.items.map((item, i) => (
              <li key={i}>{item.body}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
