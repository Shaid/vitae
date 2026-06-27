import { Employment } from "@/types/resume";
import { FancyDate } from "./FancyDate";
import { DotPointer } from "./DotPointer";

interface EmploymentPanelProps {
  data: Employment[];
}

function EmploymentItem({ employment }: { employment: Employment }) {
  return (
    <article className="mb-8 pb-6 border-b border-gray-100 last:border-0">
      <h3 className="text-lg font-semibold text-gray-900">
        {employment.role}
      </h3>
      <p className="text-sm text-gray-500">
        📍 {employment.employer.name}, {employment.employer.location}
      </p>
      <p className="text-sm text-gray-500">
        📅 <FancyDate date={employment.startDate} /> &ndash;{" "}
        <FancyDate date={employment.endDate} />
      </p>
      <p className="text-sm text-gray-500">
        🔗{" "}
        <a
          href={`http://${employment.employer.url}`}
          className="text-blue-600 hover:underline"
        >
          {employment.employer.url}
        </a>
      </p>

      {employment.sections.map((section, index) => (
        <DotPointer key={index} data={section} />
      ))}
    </article>
  );
}

export function EmploymentPanel({ data }: EmploymentPanelProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
        Employment
      </h2>
      {data.map((employment, index) => (
        <EmploymentItem key={index} employment={employment} />
      ))}
    </section>
  );
}
