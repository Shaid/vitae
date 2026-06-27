import { HeaderSection, ResumeData } from "@/types/resume";

interface HeaderProps {
  resume: ResumeData;
}

function HeaderContent({ content }: { content: HeaderSection }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {content.title}
      </h2>
      {content.body.map((paragraph, index) => (
        <p key={index} className="text-sm text-gray-600 mb-1">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export function Header({ resume }: HeaderProps) {
  return (
    <aside className="sidebar">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{resume.name}</h1>
        {resume.role && (
          <h2 className="text-md text-gray-600 mt-1">{resume.role}</h2>
        )}
      </header>

      {resume.header.map((content, index) => (
        <HeaderContent key={index} content={content} />
      ))}

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact</h2>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            ✉{" "}
            <a
              href={`mailto:${resume.contacts.email}`}
              className="text-blue-600 hover:underline"
            >
              {resume.contacts.email}
            </a>
          </p>
          <p>☎ {resume.contacts.phone}</p>
          <p>
            ⌨{" "}
            <a
              href={`https://github.com/${resume.contacts.github}`}
              className="text-blue-600 hover:underline"
            >
              {resume.contacts.github} @ GitHub
            </a>
          </p>
        </div>
      </section>
    </aside>
  );
}
