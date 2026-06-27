import { Section } from "@/types/resume";

interface DotPointerProps {
  data: Section;
}

export function DotPointer({ data }: DotPointerProps) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <div>
      <h4 className="font-medium text-sm text-gray-600 mt-3 mb-1">
        {data.title}
      </h4>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {data.items.map((item, index) => (
          <li key={index}>
            {item.title && item.url && (
              <span>
                <strong>{item.title}</strong> &ndash;{" "}
                <a
                  href={`http://${item.url}`}
                  className="text-blue-600 hover:underline"
                >
                  {item.url}
                </a>
                <br />
              </span>
            )}
            {item.title && !item.url && <strong>{item.title}: </strong>}
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
