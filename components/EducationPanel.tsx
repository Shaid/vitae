import { Education } from "@/types/resume";
import { FancyDate } from "./FancyDate";
import { DotPointer } from "./DotPointer";

interface EducationPanelProps {
  data: Education[];
}

function EducationItem({ course }: { course: Education }) {
  return (
    <article className="mb-6 pb-4 border-b border-gray-100 last:border-0">
      <h3 className="text-lg font-semibold text-gray-900">{course.course}</h3>
      {course.metadata.venue && (
        <p className="text-sm text-gray-500">
          📍 {course.metadata.venue}
          {course.metadata.location && `, ${course.metadata.location}`}
        </p>
      )}
      {course.metadata.url && (
        <p className="text-sm text-gray-500">
          🔗{" "}
          <a
            href={`http://${course.metadata.url}`}
            className="text-blue-600 hover:underline"
          >
            {course.metadata.url}
          </a>
        </p>
      )}
      {course.date && (
        <p className="text-sm text-gray-500">
          📅 Completed <FancyDate date={course.date} />
        </p>
      )}
      {course.description && (
        <p className="text-sm text-gray-600 mt-2">
          {course.description.join(" ")}
        </p>
      )}
      {course.sections?.map((section, index) => (
        <DotPointer key={index} data={section} />
      ))}
    </article>
  );
}

export function EducationPanel({ data }: EducationPanelProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
        Education
      </h2>
      {data.map((course, index) => (
        <EducationItem key={index} course={course} />
      ))}
    </section>
  );
}
